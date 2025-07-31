// src/components/TechCarousel.tsx

"use client"; // Es un componente de cliente si usas useState o animaciones interactivas

import Image from 'next/image';
import { useState, useEffect } from 'react';

// Define tus iconos y sus rutas. Puedes añadir más aquí.
const techIcons = [
  { name: 'Java', src: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  // ... añade más iconos aquí
];

const dataAnalysisIcons = [
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
  { name: 'Matplotlib', src: 'https://img.icons8.com/?size=100&id=TkX1totjFmAD&format=png&color=000000' },
  { name: 'TensorFlow', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Keras', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg' },
  { name: 'Jupyter', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg' },
  { name: 'SQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'BigQuery', src: 'https://img.icons8.com/?size=100&id=WHRLQdbEXQ16&format=png&color=000000' },
  { name: 'Tableau', src: 'https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000' },
  { name: 'Power BI', src: 'https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000'},
];

const otherIcons = [
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Canva', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
  { name: 'Trello', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg' },
  { name: 'Jira', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg' },
  {name:'Office', src:'https://img.icons8.com/?size=100&id=6kZdxe7t8OL1&format=png&color=000000'}
]

// Para que el carrusel sea "infinito", duplicamos los iconos
const duplicatedIcons = [...techIcons, ...techIcons];
const duplicatedDataAnalysisIcons = [...dataAnalysisIcons, ...dataAnalysisIcons];
const duplicatedOtherIcons = [...otherIcons, ...otherIcons];

export default function TechCarousel() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Necesitamos el estado de modo oscuro aquí también

  useEffect(() => {
    // Sincronizar el estado del modo oscuro con localStorage o la preferencia del sistema
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      setIsDarkMode(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []); // Solo al montar

  return (
    <section 
    id='tech-section'
    className="py-12 overflow-hidden relative lg:pt-2 md:pt-28"> {/* `overflow-hidden` es crucial para ocultar el contenido fuera de vista */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10 pb-12 text-blue-dark leading-tight mb-4 
                      dark:text-gray-light md:mt-28">
        Algunas tecnologías que utilizo
      </h2>

      {/* Fila 1: Moviéndose a la izquierda */}
      <div className="scroll-container flex space-x-10 mb-8" style={{ '--scroll-speed': '60s' } as React.CSSProperties}>
        {/* Usamos el truco de duplicar el contenido dentro de un div con la animación */}
        <div className="animate-scroll-left flex-shrink-0" style={{ width: 'max-content' }}>
          {duplicatedIcons.map((icon, index) => (
            <div
              key={`row1-${icon.name}-${index}`}
              className={`inline-block mx-5 p-4 rounded-lg shadow-md
                          ${isDarkMode ? 'border border-gray-light' : 'border border-blue-dark'}`}
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={64} // Ajusta el tamaño de los iconos
                height={64}
                className="transition-all duration-200 hover:filter-none mx-auto" // Opcional: escala de grises y color al hover
              />
              <p className="text-center text-sm font-semibold mt-2 text-gray-dark dark:text-gray-light">{icon.name}</p>
            </div>
          ))}
          {/* Duplica los iconos una vez más para asegurar la continuidad perfecta */}
          {duplicatedIcons.map((icon, index) => (
            <div
              key={`row1-dup-${icon.name}-${index}`}
              className={`inline-block mx-5 p-4 rounded-lg shadow-md
                          ${isDarkMode ? 'border border-gray-light' : 'border border-blue-dark'}`}
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={64}
                height={64}
                className="transition-all duration-200 hover:filter-none"
              />
              <p className="text-center text-sm font-semibold mt-2 text-blue-dark dark:text-gray-light">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fila 2: Moviéndose a la derecha */}
      <div className="scroll-container flex space-x-10 mb-8" style={{ '--scroll-speed': '60s' } as React.CSSProperties}>
        <div className="animate-scroll-right flex-shrink-0" style={{ width: 'max-content' }}>
          {duplicatedDataAnalysisIcons.map((icon, index) => (
            <div
              key={`row2-${icon.name}-${index}`}
              className={`inline-block mx-5 p-4 rounded-lg shadow-md
                          ${isDarkMode ? 'border border-gray-light' : 'border border-blue-dark'}`}
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={64}
                height={64}
                className="transition-all duration-200 hover:filter-none"
              />
              <p className="text-center text-sm font-semibold mt-2 text-blue-dark dark:text-gray-light">{icon.name}</p>
            </div>
          ))}
          {duplicatedDataAnalysisIcons.map((icon, index) => (
            <div
              key={`row2-dup-${icon.name}-${index}`}
              className={`inline-block mx-5 p-4 rounded-lg shadow-md
                          ${isDarkMode ? 'border border-gray-light' : 'border border-blue-dark'}`}
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={64}
                height={64}
                className="transition-all duration-200 hover:filter-none"
              />
              <p className="text-center text-sm font-semibold mt-2 text-blue-dark dark:text-gray-light">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fila 3: Moviéndose a la izquierda */}
      <div className="scroll-container flex space-x-10" style={{ '--scroll-speed': '60s' } as React.CSSProperties}>
        <div className="animate-scroll-left flex-shrink-0" style={{ width: 'max-content' }}>
          {duplicatedOtherIcons.map((icon, index) => (
            <div
              key={`row3-${icon.name}-${index}`}
              className={`inline-block mx-5 p-4 rounded-lg shadow-md
                          ${isDarkMode ? 'border border-gray-light' : 'border border-blue-dark'}`}
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={64}
                height={64}
                className="transition-all duration-200 hover:filter-none"
              />
              <p className="text-center text-sm font-semibold mt-2 text-blue-dark dark:text-gray-light">{icon.name}</p>
            </div>
          ))}
          {duplicatedOtherIcons.map((icon, index) => (
            <div
              key={`row3-dup-${icon.name}-${index}`}
              className={`inline-block mx-5 p-4 rounded-lg shadow-md
                          ${isDarkMode ? 'border border-gray-light' : 'border border-blue-dark'}`}
            >
              <Image
                src={icon.src}
                alt={icon.name}
                width={64}
                height={64}
                className="transition-all duration-200 hover:filter-none"
              />
              <p className="text-center text-sm font-semibold mt-2 text-blue-dark dark:text-gray-light">{icon.name}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}