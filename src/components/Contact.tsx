import { motion } from 'framer-motion'

const contacts = [
  { label: 'EMAIL', value: 'azzamastara07@gmail.com', href: 'mailto:azzamastara07@gmail.com' },
  { label: 'TELEPON', value: '0819-4921-0547', href: 'tel:+6281949210547' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/achmad-azzam-astara', href: 'https://linkedin.com/in/achmad-azzam-astara' },
  { label: 'GITHUB', value: 'github.com/Azzam0707-crypto', href: 'https://github.com/Azzam0707-crypto' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-8">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Contact</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          Get in touch
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-6 lg:mb-8"
        />

        {/* Informal Text */}
        <motion.div
          {...fadeInUp}
          className="mb-6 lg:mb-8 max-w-2xl"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            MARI TERHUBUNG<br />
            DAN BERKOLABORASI
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            PUNYA PROYEK, KOLABORASI, ATAU SEKADAR MENYAPA? HUBUNGI SAYA MELALUI:
          </p>
        </motion.div>

        {/* Contact Links */}
        <div className="space-y-0 max-w-2xl">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <span className="text-sm text-gray-400 tracking-widest shrink-0 mr-4">
                {contact.label}
              </span>
              <span className="text-sm md:text-base text-gray-300 group-hover:text-white transition-colors truncate">
                {contact.value}
              </span>
              <span className="text-gray-500 group-hover:text-white transition-colors ml-4">
                ↗
              </span>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-12 lg:mt-14 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Achmad Azzam Astara. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Surabaya, Indonesia
          </p>
        </motion.footer>
      </div>
    </section>
  )
}
