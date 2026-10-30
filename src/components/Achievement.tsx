import { motion } from 'framer-motion'

const achievements = [
  {
    title: 'AI for Work and Career Readiness with Google AI Products',
    issuer: 'Hacktiv8 Indonesia',
    year: 'September 2026',
  },
  {
    title: 'Gemini Certified University Student',
    issuer: 'Google for Education',
    year: 'Agustus 2026 - Agustus 2029',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Achievement() {
  return (
    <section id="achievement" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-8">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Sertifikasi</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-6 lg:mb-8"
        >
          ACHIEVEMENT
        </motion.h2>

        {/* Achievements List */}
        <div className="space-y-0">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 border-t border-gray-800 py-4 md:py-5 px-4 -mx-4"
            >
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 md:mt-2">
                  Sertifikasi - {item.issuer}
                </p>
              </div>
              <span className="text-sm text-gray-600">{item.year}</span>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
