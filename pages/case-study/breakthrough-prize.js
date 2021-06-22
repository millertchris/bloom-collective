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
            How Bloom Collective helps to make science cool again, one post at a
            time
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
            Have you ever tried to communicate an extremely complex idea in a
            simple and eloquent way? If so, you'll probably understand the
            struggle of science communicators. Science is beautiful. It explains
            who we are and how we got here. It helps us cure disease and enables
            us to live longer and healthier lives. It has given us every piece
            of technology ever invented. But in all its splendor, science has a
            hitch for mass consuption – it can also be very difficult to
            understand and explain.
          </p>
          <p>
            One of Breakthrough's guiding tenets is to try to "repopularize"
            science. It is said that in Einstien's day, scientists were
            celebrated as rock stars – everyone knew Einstein just like now
            everyone knows Kendrck Lamar. Fast forward to today and try to ask a
            millenial to name one scientist and watch their eyes glaze over.
            Breakthrough aims to fix this, and Bloom Collective aims to help.
          </p>
        </div>
        <div className="col list">
          <h2 className="title">Client services</h2>
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
      <Gallery columns="three-column">
        <div className="col image">
          <img
            src="/einstein-quotes/bt-social-post-einsteinquotes-2.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/einstein-quotes/bt-social-post-einsteinquotes-3.jpg"
            alt="Place holder image"
          />
        </div>
        <div className="col image">
          <img
            src="/einstein-quotes/bt-social-post-einsteinquotes-4.jpg"
            alt="Place holder image"
          />
        </div>
      </Gallery>
      <BasicContent style="style-2">
        <div className="col headline">
          <h2 class="title">Advanced Content Theory, Explained</h2>
        </div>
        <div className="col content">
          <p>
            Working with Breakthrough, Bloom Collective has had to become
            science communicators in our own right. It has been a journey both
            challenging and enlightening, and one we are very proud of. And
            while we're still a few degrees short of a PhD, we've had the
            opporunity to create some truly engaging science content along the
            way.
          </p>
          <p>
            Each month we handle Breakthrough's social media content from
            planning and research to proudction and posting. The process starts
            with our research team, who scours the interwebs for science-related
            content based mostly around physics, mathematics, life sciences and
            laureate news. In addition, each month we also create custom content
            based around agreed content pillars. Our team then puts together a
            monthly content budget, which is pitched to breakthough.
          </p>
          <p>
            Once the monthly content is agreed, Bloom Collective goes in to
            production mode – creating our custom content animations, newsers
            and posters. All of this content is then drafted, and sent to
            Breakthrough for approval. After that, any necessary adjustments are
            made, and the content is scheduled. Typically, we are able complete
            around 85-90% of Breakthrough's monthly content before the month
            even begins. This gives us more freedom to create content on demand
            as the calendar month progresses.
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
