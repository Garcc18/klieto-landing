import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Logos from '@/components/Logos'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import HowWeWork from '@/components/HowWeWork'
import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Logos />
      <Problem />
      <Services />
      <HowWeWork />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  )
}
