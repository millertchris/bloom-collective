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
        style="style-2 logo-w-250"
        logo="/logo-ifes-white.svg"
        logoAlt="Logo"
        title="IFES Women Voters PSA"
        imageAlt="Background Image"
        randomizeImage={true}
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">Ecouraging women voters</h2>
          <p>
            When the International Foundation for Electoral Systems (IFES)
            needed to produce a PSA informing women about their voting rights in
            Indonesia, they came to Bloom Collective.
          </p>
          <p>
            Alongside IFES, we concepted, wrote, storyboarded, casted, shot and
            produced this spot.
          </p>
          <p>
            Bloom Collective supports IFES' vision of helping to develop and
            providing assistance and support for elections in new and emerging
            democracies.
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Creative concepting</li>
            <li>Writing</li>
            <li>Casting</li>
            <li>Storyboarding</li>
            <li>In-studio production</li>
            <li>Post-production</li>
          </ul>
        </div>
      </BasicContent>
      <BasicContent style="style-1">
        <div className="col content width-100">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/I3wHXQhMxlM?modestbranding=1&rel=0"
              title="IFES Women Voters PSA Video"
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
