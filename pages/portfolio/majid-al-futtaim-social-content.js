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
        title="Majid Al Futtaim Internal Comms Social Content"
        image="https://source.unsplash.com/random"
        imageAlt="Background Image"
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">24/7/365 Social Newsroom</h2>
          <p>
            With nearly 45,000 employees spread across 16 countries in the
            Middle East, Africa, and Asia – Majid Al Futtaim is an organization
            teeming with diversity. And it goes with out saying that they have a
            lot to talk about.
          </p>
          <p>
            As MAF's internal comms creative agency, Bloom Collective has had
            the honor of creating a lot of content on their behalf. Below is a
            sampling of some of the content we've created for MAF.
          </p>
          <p>
            For a deeper take, look at our client
            <a href="/case-study/majid-al-futtaim"> case study</a>, which
            details our crisis content strategy for MAF during Covid-19.
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Crisis content strategy</li>
            <li>Creative ideation</li>
            <li>Content design</li>
            <li>Content calendar management</li>
            <li>Channel management</li>
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
