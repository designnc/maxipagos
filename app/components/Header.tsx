"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { FaHandshakeSimple } from "react-icons/fa6";
import Button from "./Button";
import { useActiveSection } from "@/app/utils/useActiveSection";
import { motion } from "motion/react"
import { RiLoginBoxFill } from "react-icons/ri";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#pos", label: "POS" },
  { href: "#beneficios", label: "Beneficios" },
];

const Header: React.FC = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  // Obtenemos los IDs a partir de navLinks
  const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
  // useActiveSection recibe el array de IDs
  const activeSectionId = useActiveSection({
    sectionIds,
    rootMargin: "0px 0px -50% 0px",
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 w-full z-50 bg-transparent backdrop-blur-sm flex items-center"
    >
      <div className="conatiner max-w-7xl mx-auto py-3 px-8 md:px-8 flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <Image
              src="maxipagos-logo.svg"
              width={48}
              height={48}
              alt="Isotype Logo"
              className="w-48"
            />
          </Link>
        </div>

        {/* Grupo de enlaces (desktop) */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="bg-primary rounded-full px-2.5 py-3 flex gap-2 xl:gap-4 items-center justify-center shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-primary/20 inset-ring inset-ring-white/15">
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, staggerChildren: 0.1 }}
              className="flex flex-col lg:flex-row gap-2 items-center"
            >
              {navLinks.map((link, index) => {
                const linkSection = link.href.replace("#", "");
                const isActive = activeSectionId === linkSection;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`rounded-full px-3 lg:px-4 py-2 text-[12px] xl:text-sm uppercase font-medium transition-all ${
                        isActive
                          ? "bg-foreground/30 text-primary-300"
                          : "text-background hover:text-secondary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>

        {/* Botón de Contacto (desktop) */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="hidden lg:flex items-center"
        >
          <Link href="#contacto">
            <Button
              variant="primary"
              startIcon={<RiLoginBoxFill />}
              size="medium"
            
            >
              Iniciar Sesión
            </Button>
          </Link>
        </motion.div>

        {/* Botón menú móvil */}
        <button
          title="menu"
          type="button"
          className="lg:hidden focus:outline-none"
          onClick={() => setNavigationOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={navigationOpen}
        >
          {navigationOpen ? (
            <FiX className="w-6 h-6 text-primary" />
          ) : (
            <FiMenu className="w-6 h-6 text-primary-700" />
          )}
        </button>
      </div>

      {/* Menú móvil en pantalla completa */}
      {navigationOpen && (
        <div className="fixed top-0 w-full h-screen z-40 flex flex-col items-center justify-center gap-6 bg-zinc-900">
          {/* Botón cerrar */}
          <button
            title="cerrar menú"
            type="button"
            className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
            onClick={() => setNavigationOpen(false)}
            aria-label="Cerrar menú"
          >
            <FiX />
          </button>

          {/* Enlaces de navegación */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, staggerChildren: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            {navLinks.map((link, index) => {
              const linkSection = link.href.replace("#", "");
              const isActive = activeSectionId === linkSection;
              return (
                <motion.li
                  key={link.href}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-lg font-medium transition-all ${
                      isActive
                        ? "bg-zinc-700 text-accent px-4 py-2 rounded-full"
                        : "text-white hover:text-secondary"
                    }`}
                    onClick={() => setNavigationOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* Botón de Contacto */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <Link href="#contacto">
              <Button
                variant="primary"
                startIcon={<FaHandshakeSimple />}
                size="large"
              >
                Iniciar Sesión
              </Button>
            </Link>
          </motion.div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
