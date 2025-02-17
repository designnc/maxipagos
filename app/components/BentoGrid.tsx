/* BentoGrid.tsx */
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import { cn } from "../lib/utils";
import Button from "./Button";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className?: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href: string;
  cta?: string;
  imagePosition?: "left" | "right" | "top" | "bottom";
}

export const BentoGrid = ({
  children,
  className,
  ...props
}: BentoGridProps) => {
  return (
    <div className={cn("grid w-full grid-cols-12 gap-4", className)} {...props}>
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  imagePosition = "bottom",
  ...props
}: BentoCardProps) => {
  // Definimos las clases responsivas según la posición elegida
  let containerClasses = "";
  let imageClasses = "";
  let contentClasses = "";

  switch (imagePosition) {
    case "left":
      // Mobile: se apila (flex-col), Desktop: imagen izquierda (md:flex-row)
      containerClasses = "flex-col md:flex-row";
      // En desktop, la imagen y el contenido ocupan 50% cada uno
      imageClasses = "w-full md:w-1/2 h-full";
      contentClasses = "w-full md:w-1/2 h-full";
      break;

    case "right":
      // Mobile: se apila, Desktop: imagen derecha (md:flex-row-reverse)
      containerClasses = "flex-col md:flex-row-reverse";
      imageClasses = "w-full md:w-1/2 h-full";
      contentClasses = "w-full md:w-1/2 h-full";
      break;

    case "top":
      // Imagen arriba en todos los breakpoints
      containerClasses = "flex-col";
      imageClasses = "w-full h-7/12";
      contentClasses = "w-full h-5/12";
      break;

    case "bottom":
    default:
      // Imagen abajo en todos los breakpoints
      containerClasses = "flex-col-reverse";
      imageClasses = "w-full h-7/12";
      contentClasses = "w-full h-5/12";
      break;
  }

  return (
    <div
      className={cn(
        "relative flex min-h-[480px] rounded-2xl bg-background overflow-hidden",
        "dark:bg-zinc-900 border border-black/10 dark:border dark:border-white/10",
        containerClasses,
        className
      )}
      {...props}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0">
        <div className="absolutew-[200px] h-[80px] lg:w-[300px] lg:h-[100px] bg-primary rounded-full blur-[50px] lg:blur-[120px] opacity-40 top-4 right-4 lg:top-10 lg:right-10"></div>
        <div className="absolute w-[200px] h-[80px] lg:w-[300px] lg:h-[100px] bg-secondary rounded-full blur-[50px] lg:blur-[120px] opacity-40 bottom-4 left-4 lg:bottom-10 lg:left-10"></div>
      </div>
      {/* Resto del contenido */}
      {/* Lado de la imagen (50% en desktop, stack en mobile) */}
      <div
        className={cn(
          "flex items-center justify-center overflow-hidden bg-zinc-100 dark:bg-zinc-950 rounded-2xl outline outline-black/10 dark:outline dark:outline-white/10 relative",
          imageClasses
        )}
      >
        {/* Contenedor interno para la imagen */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {background}
        </div>
      </div>
      {/* Lado del contenido (50% en desktop) */}
      <div
        className={cn(
          "flex flex-col p-4 lg:p-8 justify-center overflow-auto z-10 relative",
          contentClasses
        )}
      >
        {Icon && <Icon className="h-12 w-12 text-neutral-700 mb-4" />}
        <h3 className="text-lg lg:text-2xl font-semibold text-primary dark:text-primary-400 mb-0 lg:mb-2">
          {name}
        </h3>
        <p className="text-neutral-400 mb-4 text-sm lg:text-base">
          {description}
        </p>

        {/* Botón CTA opcional con ancho según su contenido */}
        {cta && (
          <Button
            variant="primary"
            size="medium"
            endIcon={<FaArrowRight />}
            className="block w-fit"
          >
            <a href={href}>{cta}</a>
          </Button>
        )}
      </div>
    </div>
  );
};
