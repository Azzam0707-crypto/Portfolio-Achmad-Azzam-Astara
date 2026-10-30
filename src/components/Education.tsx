import { motion } from 'framer-motion'

const education = [
  {
    school: 'Universitas Negeri Surabaya',
    degree: 'Sarjana Komputer - Sistem Informasi',
    period: '2026 - Sedang Berlangsung',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-8">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-6 lg:mb-8"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-0 max-w-3xl">
          {education.map((item, index) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 border-t border-gray-800 py-4 md:py-5 px-4 -mx-4"
            >
              <div>
                <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                  {item.school}
                </h3>
                <p className="text-sm text-gray-500 mt-1 md:mt-2">
                  {item.degree}
                </p>
              </div>
              <span className="text-sm text-gray-600">{item.period}</span>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
