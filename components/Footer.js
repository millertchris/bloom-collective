import Image from "next/image";
import _wrapper from "./layout/_wrapper";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <_wrapper>
        <div className="row my-10
        grid gap-6 
        sm:grid-cols-2
        lg:grid-cols-4">
          <div className="col">
            <Image
              height="60px"
              width="160px"
              src="/bloom_logo_white.svg"
              alt="Bloom Co"
              className="my-2"
            />
            <p>Business-driven content workflows</p>
          </div>
          <div className="col max-w-32">
            <h4 className="text-bold text-2xl my-2">Office</h4>
            <ul>
              <li className="font-bold">Bloom Collective Studio</li>
              <li>Sahid Office Boutique Unit A, 4th Floor, Jend.</li>
              <li>Sudirman Road 86, RT.10/RW.11, Karet Tengsin,</li>
              <li>Tanah Abang, Central Jakarta, Indonesia</li>
            </ul>
          </div>
          <div className="col max-w-32">
            <p>
              <h4 className="text-bold text-2xl my-2">Contact</h4>
              <ul>
                <li>(+62) 812-0000-0000</li>
                <li>contact@bloomcollective.com</li>
              </ul>
            </p>
          </div>
          <div className="col max-w-32">
          <h4 className="text-bold text-2xl my-2">Stay up to date</h4>
            <p>Subscribe to our newsletter.</p>
            <input type="text" name="email" className="w-full bg-black border border-gray-300 px-4 py-2 my-2" placeholder="Your email..." />
          </div>
        </div>
        <div className="row">
          <div className="col py-10 mt-10">
            <p>
              © Bloom Collective Studio 2021. All rights reserved.{" "}
              <a
                href="#"
                className="text-yellow-300 hover:text-white"
              >
                Privacy policy
              </a>{" "}
              -{" "}
              <a
                href="#"
                className="text-yellow-300 hover:text-white"
              >
                Terms & conditions
              </a>
            </p>
          </div>
        </div>
      </_wrapper>
    </footer>
  );
}
