import Hero from "../../components/Hero";
import ContentF from "../../components/ContentF";
import CardBox from "../../components/CardBox";
import ContentG from "../../components/ContentG";
import ImageGrid from "../../components/ImageGrid";
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

        <CardBox image="notes-grid.svg" />

        <BasicContent>
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

        <BasicContent>
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

        <ImageGrid
          imageOne="https://source.unsplash.com/random"
          imageTwo="https://source.unsplash.com/random"
          imageThree="https://source.unsplash.com/random"
          imageFour="https://source.unsplash.com/random"
        />

        <BasicContent>
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
