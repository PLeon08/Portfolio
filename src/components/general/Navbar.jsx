// src/components/Navbar.tsx
"use client"; // Asegúrate de que este componente se renderice en el cliente
import React, { useState, useEffect } from 'react'; // Importa useState y useEffect
import Link from 'next/link';
import Image from 'next/image'; // Para usar el componente Image de Next.js

export default function Navbar() {
  // 1. Estado para controlar si el modo oscuro está activo
  // Inicialmente, lo leemos de localStorage o detectamos la preferencia del sistema
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil

  // 2. useEffect para aplicar o quitar la clase 'dark' del elemento <html>
  // y guardar la preferencia en localStorage
  useEffect(() => {
    // Ejecutamos esta lógica solo en el cliente
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const currentMode = savedTheme ? savedTheme === 'dark' : prefersDark;
      setIsDarkMode(currentMode);

      // Aplica la clase 'dark' al <html> solo en el cliente
      if (currentMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []); // Se ejecuta solo una vez al montar el componente

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  // 3. Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
   
  const handleScrollLink = (e, targetId) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    // Cierra el menú móvil si está abierto
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gray-light font-bold text-blue-dark p-4 shadow-md z-50
                      dark:bg-gray-dark dark:text-gray-light transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center">
          {/* Sección Izquierda: Nombre y Título */}
          <div className="flex flex-col">
            <Link href="/" className="text-2xl hover:text-blue-light">
              Pablo León Rodríguez
            </Link>
            <span className="text-sm mt-0.5 transition-colors duration-300">Software Developer</span>
          </div>

          {/* Menú de Navegación para Escritorio (md y superior) */}
          <div className="hidden md:flex items-center space-x-6 text-blue-dark font-bold dark:text-gray-light">
            <a href="#aboutme-section" onClick={(e) => handleScrollLink(e, '#aboutme-section')} className="text-lg hover:text-blue-medium transition-colors">
              Sobre mí
            </a>
            <a href="#tech-section" onClick={(e) => handleScrollLink(e, '#tech-section')} className="text-lg hover:text-blue-medium transition-colors">
              Tecnologías
            </a>
            <a href="#services-section" onClick={(e) => handleScrollLink(e, '#services-section')} className="text-lg hover:text-blue-medium transition-colors">
              Servicios
            </a>
            <a href="#contact-section" onClick={(e) => handleScrollLink(e, '#contact-section')} className="text-lg hover:text-blue-medium transition-colors">
              Contacto
            </a>
            {/* Botón de Modo Oscuro para escritorio */}
            <div className="ml-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full focus:outline-none focus:ring-none bg-gray-light
                           dark:bg-gray-dark transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-6 h-6 text-yellow-300 hover:text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                ) : (
                  <svg className="w-6 h-6 text-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                )}
              </button>
            </div>
          </div>

          {/* Botón de Menú Hamburguesa para Móvil (visible en pantallas < md) */}
          <div className="md:hidden flex items-center">
             <button
                onClick={toggleDarkMode}
                className="p-2 mr-2 rounded-full focus:outline-none focus:ring-none bg-gray-light
                           dark:bg-gray-dark transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-6 h-6 text-yellow-300 hover:text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                ) : (
                  <svg className="w-6 h-6 text-blue-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                )}
              </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-blue-dark dark:text-gray-light focus:outline-none" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Overlay para Móvil */}
      <div className={`fixed inset-0 z-40 bg-gray-light dark:bg-gray-dark transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-blue-dark dark:text-gray-light" aria-label="Close menu">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16">
          <a href="#aboutme-section" onClick={(e) => handleScrollLink(e, '#aboutme-section')} className="text-4xl my-4 text-blue-dark dark:text-gray-light hover:text-blue-medium dark:hover:text-blue-light transition-colors">
              Sobre mí
          </a>
          <a href="#tech-section" onClick={(e) => handleScrollLink(e, '#tech-section')} className="text-4xl my-4 text-blue-dark dark:text-gray-light hover:text-blue-medium dark:hover:text-blue-light transition-colors">
              Tecnologías
          </a>
          <a href="#services-section" onClick={(e) => handleScrollLink(e, '#services-section')} className="text-4xl my-4 text-blue-dark dark:text-gray-light hover:text-blue-medium dark:hover:text-blue-light transition-colors">
              Servicios
          </a>
          <a href="#contact-section" onClick={(e) => handleScrollLink(e, '#contact-section')} className="text-4xl my-4 text-blue-dark dark:text-gray-light hover:text-blue-medium dark:hover:text-blue-light transition-colors">
              Contacto
          </a>
        </div>
      </div>
    </>
  );
}