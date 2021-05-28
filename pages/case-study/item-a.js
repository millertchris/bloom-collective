import Hero from "../../components/Hero";
import ContentG from "../../components/ContentG";
import Gallery from "../../components/Gallery";
import FeaturedImage from "../../components/FeaturedImage";
import Layout from "../../components/layout/Layout";
import Header from "../../components/Header";
import BasicContent from "../../components/BasicContent";

export default function caseStudy() {
  return (
    <>
      <Header theme="white" logo="/bloom_logo_white.svg" />

      <Layout>
        <Hero
          logo="/logo-majid-white.svg"
          logoAltText="Logo"
          title="Majid Al Futtaim Advanced Analytics"
          background="https://source.unsplash.com/random"
          backgroundAltText="Background Image"
        />
        <BasicContent style="style-1">
          <div className="col content">
            <h2 class="title">Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae impedit provident consequatur, nobis nihil voluptatum
              porro eum officiis? Maxime, laboriosam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae impedit provident consequatur, nobis nihil voluptatum
              porro eum officiis? Maxime, laboriosam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
          </div>
        </BasicContent>
        <BasicContent style="style-2">
          <div className="col headline">
            <h2 class="title">Lorem, ipsum dolor.</h2>
          </div>
          <div className="col content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae impedit provident consequatur, nobis nihil voluptatum
              porro eum officiis? Maxime, laboriosam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae impedit provident consequatur, nobis nihil voluptatum
              porro eum officiis? Maxime, laboriosam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              facilis architecto nemo laboriosam libero laudantium officiis
              ipsum doloribus, natus repudiandae?
            </p>
          </div>
        </BasicContent>
      </Layout>
    </>
  );
}
