"use client";

import { cn } from "@/app/lib/utils";
import { AnimatedList } from "../magicui/animated-list";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

interface UserItem {
  name: string;
  email: string;
  avatarUrl: string;
}

const users: UserItem[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    avatarUrl: "avatars/john.png",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    avatarUrl: "avatars/kristin.png",
  },
  {
    name: "Michael Silva",
    email: "michael.silva@example.com",
    avatarUrl: "avatars/michael.png",
  },
  {
    name: "Darlene Robertson",
    email: "alma.lawson@example.com",
    avatarUrl: "avatars/darlene.png",
  },
  {
    name: "Javier Valenzuela",
    email: "java.zuela@example.com",
    avatarUrl: "avatars/javier.png",
  },
  // ...agrega más usuarios si deseas
];

function UserCard({ name, email, avatarUrl }: UserItem) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // Estilos light
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // Estilos dark
        "dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={avatarUrl}
            alt={`Avatar de ${name}`}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col overflow-hidden">
          <span className="text-sm font-medium dark:text-white sm:text-base">
            {name}
          </span>
          <span className="truncate text-xs text-gray-500 dark:text-white/60">
            {email}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-[480px] w-full flex-col overflow-hidden p-4 sm:p-10",
        className
      )}
    >
      {/* Encabezado con fecha de pagos */}
      {/* 
        Para que en todas las pantallas esté en la misma línea,
        quitamos el "sm:flex-row" y dejamos flex-row desde mobile.
      */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <h6 className="font-semibold dark:text-white">Fecha de pagos</h6>
        <div className="flex w-auto items-center gap-2 rounded-md border border-black/10 dark:border-white/10 bg-white px-3 py-2 text-sm dark:bg-zinc-800 dark:text-white">
          <p>25 de cada mes</p>
          <FaChevronDown />
        </div>
      </div>

      {/* 
        Monto total:
        - Se oculta en mobile ("hidden md:flex") para que no bloquee la lista.
        - Si quieres mostrarlo más pequeño en mobile en vez de ocultarlo,
          usa clases responsivas en w/height y quita "hidden md:flex".
      */}
      <div
        className={cn(
          "hidden md:flex", // Oculto en mobile, visible en >= md
          "items-center gap-3",
          "mt-6 w-full max-w-sm", // Ajuste de ancho
          "rounded-md shadow-2xl p-4",
          "bg-white dark:bg-zinc-800",
          "md:absolute md:bottom-8 md:right-0 z-10" // Absoluto sólo en >= md
        )}
      >
        <div className="flex flex-col">
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
            Monto
          </span>
          <span className="text-xl font-bold text-gray-800 dark:text-white">
            $245.000
          </span>
        </div>

        <button className="ml-auto rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600">
          Enviar
        </button>
      </div>

      {/* Lista animada de usuarios */}
      <AnimatedList>
        {users.map((user, idx) => (
          <UserCard key={idx} {...user} />
        ))}
      </AnimatedList>

      {/* Gradiente al final, por si lo usas para un fade-out */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-100 dark:from-background"></div>
    </div>
  );
}
