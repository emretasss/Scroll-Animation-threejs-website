'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    icon: '🚀',
    title: 'High Performance',
    description: 'Lightning-fast AI processing with optimized infrastructure for real-time applications.',
  },
  {
    icon: '🔒',
    title: 'Secure & Private',
    description: 'Enterprise-grade security with end-to-end encryption and compliance standards.',
  },
  {
    icon: '📈',
    title: 'Scalable Infrastructure',
    description: 'Auto-scaling capabilities to handle any workload from startup to enterprise.',
  },
  {
    icon: '🧠',
    title: 'Advanced AI Models',
    description: 'Access to cutting-edge AI models including GPT, Claude, and custom models.',
  },
  {
    icon: '⚡',
    title: 'Low Latency',
    description: 'Global CDN and edge computing for minimal response times worldwide.',
  },
  {
    icon: '🛠️',
    title: 'Easy Integration',
    description: 'Simple APIs and SDKs for seamless integration with your existing stack.',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="py-24 md:py-32 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to build and deploy AI-powered applications at scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
