# 🦅 Bird Law - Legal Framework for Avian Litigation

A satirical web app based on Charlie Kelly's "Bird Law" expertise from *It's Always Sunny in Philadelphia*. Features a custom programming language syntax for prosecuting, defending, and settling bird-related legal cases.

## Features

- 🎯 **Custom Bird Law Syntax** - A comedic legal language with validation
- ⚖️ **Real-time Case Analysis** - Instant feedback from "Charlie Kelly"
- 🎨 **Beautiful UI** - Built with Next.js, Tailwind CSS, and shadcn/ui
- 🖼️ **Giphy Integration** - Display GIFs from the show
- 📝 **Code Examples** - Multiple Bird Law case templates

## Bird Law Syntax

```
ACCUSE [bird] OF [crime]          - File formal charges
DEFEND [bird] BECAUSE [reason]    - Provide legal defense
SUMMON [bird] TO COURT            - Issue court summons
FINE [bird] [amount] WORMS        - Impose financial penalty
DECLARE [bird] [status]           - Make official declaration
SETTLE WITH [bird] FOR [terms]    - Reach settlement agreement
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bird-law-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. (Optional) Configure Giphy API:
   - Get a free API key from [developers.giphy.com](https://developers.giphy.com/)
   - Copy `.env.example` to `.env.local`
   - Add your API key:
   ```
   NEXT_PUBLIC_GIPHY_API_KEY=your_actual_api_key
   ```
   - Update `components/GiphyGallery.tsx` to use the environment variable

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. (Optional) Add environment variables in project settings:
   - `NEXT_PUBLIC_GIPHY_API_KEY`
7. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to deploy

### Environment Variables for Production

If using the Giphy API, add the environment variable in Vercel:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add: `NEXT_PUBLIC_GIPHY_API_KEY` with your API key

## Project Structure

```
bird-law-app/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── textarea.tsx
│   ├── BirdLawEditor.tsx    # Main editor component
│   └── GiphyGallery.tsx     # GIF gallery
├── lib/
│   ├── bird-law-parser.ts   # Language parser
│   └── utils.ts             # Utility functions
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Usage Examples

### Simple Accusation
```
ACCUSE seagull OF stealing beach snacks
SUMMON seagull TO COURT
```

### Defense Case
```
ACCUSE hummingbird OF aggressive behavior
DEFEND hummingbird BECAUSE territorial instincts are natural
DECLARE hummingbird INNOCENT
```

### Settlement
```
ACCUSE crow OF property damage
FINE crow 300 WORMS
SETTLE WITH crow FOR community service at local park
```

## Customization

### Modify Bird Law Syntax

Edit `lib/bird-law-parser.ts` to add new commands or modify existing ones.

### Update Styling

- Edit `app/globals.css` for global styles
- Modify Tailwind config in `tailwind.config.js`
- Update component styles in individual component files

### Add More Quotes

Edit the `quotes` array in `app/page.tsx` to add more Charlie Kelly quotes.

## Contributing

This is a satirical fan project. Feel free to fork and customize!

## License

This project is for educational and entertainment purposes only. *It's Always Sunny in Philadelphia* and all related characters are property of their respective owners.

## Acknowledgments

- Inspired by Charlie Kelly's "Bird Law" from *It's Always Sunny in Philadelphia*
- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- GIFs powered by [Giphy](https://giphy.com/)

---

*"I'm not saying I agree with it. It's just that bird law in this country—it's not governed by reason."* - Charlie Kelly
