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
        title="Lenovo Product Launch Animation"
        image="https://source.unsplash.com/random"
        imageAlt="Background Image"
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">Tiny, but powerful</h2>
          <p>
            If you build something that's sleek and tiny, yet powerful – you
            should also have an über slick launch video that showcases the
            product and its features, shouldn't you? Of course you should.
          </p>
          <p>
            That's why we worked with Lenovo's agency in the US on this job to
            help create this (über slick) video for their product launch in
            North America. We think it turned out looking great!
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Project facilitaiton</li>
            <li>Motion graphics animation</li>
            <li>Audio editing</li>
          </ul>
        </div>
      </BasicContent>
      <BasicContent style="style-1">
        <div className="col content">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/htNfVva1dw0"
              title="Lenovo Product Launch Animation"
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
