import Image from "next/image";
import ScrollToButton from "../general/ScrollToButton";
export default function Greeting() {
    return (
        <section className="text-blue-dark rounded-lg flex flex-col items-center
                        py-10 px-2
                        sm:mt-28  
                        md:flex-row md:justify-between md:px-12 md:py-12
                        lg:mt-4 lg:pt-10 lg:mt-2 lg:mb-20 lg:px-28">

      {/* Contenedor del Título y Botón */}
      {/* En mobile: Texto centrado, ancho completo, margen inferior */}
      {/* En PC: No toma todo el ancho, sin margen inferior, se mantiene a la izquierda (orden por defecto) */}
      <div className="text-center md:text-left w-full lg:ml-16 md:w-1/2 mb-8 md:mb-0 md:order-1 "> {/* md:order-1 para que se mantenga a la izquierda en PC */}
        <h1 className="text-4xl sm:my-18 sm:text-5xl lg:text-6xl font-extrabold text-blue-dark leading-tight mb-4 
                      dark:text-gray-light">
          ¿Buscas soluciones innovadoras? <br />
        </h1>
        <ScrollToButton
          targetId="#services-section"
          className="px-8 py-3 bg-blue-dark text-gray-light rounded-full text-lg font-semibold
                     dark:hover:bg-blue-medium transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-blue-light focus:ring-opacity-75
                     dark:bg-blue-medium transition-colors duration-300"
        >
          Ver servicios
        </ScrollToButton>
      </div>

      {/* Contenedor de la Imagen */}
      {/* En mobile: ancho completo, margen superior (si no se pone order) */}
      {/* En PC: No toma todo el ancho, margen derecho, se pone a la derecha */}
      <div className="w-full md:w-1/2 lg:pr-20 flex justify-center md:justify-end md:order-2"> {/* md:order-2 para moverlo a la derecha en PC */}
        <Image
          src="/imgs/perfil.png" // Foto de perfil
          alt="Photo" // Texto alternativo para la imagen
          width={400} // Ajusta el tamaño según tu imagen
          height={400} // Ajusta el tamaño según tu imagen
          className="rounded-2xl drop-shadow-[0_20px_15px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_20px_15px_rgba(0,0,0,0.5)]" // Sombra más pronunciada en la parte inferior
          priority
        />
      </div>
    </section>
    )
}