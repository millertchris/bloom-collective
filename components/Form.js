import _wrapper from "./layout/_wrapper";
import _pageTitle from "./layout/_pageTitle";
import _subheadline from "./layout/_subheadline";
import _paragraph from "./layout/_paragraph";
import _field from "./layout/_field";
import _dropdown from "./layout/_dropdown";

<<<<<<< HEAD
export default function Form({ mainPage }) {
=======
export default function Form(props) {
>>>>>>> sam-bloom/dev
  return (
    <section className="block form">
      <_wrapper>
        <div className="row max-w-lg mx-auto flex flex-col">
<<<<<<< HEAD
          {mainPage ? (
            <div className="col py-10">
              <h3 className="text-2xl sm:text-4xl font-bold text-center">
                Tell us everything and
                <br />
                <span className="inline-block text-yellow-300 line-yellow">
                  let's get to work
=======
          {props.mainPage ? (
            <div className="col py-10">
              <h3 className="text-2xl sm:text-4xl font-bold text-center">
                {props.headlineNoUnderline}
                <br />
                <span className="inline-block text-yellow-300 line-yellow">
                  {props.headlineUnderline}
>>>>>>> sam-bloom/dev
                </span>
              </h3>
            </div>
          ) : (
            <div className="col">
<<<<<<< HEAD
              <_pageTitle>Drop a line</_pageTitle>
            </div>
          )}
          <div className="col">
            <_paragraph>
              Please share your thoughts in the form below and we’ll be in
              touch. We’d love to hear from you.
            </_paragraph>
=======
              <_pageTitle>{props.headlineNoUnderline}</_pageTitle>
            </div>
          )}
          <div className="col">
            <_paragraph>{props.text}</_paragraph>
>>>>>>> sam-bloom/dev
            <form name="contact" method="POST">
              <label htmlFor="name" className="invisible">
                Name
              </label>
              <_field type="text" name="name" placeholder="Your full name" />

              <label htmlFor="email" className="invisible">
                Email
              </label>
              <_field type="email" name="email" placeholder="Your email" />

              <label htmlFor="phonee" className="invisible">
                Phone number
              </label>
              <_field
                type="text"
                name="phone"
                placeholder="Your phone number"
              />

              <label htmlFor="company" className="invisible">
                Company
              </label>
              <_field type="text" name="company" placeholder="Your company" />

              <_subheadline>What are you looking for?</_subheadline>
              <_dropdown
                type="text"
                name="what"
                value1="social media marketing"
                value2="some other stuff"
                value3="even more other"
              />
              <_subheadline>What is your budget?</_subheadline>
              <_dropdown
                type="text"
                name="budget"
                value1="Less than 25k"
                value2="25k - 75k"
                value3="More than 75k"
              />
              <_subheadline>How can we be of assistance?</_subheadline>
<<<<<<< HEAD
              <label htmlFor="message" className="invisible">Message</label>
=======
              <label htmlFor="message" className="absolute invisible">
                Message
              </label>
>>>>>>> sam-bloom/dev
              <_field
                type="text"
                name="message"
                placeholder="Your message..."
              />

              <button
                type="submit"
                className="my-6 px-5 py-3 w-full max-w-xxs
              bg-yellow-300
              text-black
              border-2 border-yellow-300
<<<<<<< HEAD
=======
              hover:bg-yellow-400
>>>>>>> sam-bloom/dev
              transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
