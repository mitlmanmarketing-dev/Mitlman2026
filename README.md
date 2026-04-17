# Mitlman Marketing 2026

A modern marketing website built with FastAPI backend and React frontend, featuring Vercel Speed Insights for performance monitoring.

## Features

- ⚡ FastAPI backend for API endpoints
- ⚛️ React frontend with Vite
- 📊 Vercel Speed Insights for Core Web Vitals monitoring
- 🎨 Modern, responsive design

## Prerequisites

- Python 3.9+
- Node.js 18+
- npm, yarn, pnpm, or bun

## Installation

### Backend Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

### Frontend Setup

Install Node.js dependencies:
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

## Development

### Run Backend (Terminal 1)
```bash
python main.py
# or
uvicorn main:app --reload
```

The API will be available at http://localhost:8000

### Run Frontend (Terminal 2)
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

The frontend will be available at http://localhost:3000 or http://localhost:5173

## Production Build

1. Build the frontend:
```bash
npm run build
```

2. Run the FastAPI server:
```bash
python main.py
```

The application will serve the built React app and API from http://localhost:8000

## Vercel Speed Insights

This project includes Vercel Speed Insights to monitor Core Web Vitals:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

The SpeedInsights component is integrated in `src/App.jsx` and will automatically collect performance metrics when deployed to Vercel.

### Enabling Speed Insights on Vercel

1. Deploy your project to Vercel
2. Navigate to your project dashboard on Vercel
3. Go to the "Speed Insights" tab in the sidebar
4. Click "Enable" to activate Speed Insights for your project

After enabling and receiving traffic, you'll see performance metrics in your Vercel dashboard.

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/info` - Service information

## License

© 2026 Mitlman Marketing. All rights reserved.
