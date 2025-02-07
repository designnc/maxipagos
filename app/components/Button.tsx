// src/components/ui/Button.tsx
import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "text" | "outline";
  size?: "small" | "medium" | "large";
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  className?: string;
}

/**
 * Devuelve las clases de padding basadas en el tamaño y la presencia de íconos.
 *
 * @param size - Tamaño del botón ('small', 'medium', 'large').
 * @param hasStartIcon - Indica si el botón tiene un ícono al inicio.
 * @param hasEndIcon - Indica si el botón tiene un ícono al final.
 * @returns Clases de Tailwind CSS para el padding.
 */
const getPaddingClasses = (
  size: "small" | "medium" | "large",
  hasStartIcon: boolean,
  hasEndIcon: boolean
): string => {
  const paddingMap: Record<
    "small" | "medium" | "large",
    Record<"none" | "start" | "end" | "both", string>
  > = {
    small: {
      none: "px-3 py-1.5",
      start: "pl-3 pr-4 py-1.5",
      end: "pl-4 pr-3 py-1.5",
      both: "px-3 py-1.5",
    },
    medium: {
      none: "px-4 py-2",
      start: "pl-4 pr-5 py-2",
      end: "pl-5 pr-4 py-2",
      both: "px-4 py-2",
    },
    large: {
      none: "px-5 py-3",
      start: "pl-5 pr-6 py-3",
      end: "pl-6 pr-5 py-3",
      both: "px-5 py-3",
    },
  };

  if (hasStartIcon && hasEndIcon) {
    return paddingMap[size].both;
  } else if (hasStartIcon) {
    return paddingMap[size].start;
  } else if (hasEndIcon) {
    return paddingMap[size].end;
  } else {
    return paddingMap[size].none;
  }
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
  startIcon,
  endIcon,
  disabled = false,
  loading = false,
  className,
  ...props
}) => {
  // Definir las clases base del botón, incluyendo box-border para el box-sizing
  const baseClasses =
    "inline-flex items-center justify-center font-medium focus:outline-none transition-all duration-300 ease-in-out box-border border-2";

  // Definir las clases según la variante utilizando variantes de Tailwind para el modo oscuro
  const variantClasses: Record<"primary" | "text" | "outline", string> = {
    primary:
      "bg-secondary text-secondary-950 hover:bg-primary-600 hover:text-white hover:scale-105 rounded-full border-transparent shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-secondary/20 inset-ring inset-ring-white/15 dark:bg-accent-300 dark:text-accent-950 dark:hover:bg-accent-200",
    text:
      "bg-transparent text-primary hover:bg-primary/20 hover:scale-105 rounded-full border-transparent dark:text-accent-400 dark:hover:text-accent-200 dark:hover:bg-accent-300/20 uppercase",
    outline:
      "bg-white/10 border-white hover:border-accent-600 text-white hover:text-accent-600 hover:bg-white/10 hover:scale-105 rounded-full dark:border-white dark:hover:border-accent-400 dark:text-white dark:hover:text-accent-400 dark:hover:bg-white/10",
  };

  // Definir las clases según el tamaño
  const sizeClasses: Record<"small" | "medium" | "large", string> = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  };

  // Definir las clases cuando está deshabilitado
  const disabledClasses =
    disabled || loading
      ? "opacity-50 cursor-not-allowed pointer-events-none"
      : "";

  // Obtener las clases de padding basadas en tamaño e íconos
  const paddingClasses = getPaddingClasses(size, !!startIcon, !!endIcon);

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant], // Aplicar clases según variante
        sizeClasses[size],
        paddingClasses,
        disabledClasses,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <FaSpinner className="animate-spin mr-2 transition-transform duration-200 ease-in-out" />
      ) : (
        startIcon && (
          <span className="mr-2 inline-flex transition-transform duration-200 ease-in-out">
            {startIcon}
          </span>
        )
      )}
      {children}
      {!loading && endIcon && (
        <span className="ml-2 inline-flex transition-transform duration-300 ease-in-out">
          {endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
