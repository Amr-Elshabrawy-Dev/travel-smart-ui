# TravelSmart 🌍

A modern, AI-powered travel planning and booking platform built with Next.js 14, featuring intelligent destination recommendations and a conversational AI assistant.

[![Next.js](https://img.shields.io/badge/Next.js-16.0.1-000000?style=flat&logo=next.js)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) [![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?style=flat&logo=google&logoColor=white)](https://ai.google.dev/)

## ✨ Features

- **🤖 AI-Powered Assistant**: Conversational AI using Google Gemini for personalized travel recommendations
- **🧭 Smart Wizard**: Interactive step-by-step travel preference wizard
- **🏖️ Destination Discovery**: Browse and filter destinations by category, budget, and preferences
- **💳 Booking System**: Integrated booking flow with trip summaries and passenger details
- **📱 Responsive Design**: Premium UI with GlassMorphism, gradients, and smooth animations
- **🎨 Modern UX**: Framer Motion animations throughout for delightful interactions

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.0.1](https://nextjs.org/) with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **AI**: Google Gemini 2.5 Flash API
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Google Gemini API key (free tier available)

## 🚀 Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/Amr-Elshabrawy-Dev/travel-smart-ui.git
cd travel-smart-ui
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install

# or

yarn install
\`\`\`

### 3. Set Up Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
\`\`\`

**To get your free Gemini API key:**

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy and paste it into your \`.env.local\`

### 4. Run the Development Server

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
travel-smart-ui/
├── app/ # Next.js app directory
│ ├── about/ # About page
│ ├── booking/[id]/ # Booking flow
│ ├── destination/ # Destination pages
│ │ ├── [id]/ # Individual destination
│ │ └── page.tsx # All destinations
│ ├── journey/ # Travel wizard
│ ├── layout.tsx # Root layout
│ └── page.tsx # Homepage
├── components/ # React components
│ ├── chat/ # AI chat widget
│ ├── hero/ # Hero sections
│ ├── recommendations/ # Destination cards
│ ├── sections/ # Page sections
│ ├── wizard/ # Wizard components
│ ├── Footer.tsx
│ ├── Icon.tsx
│ └── Navbar.tsx
├── contexts/ # React contexts
│ └── WizardContext.tsx
├── data/ # Static data
│ ├── destinations/ # Destination database
│ └── ui/ # UI content
├── hooks/ # Custom React hooks
│ └── useChat.ts # AI chat logic
├── lib/ # Utilities
│ └── gemini.ts # Gemini AI service
└── public/ # Static assets
\`\`\`

## 🎯 Key Features Explained

### AI Travel Assistant

The chat widget in the bottom-right corner uses Google's Gemini AI to:

- Understand natural language queries
- Maintain conversation context
- Recommend destinations from the database
- Ask clarifying questions about preferences

### Travel Planning Wizard

A 7-step interactive wizard that collects:

1. Experience Type (Adventure, Relaxation, Cultural, etc.)
2. Travel Companion (Solo, Couple, Family, Friends)
3. Activity Level (Relaxation, Light, Moderate, Active)
4. Budget Range
5. Trip Duration
6. Flight Distance Preference
7. Special Requirements

### Destination Database

Curated destinations with:

- Detailed descriptions and highlights
- Weather information
- Estimated costs breakdown
- Suggested travel dates
- Top activities
- Accommodation details
- Multiple high-quality images

### Booking Flow

Simple booking process:

- Trip summary with pricing
- Passenger details form
- Guest count with dynamic pricing
- Confirmation screen

## 🎨 Design Philosophy

- **Premium Aesthetics**: Vibrant gradients, GlassMorphism, modern typography
- **Smooth Animations**: Framer Motion for micro-interactions
- **Responsive**: Mobile-first design, works on all devices
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## 🔑 Environment Variables

| Variable                       | Description                       | Required |
| ------------------------------ | --------------------------------- | -------- |
| \`NEXT_PUBLIC_GEMINI_API_KEY\` | Google Gemini API key for AI chat | Yes      |

## 📝 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm start\` - Start production server
- \`npm run lint\` - Run ESLint

## 🐛 Known Issues

- Gemini API free tier limited to 15 requests/minute
- Some older browsers may not support all CSS features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Google Gemini](https://ai.google.dev/) - AI capabilities
- [Lucide](https://lucide.dev/) - Icons
- [Unsplash](https://unsplash.com/) - Destination images

---

## 🌐 Let's Connect

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://github.com/Amr-Elshabrawy-Dev) [![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/201202546653?text=Hi%20Amr!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20collaboration) [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Amr-Elshabrawy-Dev) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=logmein&logoColor=white)](https://www.linkedin.com/in/amr-elshabrawy-dev) [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:amrelshabrawy.dev@gmail.com) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=x&logoColor=white)](https://www.x.com/@AmrElshabr43803)

</div>

---

<div align="center">
    <img src="https://raw.githubusercontent.com/Amr-Elshabrawy-Dev/Amr-Elshabrawy-Dev/d2af4e72d144384618fa4acfb4b773495adacb07/assets/amr.svg" alt="Amr Elshabrawy Logo" width="150px">
    <br/><br/>
    <p align="center">
        Created with 💚 and ☕ by <strong><a href="https://github.com/Amr-Elshabrawy-Dev" target="_blank" rel="noopener noreferrer">AMR ELSHABRAWY</a></strong><br>
        &copy; 2025 | All Rights Reserved | Keep coding 🚀
    </p>
</div>
