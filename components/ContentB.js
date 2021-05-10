import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function ContentB(props) {
  return (
    <section className="block content-b">
      <_wrapper>
        <div className="row flex flex-wrap justify-center items-center lg:h-screen">
          <div className="col">
            <img className="w-96" src={props.image} />
          </div>
          <div className="col max-w-xl py-10">
            <img src={props.logo} className="py-5" />
            <_headline>{props.headline}</_headline>
            <_paragraph>{props.text}</_paragraph>
            <button
              className="px-5 py-3 w-full max-w-xxs
                text-gray-400
                border-2 border-gray-400
                hover:bg-yellow-400 hover:border-yellow-300 hover:text-black
                transition duration-300 ease-in-out"
            >
              {props.buttonText}
            </button>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
