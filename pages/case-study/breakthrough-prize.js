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
        title="Breakthrough Prize Social Content Case Study"
        image="/breakthrough-prize-hangar-one.jpg"
        imageAlt="Background Image"
        rellaxCentering="0.67"
      />
      <BasicContent style="style-1">
        <div className="col content">
          <h2 class="title">
            How Bloom Collective works to help make science cool again, one post
            at a time
          </h2>
          <p>
            <em>
              The Breakthrough Prizes are awarded yearly in recognition of
              scientific advances in the areas of Fundamental Physics,
              Mathematics and Life Sciences. Sometimes referred to as "the
              Oscars of science," their annual red carpet awards gala draws a
              Who's Who of Hollywood, Silicon Valley and science. The founders
              are among some of the biggest names in tech – Yuri and Julia
              Milner, Sergey Brin, Mark Zuckerberg and Priscilla Chan, Jack Ma,
              Ma Huateng and Anne Wojcicki. Bloom Collective is proud to call
              Breakthrough one of our clients.
            </em>
          </p>
          <p>
            Have you ever tried to communicate a complex idea in a simple and
            eloquent way? If so, you'll probably understand the struggle of
            science communicators. Science is beautiful. It explains who we are
            and how we got here. It helps us cure disease and enables us to live
            longer and healthier lives. It has given us every piece of
            technology ever invented. But in all its splendor, science has a
            hitch for mass consuption – it can also be very difficult to
            explain.
          </p>
          <p>
            One of Breakthrough's guiding tenets is to try to "repopularize"
            science. It is said that in Einstien's day, scientists were
            celebrated as rock stars – everyone knew Einstein just like now
            everyone knows Alicia Keys. Fast forward to today and try to ask a
            millenial to name one scientist and watch their eyes glaze over.
            Breakthrough aims to fix this, and Bloom Collective aims to help.
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Project services</h2>
          <ul>
            <li>Custom content workflow design</li>
            <li>Content planning and strategy</li>
            <li>Content resarch</li>
            <li>Daily content updates</li>
            <li>Content calendar management</li>
            <li>Channel management</li>
          </ul>
        </div>
      </BasicContent>
      <FeaturedImage image="/content-categories.jpg" />
      <BasicContent style="style-2">
        <div className="col headline">
          <h2 class="title">Communicating the incommunicable</h2>
        </div>
        <div className="col content">
          <p>
            Working with Breakthrough, Bloom Collective has had to become
            science communicators in our own right. It has been both a
            challenging and enlightening journey, and one we are very proud of.
            And while we're still a few degrees short of a PhD, we've created
            some truly engaging content along the way.
          </p>
          <p>
            Each month we handle Breakthrough's social content from ideation and
            research to design and channel management.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pellentesque rhoncus erat, nec convallis est aliquet vitae. In
            convallis nulla sit amet ex placerat tempor. Donec tempus orci elit,
            eu lacinia felis congue at. Aliquam vehicula lorem a elit commodo
            vestibulum. Etiam maximus maximus urna, vel lobortis magna volutpat
            in. Proin sit amet velit elit. Vivamus fermentum purus at ante
            posuere, sed venenatis quam facilisis.
          </p>
        </div>
      </BasicContent>

      <Gallery columns="three-column">
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
          <h2 class="title">Breakthrough Prize subheadline</h2>
        </div>
        <div className="col content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pellentesque rhoncus erat, nec convallis est aliquet vitae. In
            convallis nulla sit amet ex placerat tempor. Donec tempus orci elit,
            eu lacinia felis congue at. Aliquam vehicula lorem a elit commodo
            vestibulum. Etiam maximus maximus urna, vel lobortis magna volutpat
            in. Proin sit amet velit elit. Vivamus fermentum purus at ante
            posuere, sed venenatis quam facilisis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            pellentesque rhoncus erat, nec convallis est aliquet vitae. In
            convallis nulla sit amet ex placerat tempor. Donec tempus orci elit,
            eu lacinia felis congue at. Aliquam vehicula lorem a elit commodo
            vestibulum. Etiam maximus maximus urna, vel lobortis magna volutpat
            in. Proin sit amet velit elit. Vivamus fermentum purus at ante
            posuere, sed venenatis quam facilisis.
          </p>
          <p>
            <a href="/contact">Contact Bloom Collective</a> to see how we can
            help your content aspirations.
          </p>
        </div>
      </BasicContent>
      <Footer />
    </>
  );
}
