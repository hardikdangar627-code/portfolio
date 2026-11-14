import { motion, useScroll, useSpring } from 'framer-motion'
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return <motion.div style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-white/80" aria-hidden />
}
