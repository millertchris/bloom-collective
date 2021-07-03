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
        logo="/logo-asean.svg"
        logoAlt="Logo"
        title="ASEAN Development Goals Explainer Videos"
        imageAlt="Background Image"
        randomizeImage={true}
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">Serial content for complex ideas</h2>
          <p>
            The Association of Southeast Asian Nations (ASEAN) is comprized of
            10 Southeast Asian nations. Their goals include promoting
            intergovernmental cooperation and facilitating economic, political,
            security, military, educational and socioculutural integration
            between its members and other countries in Asia. So it should go
            without saying – they have some pretty epic aspirations.
          </p>
          <p>
            And what better way to explain nuanced and complex ideas than with a
            suite of visual animations? That's just what they did with this
            suite of eleven videos, explaining ASEAN Connectivity –  ASEAN's
            plan to "create a network of people and infrastructure to improve
            the way we live, work and travel."
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Creative ideation</li>
            <li>Project pitching</li>
            <li>Project facilitation</li>
            <li>Creative direction</li>
          </ul>
        </div>
      </BasicContent>
      <Gallery columns="two-column">
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/Vf813HMbKZc?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/8tHRCSrjMoo?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/KQjwULihhdQ?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/iIS9QhNLLas?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/5mfhPochAKA?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/R9gaLHZ0gu0?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/8gQk8qKmNy0?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/iTu1KIENdls?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/EnOYTKDp3OA?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/GpVQnPuyut4?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/reFn2WH-Ez8?modestbranding=1&rel=0"
              title="YouTube video player"
              modestbranding="1"
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
