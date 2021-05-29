import FeaturedImage from "../components/FeaturedImage";
import ContentD from "../components/ContentD";
import BasicContent from "../components/BasicContent";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

export default function services() {
  return (
    <>
      <Header theme="black" logo="/bloom_logo_black.svg" />

      <Hero
        style="style-3"
        title="Our Services"
        image="https://source.unsplash.com/random"
        imageAlt="Background Image"
      />

      <Intro title="What we do" />

      <BasicContent style="style-3" positionContent="right">
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
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="col image">
          <img
            src="https://source.unsplash.com/random"
            alt="Placeholder text"
          />
        </div>
      </BasicContent>

      <BasicContent style="style-3" positionContent="left">
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
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="col image">
          <img
            src="https://source.unsplash.com/random"
            alt="Placeholder text"
          />
        </div>
      </BasicContent>

      <BasicContent style="style-3" positionContent="right">
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
          <ul>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="col image">
          <img
            src="https://source.unsplash.com/random"
            alt="Placeholder text"
          />
        </div>
      </BasicContent>
      <Footer />
    </>
  );
}
