"use client"

import { cn } from "@/app/lib/utils"
import { AnimatedList } from "../magicui/animated-list"
import Image from "next/image"

interface UserItem {
  name: string
  email: string
  avatarUrl: string
  amount: number
}

const users: UserItem[] = [
  {
    name: "Javier Valenzuela",
    email: "java.zuela@example.com",
    avatarUrl: "avatars/javier.png",
    amount: 245000,
  },
  {
    name: "Darlene Robertson",
    email: "alma.lawson@example.com",
    avatarUrl: "avatars/darlene.png",
    amount: 120000,
  },
  {
    name: "Michael Silva",
    email: "michael.silva@example.com",
    avatarUrl: "avatars/michael.png",
    amount: 305000,
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    avatarUrl: "avatars/kristin.png",
    amount: 305000,
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "avatars/john.png",
    amount: 305000,
  },
  // ...agrega más usuarios si deseas
]

function UserCard({ name, email, avatarUrl, amount }: UserItem) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animación al hacer hover
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // estilos light
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // estilos dark
        "dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex items-center gap-3">
        {/* Imagen del usuario */}
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={avatarUrl}
            alt={`Avatar de ${name}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Datos del usuario */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <span className="text-sm font-medium sm:text-base dark:text-white">
            {name}
          </span>
          <span className="truncate text-xs text-gray-500 dark:text-white/60">
            {email}
          </span>
        </div>

        {/* Campo de monto y botón */}
        <div className="flex items-center gap-2">
          <span className="whitespace-nowrap text-sm font-semibold dark:text-white">
            ${amount.toLocaleString()}
          </span>
          <button
            className="rounded-lg bg-emerald-500 px-3 py-1 text-sm font-medium text-white hover:bg-emerald-600"
            onClick={() => alert(`Enviando $${amount.toLocaleString()} a ${name}`)}
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  )
}

export default function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      {/* Encabezado con fecha de pagos */}
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <label className="font-semibold dark:text-white" htmlFor="fecha-pagos">
          Fecha de pagos
        </label>
        <select
          id="fecha-pagos"
          className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm dark:bg-gray-800 dark:text-white sm:w-auto"
          defaultValue="25"
        >

          <option value="25">25 de cada mes</option>
        </select>
      </div>

      {/* Lista animada de usuarios */}
      <AnimatedList>
        {users.map((user, idx) => (
          <UserCard key={idx} {...user} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  )
}
