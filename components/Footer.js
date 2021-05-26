import Image from "next/image";
import _wrapper from "./layout/_wrapper";
import CustomForm from "./MailChimp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-10 bg-black text-white">
      <_wrapper>
        <div
          className="row my-10
        grid
        sm:grid-cols-2
        lg:grid-cols-4"
        >
          <div className="col">
            <img
              src="/bloom_logo_white.svg"
              alt="Bloom Collective"
              className="logo"
            />
            <p className="subtitle">Business-driven content workflows</p>
            <ul className="social">
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="/">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col max-w-32">
            <h4 className="text-bold text-2xl my-2">Office</h4>
            <ul>
              <li className="font-bold">Bloom Collective Studio </li>
              <li>Sahid Office Boutique Unit A, </li>
              <li>4th Floor, Jl. Jend Sudirman 86, </li>
              <li>RT.10/RW.11, Karet Tengsin, </li>
              <li>Tanah Abang, Central Jakarta, </li>
              <li>Indonesia</li>
            </ul>
          </div>
          <div className="col max-w-32">
            <h4 className="text-bold text-2xl my-2">Contact</h4>
            <ul>
              <li>
                <a
                  href="tel:+62-21-5785-2198"
                  className="hover:text-yellow-300 text-white"
                >
                  +62-21-5785-2198
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@bloomcollective.com"
                  className="hover:text-yellow-300 text-white"
                >
                  admin@bloomcollective.com
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
              {/*<a href="#" className="text-yellow-300 hover:text-white">
                Privacy policy
              </a>{" "}
              -{" "}
              <a href="#" className="text-yellow-300 hover:text-white">
                Terms & conditions
              </a>*/}
            </p>
          </div>
        </div>
      </_wrapper>
    </footer>
  );
}
