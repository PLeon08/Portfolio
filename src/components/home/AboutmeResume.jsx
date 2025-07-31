"use client"; // 1. Convertimos a un Componente de Cliente para poder usar hooks.

import { useState, useEffect, useRef } from 'react'; // 2. Importamos los hooks necesarios.

export default function AboutmeResume() {
  // 3. Estado para controlar la visibilidad y un ref para el elemento a observar.
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // 4. useEffect para configurar el Intersection Observer.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Cuando el elemento entra en la pantalla (isIntersecting es true)
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); // Dejamos de observar una vez que es visible.
        }
      },
      { threshold: 0.1 } // El callback se dispara cuando el 10% del elemento es visible.
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Limpieza al desmontar el componente.
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez.

  return (
    // 5. Aplicamos el ref y las clases condicionales para la animación.
    <section
      id="aboutme-section"
      ref={sectionRef}
      className={`text-blue-dark rounded-lg flex flex-col items-center px-6
                  sm:my-16
                  md:flex-row md:justify-between md:px-12 md:py-12
                  lg:mt-4 lg:pt-20 lg:mt-28 lg:mb-2
                  transition-all duration-1000 ease-out transform
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ width: '100%' }}
    >
      {/* Contenedor del Título y Botón */}
      <div className="flex flex-col items-center items-start lg:width-1 lg:items-start">
        {/* Aplica 'text-center' al h2 */}
        <h2 className=" text-4xl font-bold mb-4 text-center 
        light:text-blue-dark dark:text-gray-light" style={{ width: '100%' }}>Sobre mí</h2>
        <p className="text-left text-lg 
        light:text-blue-dark dark:text-gray-light mb-6">
          Me llamo Pablo León nací y crecí en Guápiles, Costa Rica. Desde pequeño he tenido una gran pasión
          por la tecnología ya que disfrutaba mucho de los videojuegos y aplicaciones y su funcionamiento me intrigaba.
          Cuando entre a la especialidad de Técnico en Soporte en 2016, descubrí mi interés
          por la programación, idear soluciones innovadoras a los problemas técnicos de las personas.
          Fue una época académica valiosa ya que aprendí mucho sobre mantenimiento preventivo y activo de software y hardware de computadores,
          configuración de redes y su seguridad, programación de robots y aplicaciones de escritorio y web, sistemas operativas y máquinas virtuales.
          Gracias a esto durante el tiempo entre 2016 y 2018 tuve la oportunidad de trabajar con diferentes clientes desempeñando labores
          de soporte de TI, desde mantenimiento de PC, instalación de redes, firewalls, servidores, hasta seguridad relacionada por meido de cámaras inteligentes.<br /><br />
          A finales de 2018 tomé la decisión de continuar con mis estudios a un nivel universitario,
          por lo que empecé a estudiar Ingeniería en Sistemas en la Universidad Latina de Costa Rica,
          estudiando 3 cuatrimestres en el 2019 en la sede de Guápiles. No conforme con el nivel de presión, exigencia y aprendizaje
          que consideraba necesario para mi crecimiento académico, en el 2020 decidí trasladarme al Instituto Tecnológico
          de Costa Rica, donde concluí mis estudios en Ingeniería en Computación en el 2024. Durante mi tiempo en la
          universidad, logré adquirir una sólida base en programación, bases de datos, redes y telecomunicaciones, desarrollo de software y
          uso de datos para la toma de decisiones informada. Tuve la oportunidad de participar en proyectos
          académicos y extracurriculares que me permitieron aplicar mis conocimientos en situaciones reales, trabajando
          en equipo para clientes reales. Participé en proyectos como Desarrollador de sistemas con Java y Python, 
          Desarrollador de videojuegos con Unity C#, Project Manager, Desarrollador de aplicaciones web, Tutor de programación y 
          matemática discreta, Líder de comunidad de videojuegos, Analista e ingeniero de datos, entre otros roles.<br /><br />
          Poco tiempo después de graduarme en Junio de 2024, tuve la oportunidad de trabajar en una empresa de prestigio
          de la cual me enorgullezco de haber formado parte, debido a que contaban con un equipo de trabajo excepcional,
          valores profesionales y un ambiente de trabajo colaborativo que impactó fuertemente en mi vida profesional. 
          Entre a Huawei como Wireless Product Manager Intern el 24 de setiembre de 2024, donde pude aplicar mis habilidades blandas en práctica,
          ya que entre las principales responsabilidades del puesto se encuentran la gestión de proyectos,
          la comunicación efectiva con clientes y equipos de trabajo, y la resolución de problemas técnicos complejos. 
          Por otro lado, también pude robustecer mis habilidades técnicas en el campo de las telecomunicaciones,
          debido al enfoque del puesto en la administración, venta y análisis de productos como Radios, Antenas, módulos de red, entre otros.
          <br /><br />
          Actualmente, estoy buscando nuevas oportunidades para aplicar mis habilidades y conocimientos en un entorno desafiante y dinámico.
          Estoy emocionado por la posibilidad de contribuir a proyectos innovadores y seguir creciendo profesionalmente. 
          Por lo que constantemente me encuentro realizando proyectos en mis áreas de conocimiento y explorando nuevas tecnologías para mantenerme informado y actualizado.
        </p>
      </div>
    </section>
  );
}