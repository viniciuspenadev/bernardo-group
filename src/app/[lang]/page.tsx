import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import GlobalPresence from "@/components/GlobalPresence";
import Footer from "@/components/Footer";
import CompanyLogos from "@/components/CompanyLogos";
import Segments from "@/components/Segments";


import { getDictionary, Locale } from "@/dictionaries";

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang as Locale);

  return (
    <main className="main-content">
      <Navbar dict={dict.navbar} lang={params.lang} />
      <Hero dict={dict.hero} />
      <CompanyLogos />
      <Companies dict={dict.companies} />
      <Segments />
      <GlobalPresence dict={dict} />
      <Footer dict={dict.footer} />
    </main>
  );
}

