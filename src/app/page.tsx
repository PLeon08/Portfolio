// Este es ahora un Server Component por defecto. No necesita "use client".
import Greeting from '../components/home/Greeting';
import AboutmeResume from '../components/home/AboutmeResume';
import TechCarousel from '../components/general/TechCarousel';
import ServicesOffer from '../components/home/ServicesOffer';
import Contacts from '../components/home/Contacts';

export default function Home() {
  return (
    <>
      <Greeting />
      <AboutmeResume />
      <TechCarousel />
      <ServicesOffer />
      <Contacts />
    </>
  );
}
