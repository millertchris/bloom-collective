import Hero from "../../components/Hero";
import Gallery from "../../components/Gallery";
import FeaturedImage from "../../components/FeaturedImage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BasicContent from "../../components/BasicContent";

export default function caseStudy() {
  return (
    <>
      <Header theme="white" logo="/bloom_logo_white.svg" />

      <Hero
        style="style-2"
        logo="/logo-majid-white.svg"
        logoAlt="Logo"
        title="Breakthrough Initiatives Venus Animation"
        image="https://source.unsplash.com/random"
        imageAlt="Background Image"
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">Animating the big questions</h2>
          <p>
            Are we alone in this universe? Is there life on Mars? What about on
            Venus? It's big questions like these that Breakthrough Initiatives
            aims to answer through their research. And it's Bloom Collective's
            job to put these ideas in motion.
          </p>
          <p>
            For this video, we helped put together an explainer video, alongside
            Breakthrough Parnters. The video was used as part of Breakthrough's
            launch of their research study to investigate the possibility of
            primitive life in Venus. Pretty epic stuff.
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Creative direction</li>
            <li>Project facilitation</li>
            <li>2D animation sourcing</li>
          </ul>
        </div>
      </BasicContent>
      <BasicContent style="style-1">
        <div className="col content">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/P1Qhedlm380"
              title="Breakthrough Initiatives Venus Animation"
              frameBorder="0"
              allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </BasicContent>
      <Footer />
    </>
  );
}
