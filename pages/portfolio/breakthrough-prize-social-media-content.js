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
        title="Breakthrough Prize Social Media Content"
        image="https://source.unsplash.com/random"
        imageAlt="Background Image"
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            impedit provident consequatur, nobis nihil voluptatum porro eum
            officiis? Maxime, laboriosam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facilis architecto nemo laboriosam libero laudantium officiis ipsum
            doloribus, natus repudiandae?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            facilis architecto nemo laboriosam libero laudantium officiis ipsum
            doloribus, natus repudiandae?
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Project facilitation</li>
            <li>3D Animation Sourcing</li>
          </ul>
        </div>
      </BasicContent>
      <Gallery columns="two-column">
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/wrHEK0VtHWQ"
              title="Breakthrough Prize 2019 Im Memoriam Video"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/HVU2huYtVeg"
              title="Jocelyn Bell Burnell Special Breakthrough Prize Video"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/HLJva6ss2Bc"
              title="Breakthrough Initiatives MeerKAT Video"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/zlzs6AoIOJ0"
              title="Event Horizon (EHT) Telescope Collaboration Video"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
      </Gallery>
      <Gallery columns="three-column">
        <div className="col image">
          <img
            src="/breakthrough-prize-laureates/1-breakthrough-prize-laureate-stephen-hawking.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/breakthrough-prize-laureates/2-breakthrough-prize-laureate-james-allison.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/breakthrough-prize-laureates/3-breakthrough-prize-laureate-cumrun-vafa.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/breakthrough-prize-laureates/4-breakthrough-prize-laureate-emmanuelle-charpenteir.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/breakthrough-prize-laureates/5-breakthrough-prize-laureate-stephen-elledge.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/breakthrough-prize-laureates/6-breakthrough-prize-laureate-robert-langer.jpg"
            alt="Place holder image"
          />
        </div>
      </Gallery>
      <Gallery columns="three-column">
        <div className="col image">
          <img
            src="/women-in-stem/1-women-in-stem-katherine-johnson.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/women-in-stem/2-women-in-stem-maryam-mirzakani.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/women-in-stem/3-women-in-stem-valentina-tereshkova.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/women-in-stem/4-women-in-stem-florence-bascom.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/women-in-stem/5-women-in-stem-hattie-elizabeth-alexander.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/women-in-stem/6-women-in-stem-marie-maynard-daily.jpg"
            alt="Place holder image"
          />
        </div>
      </Gallery>
      <Gallery columns="three-column">
        <div className="col image">
          <img
            src="/on-this-day/1-on-this-day-in-science.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/on-this-day/2-on-this-day-in-science.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/on-this-day/3-on-this-day-in-science.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/on-this-day/4-on-this-day-in-science.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/on-this-day/5-on-this-day-in-science.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/on-this-day/6-on-this-day-in-science.jpg"
            alt="Place holder image"
          />
        </div>
      </Gallery>
      <Gallery columns="three-column">
        <div className="col image">
          <img
            src="/scientist-birthdays/1-scientist-birthday-nikola-tesla.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/scientist-birthdays/2-scientist-birthday-steven-weinberg.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/scientist-birthdays/3-scientist-birthday-albert-einstein.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/scientist-birthdays/4-scientist-birthday-irene-fischer.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/scientist-birthdays/5-scientist-birthday-heinrich-lenz.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/scientist-birthdays/6-scientist-birthday-srinivasa-ramanujan.jpg"
            alt="Place holder image"
          />
        </div>
      </Gallery>
      <Footer />
    </>
  );
}
