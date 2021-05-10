import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function ContentA(props) {
  return (
    <section className="block content-a">
      <_wrapper>
        <div className="row flex flex-wrap justify-center items-center lg:h-screen">
          <div className="col max-w-xl py-10">
            <img src={props.logo} className="py-5" />
            <_headline>{props.headline}</_headline>
            <_paragraph>{props.text}</_paragraph>
            <button
              className="px-5 py-3 w-full max-w-xxs
                text-gold
                border-2 border-gold
                hover:bg-yellow-400 hover:border-yellow-300 hover:text-black
                transition duration-300 ease-in-out"
            >
              {props.buttonText}
            </button>
          </div>
          <div className="col">
            <img className="w-96" src="../phone.svg" />
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
