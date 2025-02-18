"use client"

import { cn } from "@/app/lib/utils"
import { forwardRef, useRef } from "react"
import { AnimatedBeam } from "../magicui/animated-beam"
import { FaFileAlt, FaCalendarAlt, FaCreditCard, FaBolt } from "react-icons/fa"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Aseguramos que el contenedor no se encoja en móvil
          "relative z-10 flex-none flex items-center justify-center",
          "rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 text-black/60 dark:text-white",
          "shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] w-16 h-16 overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    )
  }
)

Circle.displayName = "Circle"

export default function AnimatedBeamMultipleOutputDemo({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const openaiRef = useRef<HTMLDivElement>(null)
  const final1Ref = useRef<HTMLDivElement>(null)
  const final2Ref = useRef<HTMLDivElement>(null)
  const final3Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[400px] w-full items-center justify-center overflow-hidden p-4 sm:p-10",
        // Para que en móviles se permita reflow, podrías usar flex-wrap
        // "flex-wrap" 
        className
      )}
    >
      <div
        className={cn(
          // Ajuste responsive: en pantallas muy pequeñas, podrías hacer que se pongan en columna
          // "flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-8 w-full"
          "flex w-full flex-row items-center justify-between gap-8"
        )}
      >
        {/* Avatar a la izquierda */}
        <Circle ref={avatarRef}>
          <img
            src="/avatars/john.png"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </Circle>

        {/* Ícono central */}
        <Circle ref={openaiRef}>
          <FaBolt size={28} />
        </Circle>

        {/* Tres íconos finales en columna */}
        <div className="flex flex-col items-center gap-4">
          <Circle ref={final1Ref}>
            <FaFileAlt size={24} />
          </Circle>
          <Circle ref={final2Ref}>
            <FaCalendarAlt size={24} />
          </Circle>
          <Circle ref={final3Ref}>
            <FaCreditCard size={24} />
          </Circle>
        </div>
      </div>

      {/* Líneas animadas */}
      <AnimatedBeam containerRef={containerRef} fromRef={avatarRef} toRef={openaiRef} duration={2} />
      <AnimatedBeam containerRef={containerRef} fromRef={openaiRef} toRef={final1Ref} duration={2} />
      <AnimatedBeam containerRef={containerRef} fromRef={openaiRef} toRef={final2Ref} duration={2} />
      <AnimatedBeam containerRef={containerRef} fromRef={openaiRef} toRef={final3Ref} duration={2} />
    </div>
  )
}
