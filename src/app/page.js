import Footer from './components/Footer';
import Navbar from './components/Navbar';
import 'animate.css/animate.min.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="titleSection deepPadding flex-2">
        <div>
          <h1 className="title animate__animated animate__pulse animate__slower animate__delay-2s">EMPOWER DESIGNERS, NOT REPLACE THEM</h1>
        </div>
        <div style={{ width: "100%" }}>
          <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"></script>
          <model-viewer
            src="/front-model-3.glb"
            camera-controls
            camera-orbit="0deg 75deg 10m"
            tone-mapping="neutral"
            poster="/front-model-poster.png"
            shadow-intensity="1"
            autoplay
            ar
            interaction-prompt="none"
            reveal="auto"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
        </div>
      </section>
      <section className="deepPadding dark" style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <p className="large center">In a rapidly-changing world, AI is finding purpose. From writing prompts to making artificial imagery, designers are valued in all aspects. PyroArt looks forward to just that.</p>
      </section>
      <section className="flex-2">
        <div className="larger">
          <h2>WHAT IS IN IT FOR YOU?</h2>
          <p>Machine-generated art is well utilised when wanting a professional approach. While it makes work really fast, it also emphasises detail and brings a good look to a project. The better the prompt, the grander the results.</p>
        </div>
        <div className="smaller">
          <img src="./overview/artificial_horror.png" style={{ width: "100%", height: "auto" }} />
        </div>
      </section>
      <section>
        <h2>HAVE A QUICK GLANCE</h2>
        <div className="flex-3">
          <div style={{
            backgroundImage: `url(/overview/kintsugi.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#808080",
            height: "400px"
          }}>
          </div>
          <div style={{
            backgroundImage: `url(/overview/eros_and_pysche.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#808080",
            height: "400px"
          }}>
          </div>
          <div style={{
            backgroundImage: `url(/overview/the_moon_goddess_and_the_fire_god.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#808080",
            height: "400px"
          }}>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
