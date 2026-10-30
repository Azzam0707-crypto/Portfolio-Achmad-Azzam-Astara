import { motion } from 'framer-motion'
import portraitImage from '@/assets/azzam-portrait.png'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Base layer - solid black backdrop */}
      <div className="absolute inset-0 w-full h-full bg-black" />

      {/* Portrait - centered, full height, like the original template */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
        className="pointer-events-none absolute inset-0 z-[1] flex items-end justify-center"
      >
        <img
          src={portraitImage}
          alt="Achmad Azzam Astara"
          className="h-[95%] w-auto max-w-none object-cover object-top"
        />
      </motion.div>

      {/* Overlays for text readability */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-black/35 md:bg-black/25" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-64 bg-gradient-to-t from-background via-background/60 via-40% to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-hero">
              <span className="block text-white">ACHMAD</span>
              <span className="block text-white">AZZAM</span>
              <span className="block text-white">ASTARA</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-[240px] sm:max-w-sm md:max-w-md leading-relaxed"
            >
              Mahasiswa Sistem Informasi, Universitas Negeri Surabaya -
              tertarik pada Teknologi, Artificial Intelligence, dan Pengembangan Diri.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
