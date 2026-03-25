import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-[8%] pt-32 pb-20 relative overflow-hidden"
       
    >

         <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
           </div>
      {/* Orbs */}
      <div
        className="absolute rounded-full -top-24 -right-24 animate-float"
        style={{ width: 600, height: 600, background: 'rgba(56,189,248,0.07)', filter: 'blur(100px)' }}
      />
      <div
        className="absolute rounded-full -bottom-12 -left-24 animate-float"
        style={{ width: 400, height: 400, background: 'rgba(59,130,246,0.07)', filter: 'blur(100px)', animationDelay: '-4s' }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl w-full z-10">
        {/* Content */}
        <div>
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7 border"
            style={{ background: 'rgba(56,189,248,0.06)', borderColor: 'rgba(56,189,248,0.18)' }}>
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-cyan-400 font-semibold tracking-widest uppercase">Open to Opportunities</span>
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} className="font-black leading-[1.05] tracking-tight" style={{ fontSize: 'clamp(2.8rem,6vw,5rem)' }}>
            <span 
            style={{
    background: 'linear-gradient(135deg, #6d28d9, #c084fc)', // dark → light purple
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
            
            
            
            >Hassan</span>
            <br />
            <span style={{ background: 'linear-gradient(135deg,#38bdf8,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Muawia
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="text-slate-400 text-lg font-medium mt-4">
            ⚡ Frontend Developer
          </motion.p>

          <motion.p {...fadeUp(0.3)} className="text-slate-400 leading-relaxed mt-3 max-w-[480px]">
            I craft <strong className="text-black">pixel-perfect</strong>, performant web interfaces
            that users love — turning creative designs into fast, accessible, and beautiful digital experiences.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex gap-4 mt-9 flex-wrap">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg,#06b6d4,#3b82f6)', boxShadow: '0 4px 20px rgba(56,189,248,0.25)' }}
            >
              <i className="fas fa-rocket" /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold border transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-400"
              style={{ borderColor: 'rgba(99,179,237,0.25)', background: 'transparent' }}
            >
              <i className="fas fa-envelope" /> Let's Talk
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.5)} className="flex gap-10 mt-11">
            {[['4+', 'Projects Built'], ['6+', 'Tech Skills'], ['100%', 'Passion']].map(([num, label]) => (
              <div key={label}>
                <div className="text-2xl font-black text-black tracking-tight">{num}</div>
                <div className="text-xs text-slate-500 mt-1 tracking-wide">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex justify-center items-center"
        >
          <div className="relative w-[320px] h-[320px]">
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full animate-rotate"
              style={{ background: 'conic-gradient(from 0deg,#38bdf8,#3b82f6,#818cf8,#38bdf8)', padding: 2 }}>
              <div className="rounded-full w-full h-full" style={{ background: '#080c14' }} />
            </div>

            {/* Inner circle */}
            <div className="absolute inset-4 rounded-full flex items-center justify-center border overflow-hidden"
              style={{ background: 'linear-gradient(145deg,#0d1424,#111827)', borderColor: 'rgba(56,189,248,0.1)' }}>
              <span className="text-7xl font-black"
                style={{ background: 'linear-gradient(135deg,#38bdf8,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                HM
              </span>
            </div>

            {/* Floating chips */}
            <div className="absolute -right-6 top-6 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border animate-chip"
              style={{ background: '#111827', borderColor: 'rgba(99,179,237,0.12)', boxShadow: '0 0 30px rgba(56,189,248,0.1)' }}>
              ⚛️ React Dev
            </div>
            <div className="absolute -left-8 bottom-10 flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border"
              style={{ background: '#111827', borderColor: 'rgba(99,179,237,0.12)', animation: 'chipFloat 4s ease-in-out infinite', animationDelay: '-2s' }}>
              🎨 UI Designer
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}