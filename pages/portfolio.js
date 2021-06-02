import PortfolioItem from "../components/PortfolioItem";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function portfolio() {
  return (
    <>
      <Header theme="black" logo="/bloom_logo_black.svg" />

      <main className="main-wrapper">
        <section className="block portfolio">
          <div className="component-wrapper">
            <div className="row intro">
              <h1 class="title">The work we do.</h1>
            </div>
            <div className="row items">
              <PortfolioItem
                image="https://source.unsplash.com/random"
                imageAlt="Place holder image"
                title="SAS Partner 3D Animations"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/sas-partner-3d-animations"
              />
              <PortfolioItem
                image="https://source.unsplash.com/random"
                imageAlt="Place holder image"
                title="2021 Breakthrough Prize Laureate Announcer Videos"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/2021-breakthrough-prize-laureate-announcer-videos"
              />
              <PortfolioItem
                image="https://source.unsplash.com/random"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="https://source.unsplash.com/random"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="https://source.unsplash.com/random"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="https://source.unsplash.com/random"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="https://source.unsplash.com/random"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="https://source.unsplash.com/random"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
