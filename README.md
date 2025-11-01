# Travel Smart UI

A modern, interactive travel planning application that recommends personalized destinations based on user preferences through an intuitive step-by-step wizard flow.

## Features

- **Experience-First Planning**: Choose your ideal travel experience (beach, city, adventure, cultural, romantic, nightlife) and get personalized recommendations
- **Smart Recommendations**: AI-powered destination matching with confidence scores
- **Comprehensive Information**: Weather, cost breakdowns, activities, flight info, and accommodations for each destination
- **Responsive Design**: Mobile-first approach with optimized mobile and desktop experiences
- **Modern Tech Stack**: Built with Next.js 14, React 19, TypeScript, and Tailwind CSS

## Product Requirements

See [travel_smart_prd.md](./travel_smart_prd.md) for detailed product requirements and specifications.

## Mock Data Structure

The application uses comprehensive mock data defined in [travel_smart_mockdata.ts](./travel_smart_mockdata.ts), including:

- Travel experience types, companions, activity levels
- Budget ranges, durations, flight distances
- 5 detailed destination profiles with costs, activities, and travel information
- Helper functions for recommendation filtering

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd travel-smart-ui
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
travel-smart-ui/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── wizard/                  # Wizard flow components
│   │   ├── StepIndicator.tsx    # Progress indicator
│   │   ├── ExperienceSelector.tsx # Experience type selection
│   │   ├── OptionSelector.tsx   # Generic option selector
│   │   ├── BudgetSelector.tsx   # Budget range selection
│   │   ├── SpecialRequirementsSelector.tsx # Accessibility options
│   │   └── WizardContainer.tsx  # Main wizard logic
│   └── recommendations/         # Recommendation display
│       ├── DestinationCard.tsx  # Individual destination cards
│       └── RecommendationsContainer.tsx # Results page
├── contexts/                    # React contexts
│   └── WizardContext.tsx        # Wizard state management
├── travel_smart_mockdata.ts     # Mock data and types
├── travel_smart_prd.md          # Product requirements document
└── types/                       # TypeScript type definitions (future)
```

## Key Components

### Wizard Flow

A 7-step guided experience:

1. **Experience Type**: Choose between beach, city, adventure, cultural, romantic, or nightlife
2. **Travel Companion**: Solo, couple, family, or friends
3. **Activity Level**: Relaxation to high adventure
4. **Budget Range**: Economy to luxury (£500-2500+)
5. **Duration**: Weekend getaway to extended stay
6. **Flight Distance**: Short to long haul
7. **Special Requirements**: Child-friendly, accessible, pet-friendly

### Recommendation Engine

- Filters destinations based on user preferences
- Ranks results by confidence score (95% = perfect match)
- Shows top 2 recommendations with detailed information

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: React Context API
- **Deployment**: Vercel-ready

## Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality

- Strict TypeScript configuration
- ESLint for code quality
- Tailwind CSS for consistent styling
- Component-based architecture

## Future Enhancements

As outlined in the PRD, future improvements include:

- ML-based personalization
- Real-time booking integration
- User accounts with saved searches
- Social proof and reviews
- Group trip planning
- Real API integrations

## Contributing

1. Follow the existing code structure and naming conventions
2. Use TypeScript for all new code
3. Ensure responsive design for all components
4. Add proper error handling and loading states
5. Test on both mobile and desktop

## License

This project is part of the Travel Smart application suite.
