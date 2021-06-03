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
                image="placeholder-image-16-9.jpg"
                imageAlt="SAS Partnership Origami 3D Animations"
                title="SAS Partnership Origami 3D Animations"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/sas-partner-3d-animations"
              />
              <PortfolioItem
                image="thumbnail-breakthrough-prize.jpg"
                imageAlt="Breakthrough Prize Laureate Announcer Videos"
                title="2021 Breakthrough Prize Laureate Announcer Videos"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/2021-breakthrough-prize-laureate-announcer-videos"
              />
              <PortfolioItem
                image="thumbnail-breakthrough-prize-social-content.jpg"
                imageAlt="Breakthrough Prize Social Media Content"
                title="Breakthrough Prize Social Media Content"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="placeholder-image-16-9.jpg"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="placeholder-image-16-9.jpg"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="placeholder-image-16-9.jpg"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="placeholder-image-16-9.jpg"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="placeholder-image-16-9.jpg"
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
