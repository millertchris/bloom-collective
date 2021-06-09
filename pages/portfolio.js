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
                image="portfolio-thumbnails-laureate-announcer-videos.jpg"
                imageAlt="Breakthrough Prize Laureate Announcer Videos"
                title="2021 Breakthrough Prize Laureate Announcer Videos"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/2021-breakthrough-prize-laureate-announcer-videos"
              />
              <PortfolioItem
                image="portfolio-thumbnails-sas-partnership-videos.jpg"
                imageAlt="SAS Partnership Origami 3D Animations"
                title="SAS Partnership Origami 3D Animations"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/sas-partner-3d-animations"
              />
              <PortfolioItem
                image="portfolio-thumbnails-breakthrough-prize-social-media-content.jpg"
                imageAlt="Breakthrough Prize Social Media Content"
                title="Breakthrough Prize Social Media Content"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="portfolio-thumbnails-asean.jpg"
                imageAlt="Place holder image"
                title="ASEAN Development Goals Explainer Videos"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="portfolio-thumbnails-lenovo.jpg"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="portfolio-thumbnails-maf-social-content.jpg"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="portfolio-thumbnails-ifes.jpg"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="portfolio-thumbnails-dbs-digibank.jpg"
                imageAlt="Place holder image"
                title="Lorem ipsum dolor"
                description="This is a description of the post that is featured in this post item here."
                link="/portfolio/item-a"
              />
              <PortfolioItem
                image="portfolio-thumbnails-breakthrough-venus.jpg"
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
