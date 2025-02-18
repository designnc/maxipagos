"use client"

import { cn } from "@/app/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import React, { type ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
  extraDelayAtEnd?: number // tiempo extra al final de la lista
}

export const AnimatedList = React.memo(({ children, className, delay = 1000, extraDelayAtEnd = 2000, ...props }: AnimatedListProps) => {
  const [index, setIndex] = useState(0)
  const childrenArray = useMemo(() => React.Children.toArray(children), [children])

  useEffect(() => {
    // Si es el último elemento, agregamos extraDelayAtEnd; de lo contrario, usamos delay normal
    const currentDelay = index === childrenArray.length - 1 ? delay + extraDelayAtEnd : delay
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
    }, currentDelay)

    return () => clearTimeout(timeout)
  }, [index, delay, extraDelayAtEnd, childrenArray.length])

  const itemsToShow = useMemo(() => {
    // Mostramos los elementos hasta el índice actual, en orden inverso
    const result = childrenArray.slice(0, index + 1).reverse()
    return result
  }, [index, childrenArray])

  return (
    <div className={cn(`flex flex-col items-center gap-4`, className)} {...props}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={(item as React.ReactElement).key}>{item}</AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  )
})

AnimatedList.displayName = "AnimatedList"
