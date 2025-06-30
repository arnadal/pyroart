import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import NotFound from './not-found';
import images from '../images.json';

export function generateStaticParams() {
  return images.map(img => ({ slug: img.slug }));
}

export default function ImagePage({ params }) {
  const image = images.find(img => img.slug == params.slug);
  if (!image) return NotFound();

  return (
    <main>
      <Navbar />
      <section className="titleSection deepPadding">
        <h1 className="subtitle">GALLERY</h1>
      </section>
      <section>
        <h2 className="subtitle">{image.title}</h2>
        <p style={{ textAlign: "center" }}>by <b>{image.illustrator}</b></p>
        <br />
        <div style={{ width: "calc(100% - 50px)", backgroundColor: "#80808080", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", padding: "25px" }}>
          <img
            src={`/gallery_images/${image.slug}.${image.ext}`}
            alt={image.title}
            style={{
              maxHeight: "480px",
              borderRadius: "10px"
            }}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
