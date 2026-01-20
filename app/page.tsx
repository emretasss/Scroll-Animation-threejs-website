'use client'

import { useScroll, useTransform, motion } from 'framer-motion'
import ChipScroll from '@/components/ChipScroll'
import Navbar from '@/components/Navbar'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import About from '@/components/About'
import Contact from '@/components/Contact'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  // Use page scroll for all animations
  const { scrollYProgress } = useScroll()

  // Text opacity animations at different scroll points
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.15, 0.2],
    [1, 1, 0, 0]
  )
  
  const subtitle1Opacity = useTransform(
    scrollYProgress,
    [0.1, 0.15, 0.25, 0.3],
    [0, 1, 1, 0]
  )
  
  const subtitle2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.4, 0.45],
    [0, 1, 1, 0]
  )
  
  const ctaOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.45, 0.5],
    [0, 1, 1]
  )

  // Text position animations
  const titleY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const subtitle1X = useTransform(scrollYProgress, [0.15, 0.3], [-100, 0])
  const subtitle2X = useTransform(scrollYProgress, [0.3, 0.45], [100, 0])
  const ctaY = useTransform(scrollYProgress, [0.45, 0.5], [50, 0])

  return (
    <main className="relative bg-[#050505] text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section with Scroll Animation */}
      <section id="home" className="relative">
        {/* Scroll Animation Canvas - Fixed background */}
        <ChipScroll />

        {/* Scroll container - creates scroll space for hero */}
        <div className="relative h-[400vh]">
          {/* Text Overlays */}
          <div className="fixed inset-0 pointer-events-none z-10">
            {/* Title - 0% Scroll */}
            <motion.div
              style={{
                opacity: titleOpacity,
                y: titleY,
              }}
              className="absolute top-0 left-0 right-0 h-screen flex items-center justify-center"
            >
              <div className="text-center px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  NeuralCore X1
                </h1>
                <p className="text-xl md:text-2xl text-white/60 tracking-tight">
                  The Future of AI Infrastructure.
                </p>
              </div>
            </motion.div>

            {/* Subtitle 1 - 10% Scroll */}
            <motion.div
              style={{
                opacity: subtitle1Opacity,
                x: subtitle1X,
              }}
              className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-24"
            >
              <div className="max-w-md">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  256 Billion Parameters.
                </h2>
              </div>
            </motion.div>

            {/* Subtitle 2 - 25% Scroll */}
            <motion.div
              style={{
                opacity: subtitle2Opacity,
                x: subtitle2X,
              }}
              className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16 lg:pr-24"
            >
              <div className="max-w-md text-right">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Built for Speed.
                </h2>
                <p className="text-2xl md:text-3xl mt-2 text-white/70">
                  Designed for Scale.
                </p>
              </div>
            </motion.div>

            {/* CTA - 40% Scroll */}
            <motion.div
              style={{
                opacity: ctaOpacity,
                y: ctaY,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center px-4">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white/90 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                  Power Your Next Breakthrough.
                </h2>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-4 bg-white text-[#050505] font-semibold text-lg rounded-lg hover:bg-white/90 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.3)] pointer-events-auto"
                >
                  Get Started
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Services Section */}
      <Services />

      {/* Pricing Section */}
      <Pricing />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  )
}
