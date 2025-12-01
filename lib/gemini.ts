import { GoogleGenerativeAI } from "@google/generative-ai";
import { destinations } from "@/data";

// Initialize the Gemini AI
const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
);

// Create a system prompt with destination knowledge
const createSystemPrompt = () => {
  const destinationList = destinations
    .map(
      (d) =>
        `- ${d.name}, ${d.country} (${d.region}): Tags: ${d.tags.join(
          ", "
        )}. Budget: ${d.budgetCategory}. Best for: ${d.bestFor.join(", ")}.`
    )
    .join("\n");

  return `You are a helpful travel assistant for TravelSmart, a travel booking platform. 

Your role is to help users find their perfect destination from our available list.

AVAILABLE DESTINATIONS:
${destinationList}

INSTRUCTIONS:
1. Have natural, friendly conversations with users
2. Ask clarifying questions to understand their preferences (budget, interests, travel companions, etc.)
3. Recommend destinations ONLY from the list above
4. Be enthusiastic and highlight what makes each destination special
5. Keep responses concise and engaging
6. If recommending destinations, format them like: "**Destination Name, Country**"
7. Don't make up destinations - only suggest from the list above

Remember: You're helping real people plan their dream trips!`;
};

export const chatWithGemini = async (
  userMessage: string,
  conversationHistory: { role: string; parts: { text: string }[] }[]
) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: createSystemPrompt() }],
        },
        {
          role: "model",
          parts: [
            {
              text: "I understand! I'm your TravelSmart assistant, ready to help you find the perfect destination from our curated list. What kind of trip are you dreaming of?",
            },
          ],
        },
        ...conversationHistory,
      ],
    });

    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini AI Error:", error);
    throw new Error(
      "Sorry, I'm having trouble connecting to my brain right now. Please try again in a moment."
    );
  }
};
