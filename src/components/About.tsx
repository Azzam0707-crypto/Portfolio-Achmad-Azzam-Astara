import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-8">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Tentang Saya</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Intro Block */}
        <motion.p
          {...fadeInUp}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light leading-snug max-w-4xl mb-10 lg:mb-14"
        >
          Mahasiswa S1 Sistem Informasi di Universitas Negeri Surabaya, tertarik pada
          Teknologi, Artificial Intelligence, dan Pengembangan Diri. Memiliki pengalaman
          membangun project berbasis AI dan sertifikat dari program AI.
        </motion.p>

        {/* Statement Block */}
        <motion.div
          {...fadeInUp}
          className="mb-10 lg:mb-14"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            SIAP AKTIF<br />
            <span className="text-white">MENGEMBANGKAN</span><br />
            PEMAHAMAN TEKNIS<br />
            MELALUI PROJECT.
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            Project & Pelatihan Terstruktur
          </p>
        </motion.div>

        {/* Detail Rows */}
        <div className="space-y-0 max-w-2xl">
          <motion.div
            {...fadeInUp}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4 border-t border-gray-800 py-6 md:py-8 px-4 -mx-4"
          >
            <div>
              <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                Universitas Negeri Surabaya
              </h3>
              <p className="text-sm text-gray-500 mt-1 md:mt-2">
                Sarjana Komputer - Sistem Informasi · NIM 26051214025
              </p>
            </div>
            <span className="text-sm text-gray-600">2026 - Sedang Berlangsung</span>
          </motion.div>
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
