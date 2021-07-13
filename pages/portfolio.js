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
              <h1 class="title">The work we do</h1>
            </div>
            <div className="row items">
              <PortfolioItem
                image="portfolio-thumbnails-laureate-announcer-videos.jpg"
                imageAlt="Breakthrough Prize Laureate Announcer Videos"
                title="2021 Breakthrough Prize Laureate Announcer Videos"
                description="Video content announcing the winners of the 2021 Breakthrough Prizes."
                link="/portfolio/2021-breakthrough-prize-laureate-announcer-videos"
              />
              <PortfolioItem
                image="portfolio-thumbnails-sas-partnership-videos.jpg"
                imageAlt="SAS Partnership Origami 3D Animations"
                title="SAS Partnership Origami 3D Animations"
                description="3D animated video content."
                link="/portfolio/sas-partner-3d-animations"
              />
              <PortfolioItem
                image="portfolio-thumbnails-breakthrough-prize-social-media-content.jpg"
                imageAlt="Breakthrough Prize Social Media Content"
                title="Breakthrough Prize Social Media Content"
                description="Social media video, poster and motion graphics animation content."
                link="/portfolio/breakthrough-prize-social-media-content"
              />
              <PortfolioItem
                image="portfolio-thumbnails-asean.jpg"
                imageAlt="Place holder image"
                title="ASEAN Development Goals Explainer Videos"
                description="Eleven part animated video series content."
                link="/portfolio/asean-development-goals-explainer-videos"
              />
              <PortfolioItem
                image="portfolio-thumbnails-lenovo.jpg"
                imageAlt="Place holder image"
                title="Lenovo Product Launch Animation"
                description="Motion grahpics animated video content."
                link="/portfolio/lenovo-product-launch-animation"
              />
              <PortfolioItem
                image="portfolio-thumbnails-maf-social-content.jpg"
                imageAlt="Place holder image"
                title="Majid Al Futtaim Social Content"
                description="Social media video, poster and motion graphics animation content."
                link="/portfolio/majid-al-futtaim-social-content"
              />
              <PortfolioItem
                image="portfolio-thumbnails-ifes.jpg"
                imageAlt="Place holder image"
                title="IFES Women Voters PSA"
                description="Studio-produced public service announcement content."
                link="/portfolio/ifes-women-voters-psa"
              />
              <PortfolioItem
                image="portfolio-thumbnails-dbs-digibank.jpg"
                imageAlt="Place holder image"
                title="DBS Digibank Website Design"
                description="UX/UI web layouts and animated social content."
                link="/portfolio/dbs-digibank-website-design"
              />
              <PortfolioItem
                image="portfolio-thumbnails-breakthrough-venus.jpg"
                imageAlt="Place holder image"
                title="Breakthrough Initiatives Venus Animation"
                description="Motion graphics animated video content."
                link="/portfolio/breakthrough-venus-animation"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
