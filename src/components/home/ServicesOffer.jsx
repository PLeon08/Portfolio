export default function ServicesOffer() {
  return (
    <section id="services-section" className="light:text-blue-dark dark:text-blue-dark mt-10" style={{ width: '100%' }}>
      {/* Contenedor del Título y Botón */}
      <div className="flex flex-col items-center">
        {/* Aplica 'text-center' al h2 */}
        <h2 className="text-blue-dark dark:text-gray-light text-4xl font-bold mb-4 text-center" style={{ width: '100%' }}>Servicios que ofrezco</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-10 list-none">
          <li className="bg-white dark:bg-blue-dark rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Icono (opcional) */}
            <span className="text-white-dark dark:text-blue-dark text-4xl mb-4">💻</span>
            <h3 className="text-xl font-semibold text-blue-dark dark:text-gray-light mb-2">Desarrollo Web</h3>
            <p className="text-gray-dark dark:text-gray-light">
              (Frontend y Backend, Landing pages, aplicaciones web, etc)
            </p>
          </li>
          <li className="bg-white dark:bg-blue-dark rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Icono (opcional) */}
            <span className="text-purple-600 dark:text-purple-400 text-4xl mb-4">🖥️</span>
            <h3 className="text-xl font-semibold text-blue-dark dark:text-gray-light mb-2">Desarrollo de Software de Escritorio</h3>
            <p className="text-gray-dark dark:text-gray-light">
              (Aplicaciones de gestión, utilidades, etc)
            </p>
          </li>
          <li className="bg-white dark:bg-blue-dark rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Icono (opcional) */}
            <span className="text-green-600 dark:text-green-400 text-4xl mb-4">🗄️</span>
            <h3 className="text-xl font-semibold text-blue-dark dark:text-gray-light mb-2">Bases de Datos</h3>
            <p className="text-gray-700 dark:text-gray-300">
              (Firebase, Supabase, MongoDB, PostgreSQL, MySQL)
            </p>
          </li>
          <li className="bg-white dark:bg-blue-dark rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Icono (opcional) */}
            <span className="text-red-600 dark:text-red-400 text-4xl mb-4">🔗</span>
            <h3 className="text-xl font-semibold text-blue-dark dark:text-gray-light mb-2">Desarrollo de APIs RESTful</h3>
            <p className="text-gray-dark dark:text-gray-light">
              (Peticiones a base de datos, autenticación, etc)
            </p>
          </li>
          <li className="bg-white dark:bg-blue-dark rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Icono (opcional) */}
            <span className=" text-4xl mb-4">🛠️</span>
            <h3 className="text-xl font-semibold text-blue-dark dark:text-gray-light mb-2">Soporte Técnico</h3>
            <p className="text-gray-700 dark:text-gray-300">
              (Mantenimiento de hardware y software, en computadoras portátiles y de escritorio)
            </p>
          </li>
          <li className="bg-white dark:bg-blue-dark rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Icono (opcional) */}
            <span className=" text-4xl mb-4">🤖</span>
            <h3 className="text-xl font-semibold text-blue-dark dark:text-gray-light mb-2">Automatización de procesos</h3>
            <p className="text-gray-700 dark:text-gray-300">
              (Herramientas de AI, agentes, scripts, etc)
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}