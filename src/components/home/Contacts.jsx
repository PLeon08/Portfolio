"use client";

// --- Iconos SVG para mantener el componente autocontenido ---

const GitHubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" {...props}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const MailIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.107 10-8.107v11.817h-20z" />
  </svg>
);

const PhoneIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.028-3.493-6.817-2.105 1.039c-7.202 3.755 4.233 25.982 11.6 22.613l2.109-1.03z" />
  </svg>
);

export default function Contacts() {
  const contactItems = [
    {
      href: 'https://www.linkedin.com/in/pablo-león',
      icon: <LinkedInIcon className="w-12 h-12" />,
      text: 'LinkedIn',
    },
    {
      href: 'https://www.github.com/PLeon08',
      icon: <GitHubIcon className="w-12 h-12" />,
      text: 'GitHub',
    },
    {
      href: 'mailto:pjleon.tec@gmail.com',
      icon: <MailIcon className="w-12 h-12" />,
      text: 'Email',
    },
    {
      href: 'tel:+50684484019',
      icon: <PhoneIcon className="w-12 h-12" />,
      text: 'Teléfono',
    },
  ];

  return (
    <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-dark dark:text-gray-light mb-12">
          Contacto y Redes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-blue-dark rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="text-blue-dark dark:text-gray-light mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-dark dark:text-gray-light">
                {item.text}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}