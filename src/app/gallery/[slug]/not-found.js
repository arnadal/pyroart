import Link from 'next/link';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="titleSection flex-2">
        <div>
          <h1 className='title'>404</h1>
        </div>
      </section>
      <section>
        <p className="large center">The image you are searching for wasn't found in the gallery! <Link href="/gallery">Go to the gallery page.</Link></p>
      </section>
      <Footer />
    </main>
  );
}
