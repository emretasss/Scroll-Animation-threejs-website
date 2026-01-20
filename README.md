# NeuralCore X1 - Scroll Animation

A high-end scroll-based animation landing page built with Next.js, Framer Motion, and HTML5 Canvas.

## Features

- **Scroll-linked animation**: 240-frame image sequence that plays as you scroll
- **Smooth transitions**: Text overlays fade in/out at different scroll points
- **Performance optimized**: Uses HTML5 Canvas for smooth rendering
- **Responsive design**: Works on all screen sizes from 320px to 1440px+
- **Dark theme**: Seamless background matching (#050505)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
threejs/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page with scroll animation
│   └── globals.css     # Global styles
├── components/
│   └── ChipScroll.tsx  # Canvas scroll component
├── public/
│   └── sequence/       # 240 frame images
└── package.json
```

## How It Works

1. **Scroll Detection**: Uses Framer Motion's `useScroll` to track scroll progress
2. **Frame Mapping**: Maps scroll position (0-1) to frame index (0-239)
3. **Canvas Rendering**: Draws the current frame to canvas on each scroll update
4. **Text Overlays**: Text sections fade in/out at specific scroll percentages:
   - 0%: "NeuralCore X1. The Future of AI."
   - 30%: "256 Billion Parameters."
   - 60%: "Built for Speed. Designed for Scale."
   - 90%: "Power Your Next Breakthrough."

## Technologies

- **Next.js 14** (App Router)
- **React 18**
- **Framer Motion** (Scroll animations)
- **TypeScript**
- **Tailwind CSS**
- **HTML5 Canvas**

## Notes

- All 240 images are pre-loaded before the animation starts
- Canvas automatically scales to maintain aspect ratio
- Background color matches the image sequence (#050505) for seamless blending
# Scroll-Animation-threejs-website
