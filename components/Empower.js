import _wrapper from "./layout/_wrapper";
import _headline from "./layout/_headline";
import _paragraph from "./layout/_paragraph";

export default function Empower() {
  return (
    <section className="empower relative mt-28">
      <_wrapper>
        <div className="row grid gap-4 md:grid-cols-2">
          <div className="col max-w-96">
            <_headline>
              <span className="inline-block text-yellow-300 line-yellow">
                Empowering
              </span>{" "}
              businesses with content workflows.
            </_headline>
          </div>
          <div className="col">
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <_paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </_paragraph>
            <div
              className="flex justify-left items-center gap-4 py-4"
            >
              <img
                src="https://source.unsplash.com/random"
                className="rounded-full w-16 h-16"
              />
              <div className="person-info">
                <h4 className="font-bold text-xl">Matthew Ooley</h4>
                <h5>Founder at Bloom Collective</h5>
              </div>
            </div>
          </div>
        </div>
      </_wrapper>
    </section>
  );
}
