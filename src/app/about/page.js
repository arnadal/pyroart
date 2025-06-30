"use client"

import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import { useTheme } from '../contexts/Theme';

export default function About() {

  const { theme, toggleTheme } = useTheme();

  return (
    <main>
      <Navbar />
      <section className="titleSection">
        <h1 className="subtitle">ABOUT</h1>
      </section>
      <section>
        <div>
          <b>PyroArt</b> is a well-curated gallery of art and credits artificial intelligence (AI) image designers. It explores what AI image generation is and offers resources for the same. Machine-generated imagery is possible thanks to certain generative AI skilled enough to produce visual content. In simpler terms, AI image generators create images based on a set of examples. This has brought about a wave of artists who are creatively expressing themselves through the world of digital art. These artworks are spectacular and breathtaking!
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "5em" }}>
          <img src={theme == 'dark' ? '/logo-light.png' : '/logo-dark.png'} style={{ width: "80%" }}></img>
        </div>
      </section>
      <Footer />
    </main>
  );

}