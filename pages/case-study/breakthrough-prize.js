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
        title="Breakthrough Prize Social Content Case Study"
        image="/breakthrough-prize-hangar-one.jpg"
        imageAlt="Background Image"
        rellaxCentering="0.67"
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">Lorem, ipsum dolor.</h2>
          <p>
            Nanoscale particles and folding proteins. Creating detailed maps of
            the early universe. Taking a picture of a black hole. These are just
            a few of the hundreds of complex topics that Bloom Collective must
            grasp in order to create content for the Breakthrough Prize
            Foundation. And while we can't claim to be scientists just yet... we
            are certainly working on it!
          </p>
          <p>
            The Breakthrough Prizes are awarded at a red carpet gala in November
            each year. The Breakthrough Prize Ceremony is attended by a who's
            who of Hollywood, Silicon Valley and, of course – Science. While the
            ceremony is the obvious focal point for much of the year, The
            Breakthrough Prize Foundation needs to upkeep their social media
            year-round. That's where Bloom Collective comes in.
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
      <FeaturedImage image="/notes-grid.svg" />
      <BasicContent style="style-2">
        <div className="col headline">
          <h2 class="title">Lorem, ipsum dolor.</h2>
        </div>
        <div className="col content">
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
      </BasicContent>
      <BasicContent style="style-2">
        <div className="col headline">
          <h2 class="title">Lorem, ipsum dolor.</h2>
        </div>
        <div className="col content">
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
      </BasicContent>

      <Gallery>
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

      <BasicContent style="style-2">
        <div className="col headline">
          <h2 class="title">Lorem, ipsum dolor.</h2>
        </div>
        <div className="col content">
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
      </BasicContent>
      <Footer />
    </>
  );
}
