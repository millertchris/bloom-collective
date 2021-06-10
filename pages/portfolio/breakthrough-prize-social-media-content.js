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
        title="Breakthrough Prize Social Media Content"
        image="https://source.unsplash.com/random"
        imageAlt="Background Image"
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            impedit provident consequatur, nobis nihil voluptatum porro eum
            officiis? Maxime, laboriosam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facilis architecto nemo laboriosam libero laudantium officiis ipsum
            doloribus, natus repudiandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facilis architecto nemo laboriosam libero laudantium officiis ipsum
            doloribus, natus repudiandae?
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
        </div>
      </BasicContent>
      <Gallery columns="two-column">
        <div className="col image">
          <img
            src="https://source.unsplash.com/random"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="https://source.unsplash.com/random"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="https://source.unsplash.com/random"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="https://source.unsplash.com/random"
            alt="Place holder image"
          />
        </div>
      </Gallery>
      <Footer />
    </>
  );
}
