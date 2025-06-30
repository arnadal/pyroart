import ImageCard from 'app/components/ImageCard';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

export default function Blog() {
  return (
    <main>
      <Navbar />
      <section className="titleSection">
        <h1 className="subtitle">GALLERY</h1>
      </section>
      <section>
        <div className="flex-4">
          <div><ImageCard props={{ title: "The Creation of Adam", illustrator: "Michael Angelo", slug: "the-creation-of-adam", ext: "png" }} /></div>
          <div><ImageCard props={{ title: "Shibako", illustrator: "Anonymous", slug: "shibako", ext: "avif" }} /></div>
          <div><ImageCard props={{ title: "Celestial Lake", illustrator: "Anonymous", slug: "celestial-lake", ext: "png" }} /></div>
          <div><ImageCard props={{ title: "Adjustment", illustrator: "Ioanna Voskou", slug: "adjustment", ext: "webp" }} /></div>
        </div>
        <div className="flex-4">
          <div><ImageCard props={{ title: "The Creep", illustrator: "Anonymous", slug: "the-creep", ext: "webp" }} /></div>
          <div><ImageCard props={{ title: "Grateful Dead Song", illustrator: "Anonymous", slug: "grateful-dead-song", ext: "webp" }} /></div>
          <div><ImageCard props={{ title: "Lady on Fire", illustrator: "Anonymous", slug: "lady-on-fire", ext: "jpg" }} /></div>
          <div><ImageCard props={{ title: "Ice Feels", illustrator: "Anonymous", slug: "ice-feels", ext: "webp" }} /></div>
        </div>
        <div className="flex-4">
          <div><ImageCard props={{ title: "God Krishna", illustrator: "Anonymous", slug: "god-krishna", ext: "jpg" }} /></div>
          <div><ImageCard props={{ title: "God Shiva", illustrator: "Anonymous", slug: "god-shiva", ext: "png" }} /></div>
          <div><ImageCard props={{ title: "Goddess Swaraswati", illustrator: "Anonymous", slug: "goddess-swaraswati", ext: "jpg" }} /></div>
          <div><ImageCard props={{ title: "Patroclus and Achilles", illustrator: "Anonymous", slug: "patroclus-and-achilles", ext: "jpg" }} /></div>
        </div>
        <div className="flex-4">
          <div><ImageCard props={{ title: "Sunrise", illustrator: "Artcafe", slug: "sunrise", ext: "webp" }} /></div>
          <div><ImageCard props={{ title: "Ocean Skies", illustrator: "Anonymous", slug: "ocean-skies", ext: "webp" }} /></div>
          <div><ImageCard props={{ title: "Maharani Yesubai", illustrator: "Anonymous", slug: "maharani-yesubai", ext: "jpg" }} /></div>
          <div><ImageCard props={{ title: "God Shiva", illustrator: "Anonymous", slug: "god-shiva", ext: "png" }} /></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
