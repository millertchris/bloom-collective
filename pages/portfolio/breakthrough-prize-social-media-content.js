import Hero from "../../components/Hero";
import Gallery from "../../components/Gallery";
import FeaturedImage from "../../components/FeaturedImage";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BasicContent from "../../components/BasicContent";

import Flickity from "react-flickity-component";

const flickityOptions = {
  wrapAround: true,
  initialIndex: 1,
  contain: true,
};

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
          <h2 class="title">Good content shouldn't be rocket science</h2>
          <p>
            Each month we work closely with the Breakthrough Prize Foundation to
            curate, create, design and manage their social content. Our goal for
            Breakthrough (and all of our clients) is to make the content process
            as simple as possible.
          </p>
          <p>
            Below is a small sample of the hundreds of pieces of content we've
            done for the Breakthrough Prize Foundation. From video editing to 3D
            and 2D graphics to designed and even hand-drawn content – we've done
            just about everything.
          </p>
          <p>
            For a deeper take, look at our client
            <a href="/case-study/breakthrough-prize"> case study</a>, which
            explains our monthly content creation process for Breakthrough.
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Content ideation</li>
            <li>Content research</li>
            <li>Content design</li>
            <li>Content calendar management</li>
            <li>Channel management</li>
          </ul>
        </div>
      </BasicContent>
      <section className="block carousel-block">
        <div className="component-wrapper">
          <h3 className="title">Breakthrough Presser Videos</h3>
          <p className="description">Press release companion videos.</p>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={{ ...flickityOptions, initialIndex: 0 }} // takes flickity options {}
            disableImagesLoaded={true} // default false
            reloadOnUpdate={true} // default false
            static={true} // default false
          >
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
          </Flickity>
        </div>
      </section>
      <section className="block carousel-block">
        <div className="component-wrapper">
          <h3 className="title">Breakthrough Prize Laureate Posters</h3>
          <p className="description">
            Hand-drawn social posters with custom typography.
          </p>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} // default false
            static={true} // default false
          >
            <div className="col image">
              <img
                src="/breakthrough-prize-laureates/2-breakthrough-prize-laureate-james-allison.jpg"
                alt="Place holder image"
              />
            </div>
            <div className="col image">
              <img
                src="/breakthrough-prize-laureates/1-breakthrough-prize-laureate-stephen-hawking.jpg"
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
          </Flickity>
        </div>
      </section>
      <section className="block carousel-block">
        <div className="component-wrapper">
          <h3 className="title">Women in STEM Social Posters</h3>
          <p className="description">
            Social poster series celebrating women scientists.
          </p>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} // default false
            static={true} // default false
          >
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
          </Flickity>
        </div>
      </section>
      <section className="block carousel-block">
        <div className="component-wrapper">
          <h3 className="title">
            "On This Day in Science" Social Poster Series
          </h3>
          <p className="description">
            Social poster series celebrating past scientific achievement.
          </p>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} // default false
            static={true} // default false
          >
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
          </Flickity>
        </div>
      </section>
      <section className="block carousel-block">
        <div className="component-wrapper">
          <h3 className="title">Scientist Birthday Social Posters</h3>
          <p className="description">
            Social poster series celebrating the achievements of renowned
            scientists on their birthdays.
          </p>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={{ ...flickityOptions, initialIndex: 2 }} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate={true} // default false
            static={true} // default false
          >
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
          </Flickity>
        </div>
      </section>
      <Footer />
    </>
  );
}
