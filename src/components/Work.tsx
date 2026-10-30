import { motion } from 'framer-motion'

const projects = [
  {
    title: 'VibeMap',
    type: 'Aplikasi Desktop - Open Source',
    period: 'September 2026 - Berlangsung',
    description: 'Aplikasi desktop yang memindai folder project dan menghasilkan ringkasan bahasa sederhana menggunakan AI, dilengkapi peta visual struktur project (Project Map). Mengintegrasikan dukungan multi-provider AI (OpenAI, Anthropic, Ollama, endpoint kustom). Dibangun dengan pendekatan vibecode, berkolaborasi dengan Claude, Opencode, dan 9router sebagai AI pair-programming stack. Tersedia versi installer dan portable untuk Windows.',
    tags: ['Artificial Intelligence', 'Multi-Provider AI', 'Open Source - MIT', 'Windows'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-8">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Project</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-6 lg:mb-8"
        >
          PROJECT
        </motion.h2>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
              className="border-t border-gray-800 py-5 md:py-6 lg:py-8 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                {/* Left Column - Title & Type */}
                <div className="lg:col-span-5">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base lg:text-lg text-gray-400">
                    {project.type}
                  </p>
                </div>

                {/* Middle Column - Period */}
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">
                    {project.period}
                  </p>
                </div>

                {/* Right Column - Description & Tags */}
                <div className="lg:col-span-5">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
