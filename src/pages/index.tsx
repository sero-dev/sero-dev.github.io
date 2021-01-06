import * as React from 'react'
import Layout from '../components/shared/Layout';
import Navigation from '../components/shared/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/shared/Footer';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <About />
      <Experiences />
      {/*<Projects />*/}
      {/*<Contact />*/}
      <Footer />
    </Layout>
  )
}

export default IndexPage
