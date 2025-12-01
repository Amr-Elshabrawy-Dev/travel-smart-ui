"use client";

import { useState, useCallback, useEffect } from "react";
import { chatWithGemini } from "@/lib/gemini";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

export const useChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<
    { role: string; parts: { text: string }[] }[]
  >([]);

  // Initial greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "1",
          text: "Hi there! 👋 I'm your AI Travel Assistant powered by real AI. Tell me about your dream trip - budget, interests, who you're traveling with, anything!",
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    }
  }, [messages.length]);

  const toggleChat = () => setIsOpen((prev) => !prev);

  const sendMessage = useCallback(
    async (text: string) => {
      // Add user message
      const userMsg: Message = {
        id: Date.now().toString(),
        text,
        sender: "user",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setIsTyping(true);

      // Add to conversation history in Gemini format
      const newHistory = [
        ...conversationHistory,
        { role: "user", parts: [{ text }] },
      ];

      try {
        // Call Gemini AI
        const aiResponse = await chatWithGemini(text, conversationHistory);

        // Add AI response to messages
        const aiMsg: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          sender: "ai",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, aiMsg]);

        // Update conversation history
        setConversationHistory([
          ...newHistory,
          { role: "model", parts: [{ text: aiResponse }] },
        ]);
      } catch (error) {
        const errorMsg: Message = {
          id: (Date.now() + 1).toString(),
          text:
            error instanceof Error
              ? error.message
              : "Sorry, I'm having trouble right now. Please check that your API key is set correctly in .env.local",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMsg]);
      } finally {
        setIsTyping(false);
      }
    },
    [conversationHistory]
  );

  return {
    isOpen,
    toggleChat,
    messages,
    sendMessage,
    isTyping,
  };
};
