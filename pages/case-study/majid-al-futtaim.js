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
        title="Majid Al Futtaim Content Workflow Case Study"
        image="/mall-of-the-emirates-roof.jpg"
        imageAlt="Mall of the Emirates roof"
        rellaxCentering="0.67"
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">
            How we created a crisis content workflow during the onset of
            Covid-19
          </h2>
          <p>
            In January 2020, none of us knew what was coming. Not one of us knew
            the world was about to change forever. Not you, not me. Not clients,
            and not agencies.
          </p>
          <p>
            When the news about Covid-19 broke, Bloom Collective had recently
            started working alongside Majid Al Futtaim as their internal comms
            content agency.
          </p>
          <p>
            As the situation progressed and the world began to close its doors
            and borders, we knew we had to act fast to help Majid Al Futtaim
            commnicate with their nearly 45,000 employees.
          </p>
          <p>This is how we did it.</p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Custom content workflow design</li>
            <li>Content planning and strategy</li>
            <li>Daily content updates</li>
            <li>Content calendar management</li>
            <li>Channel management</li>
            <li>200+ pieces of content</li>
          </ul>
        </div>
      </BasicContent>
      <Gallery>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/z2CDQcvyJQM"
              title="Preventative measures to avoid Coronavirus"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
        <div className="col video">
          <div className="videoWrapper">
            <iframe
              src="https://www.youtube.com/embed/jVIMltXMsHc"
              title="When to wash your hands"
              modestbranding="1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
      </Gallery>
      <BasicContent style="style-2">
        <div className="col headline">
          <h2 class="title">New world, new ways.</h2>
        </div>
        <div className="col content">
          <p></p>
          <p>
            At the onset of the pandemic the only certainty was uncertainty. The
            world had changed and it was palpable. Enitre nations were
            grappeling with how to cope. There was certainly no blueprint for
            how to run a multinational admidst a global virus outbreak. But as
            an organization, Majid Al Futtaim quickly sprung in to leadership
            mode.
          </p>
          <p>
            At the end of February, governments across the Middle East and North
            Africa (MENA) began imposing shutdowns across public spaces
            including malls, cinemas, hotels and more. This resutled in the
            majority of MAF staff being forced to work from home – a practice
            that was uncommon in the Middle East at the time.
          </p>
          <p>
            As Majid Al Futtaim's corporate communications creative content
            agency, Bloom Collective was in a unique position to co-create and
            co-ordinate the organization's group-wide internal response. We
            worked closely with their internal leadership team to do just that.
          </p>
          <p>As with anyl</p>
        </div>
      </BasicContent>

      <Gallery>
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

      <BasicContent style="style-2">
        <div className="col headline">
          <h2 class="title">Lorem, ipsum dolor.</h2>
        </div>
        <div className="col content">
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
      </BasicContent>
      <Footer />
    </>
  );
}
