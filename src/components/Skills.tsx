import { motion } from 'framer-motion'

const skills = [
  'Artificial Intelligence (AI)',
  'Problem Solving',
  'Communication',
  'Adaptation',
]

const languages = [
  { name: 'Bahasa Indonesia', level: 'Native' },
  { name: 'Bahasa Inggris', level: 'Elementary' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-8">
          <span className="text-sm text-gray-500 tracking-widest uppercase">What I Can Do</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-6 lg:mb-8"
        >
          SKILLS
        </motion.h2>

        {/* Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6 mb-8 lg:mb-10">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-800 pb-4"
            >
              <span className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div {...fadeInUp} className="mb-8">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Bahasa</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>
        <div className="space-y-0 max-w-2xl">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 px-4 -mx-4"
            >
              <span className="text-lg md:text-xl text-gray-300 font-light">
                {language.name}
              </span>
              <span className="text-sm text-gray-500 tracking-widest uppercase">
                {language.level}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
