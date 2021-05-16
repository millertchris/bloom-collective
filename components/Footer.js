import Image from "next/image";
import _wrapper from "./layout/_wrapper";
import CustomForm from "./MailChimp";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <_wrapper>
        <div
          className="row my-10
        grid gap-6 
        sm:grid-cols-2
        lg:grid-cols-4"
        >
          <div className="col">
            <Image
              height="60px"
              width="160px"
              src="/bloom_logo_white.svg"
              alt="Bloom Co"
              className="my-2"
            />
            <p>Business-driven content workflows</p>
            <div className="socials flex gap-4 py-4 text-white">
              <img src="social-fb.svg" className="w-8 h-8" />

              <img src="social-ig.svg" className="w-8 h-8" />

              <img src="social-li.svg" className="w-8 h-8" />

              <img src="social-tw.svg" className="w-8 h-8" />
            </div>
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
            <h4 className="text-bold text-2xl my-2">Contact</h4>
            <ul>
              <li>
                <a
                  href="tel:(+62) 812-0000-0000"
                  className="hover:text-yellow-300 text-white"
                >
                  (+62) 812-0000-0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@bloomcollective.com"
                  className="hover:text-yellow-300 text-white"
                >
                  contact@bloomcollective.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col max-w-32">
            <h4 className="text-bold text-2xl my-2">Stay up to date</h4>
            <p>Subscribe to our newsletter.</p>
            <CustomForm />
          </div>
        </div>
        <div className="row">
          <div className="col py-10 mt-10">
            <p>
              © Bloom Collective Studio 2021. All rights reserved.{" "}
              <a href="#" className="text-yellow-300 hover:text-white">
                Privacy policy
              </a>{" "}
              -{" "}
              <a href="#" className="text-yellow-300 hover:text-white">
                Terms & conditions
              </a>
            </p>
          </div>
        </div>
      </_wrapper>
    </footer>
  );
}
