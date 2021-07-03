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
        style="style-2 style-5"
        logo="/logo-sas-white.svg"
        logoAlt="Logo"
        title="SAS Partnership Origami 3D Animations"
        imageAlt="Background Image"
        randomizeImage={true}
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">Origami: Concept to Completion</h2>
          <p>
            When SAS wanted to announce data analytics partnerships with
            Deloitte, Accenture, Capgemeni, KPMG and Ernst & Young, they needed
            a creative helping hand to take them from creative concept to
            finished product.
          </p>
          <p>
            They had an idea for 3D origami video animations for each client
            partnership. Bloom Collective was able to source the right team for
            the job and manage the project to completion as we created these
            five partnership announcement videos alongside our partners.
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Project facilitation</li>
            <li>3D animation sourcing</li>
          </ul>
        </div>
      </BasicContent>
      <Gallery columns="two-column">
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/7Gd-ZgqB4RM?modestbranding=1&rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/qRx6Dd43UQI?modestbranding=1&rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/KzDECDADNLk?modestbranding=1&rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/DuYjzOHRzSE?modestbranding=1&rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/O73yqgzGLpg?modestbranding=1&rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
      </Gallery>
      <Footer />
    </>
  );
}
