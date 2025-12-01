"use client";

import React from "react";
import { motion } from "framer-motion";
import { Message } from "../../hooks/useChat";
import Icon from "../Icon";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAi = message.sender === "ai";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex w-full mb-4 ${isAi ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`flex max-w-[80%] ${isAi ? "flex-row" : "flex-row-reverse"}`}
      >
        {/* Avatar */}
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
            isAi
              ? "bg-linear-to-r from-blue-600 to-purple-600 mr-2"
              : "bg-gray-200 ml-2"
          }`}
        >
          {isAi ? (
            <Icon name="Bot" size={16} className="text-white" />
          ) : (
            <Icon name="User" size={16} className="text-gray-600" />
          )}
        </div>

        {/* Bubble */}
        <div
          className={`p-3 rounded-2xl text-sm leading-relaxed shadow-xs ${
            isAi
              ? "bg-white text-gray-800 rounded-tl-none border border-gray-100"
              : "bg-blue-600 text-white rounded-tr-none"
          }`}
        >
          {message.text}
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;
