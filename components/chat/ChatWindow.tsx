"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Message } from "../../hooks/useChat";
import ChatMessage from "./ChatMessage";
import Icon from "../Icon";

interface ChatWindowProps {
  messages: Message[];
  onSendMessage: (text: string) => void;
  isTyping: boolean;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  onSendMessage,
  isTyping,
  onClose,
}) => {
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-24 right-6 w-96 h-[500px] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 flex flex-col overflow-hidden z-50"
    >
      {/* Header */}
      <div className="bg-linear-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-center text-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Icon name="Bot" size={24} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Travel AI</h3>
            <p className="text-xs text-blue-100 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Online
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          title="close"
          className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
        >
          <Icon name="X" size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg} />
        ))}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2 text-gray-400 text-sm ml-2 mb-4"
          >
            <div className="w-8 h-8 rounded-full bg-linear-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <Icon name="Bot" size={16} className="text-white" />
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-xs flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100 shrink-0">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about your trip..."
            className="flex-1 bg-gray-100 border-0 rounded-full px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            title="send message"
            className="w-12 h-12 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 transition-all cursor-pointer"
          >
            <Icon name="Send" size={20} />
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ChatWindow;
