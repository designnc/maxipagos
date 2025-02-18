"use client";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCopy } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import { HiOutlineQrCode } from "react-icons/hi2";

const PaymentLinkCard: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full p-3 lg:p6 max-w-3xl mx-auto">
      {/* Título */}
      <h2 className="text-lg text-gray-800 dark:text-white/70 mt-4">Link de pago</h2>
      
      {/* Contenedor principal */}
      <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
        {/* Sección QR */}
        <div className="flex flex-col items-center gap-4 mt-2">
          <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center rounded-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          >
            <HiOutlineQrCode size={80} className="text-gray-500 dark:text-gray-300" />
          </motion.div>
        </div>
        
        {/* Sección del Link de pago */}
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 p-2 rounded-xl">
          <div className="flex-1 w-full flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-md p-3 text-sm text-gray-700 dark:text-gray-300 truncate">
            <span className="text-gray-500">🔗</span>
            https://www.maxipagos.cl/venta/i2ks2445m12
          </div>
          <button className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 transition-colors text-white px-4 py-2 rounded-full">
            <AiOutlineCopy size={18} />
            Copiar Link de pago
          </button>
        </div>
      </div>

      {/* Tarjeta flotante (visible en pantallas md hacia arriba) */}
      <motion.div
        className="hidden md:block absolute bottom-24 right-16 w-40 h-56 bg-gray-900 dark:bg-zinc-800 rounded-xl text-white p-4 shadow-2xl transform overflow-hidden rotate-3"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
      >
        {/* Elementos decorativos */}
        <div className="absolute top-2 left-2 w-10 h-10 bg-gray-600 dark:bg-gray-700 rounded-full opacity-40" />
        <div className="absolute top-2 left-6 w-10 h-10 bg-gray-500 dark:bg-gray-600 rounded-full opacity-40" />
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-500 dark:bg-gray-600 rounded-full opacity-10" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gray-600 dark:bg-gray-700 rounded-full opacity-15" />

        {/* Número de tarjeta */}
        <div className="absolute top-1/2 left-6 flex items-center gap-1 -translate-y-1/2">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <span className="text-lg text-gray-400 ml-2">1234</span>
        </div>

        {/* Fecha */}
        <div className="absolute bottom-10 right-6 text-sm">09/25</div>
      </motion.div>

      {/* Etiqueta "Total Pagado" (visible en md hacia arriba) */}
      <motion.div
        className="hidden md:block absolute bottom-28 right-24 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 rounded-md px-3 py-2 text-sm shadow-2xl items-center gap-2"
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
      >
        <div>
          <div className="font-medium text-gray-500 dark:text-gray-400">Total Pagado</div>
          <div className="text-lg font-bold flex items-center">
            <span className="mr-2">$245.000</span>
            <FaChartBar className="text-green-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentLinkCard;
