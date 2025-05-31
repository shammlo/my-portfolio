import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Link } from "react-scroll";
import Banner from "../Layout/Banner";
import Contact from "../Layout/Contact";
import Projects from "../Layout/Projects";
import Wrapper from "../helpers/Hoc/Wrapper/Wrapper";

const AboutMe = dynamic(() => import("../Layout/AboutMe"));
const Home: NextPage = () => {
  // ----------------------------------------------------------------
  return (
    <>
      <Banner />
      <AboutMe />
      <Projects />
      <Contact />

      <footer className="footer py-6" id="footer">
        <Wrapper class="container">
          <Wrapper class="flex justify-between items-center">
            <Wrapper class="">
              <Link to="home" className="logo-link flex items-center">
                <Wrapper class="logo-link-image h-12 w-12 md:h-16 md:w-16 mr-3">
                  <Image
                    src="/images/s.png"
                    alt="Main Logo"
                    height={40}
                    width={40}
                    layout="responsive"
                    // layout="fill"
                    className="block h-12 md:h-16"
                  />
                </Wrapper>
                <span className="text-3xl lgm:text-4xl  md:block tracking-wider font-bold uppercase">
                  Shamlo
                </span>
              </Link>
            </Wrapper>
            <Wrapper class="">
              Designed and Developed by{" "}
              <a
                className="footer-link"
                href="https://github.com/shammlo"
                target="_blank"
                rel="noreferrer"
              >
                Shamlo
              </a>
              .
            </Wrapper>
            <Wrapper class="hidden md:block">
              <Wrapper class="flex items-center">
                <a className="social-link h-[25px]" href="#" target="_blank">
                  <Image
                    src="/images/facebook.svg"
                    alt="Social Icon Facebook"
                    className="social-link-icon"
                    width={25}
                    height={25}
                  />
                </a>
                <a className="social-link h-[20px]  md:h-[25px] px-4" href="#" target="_blank">
                  <Image
                    src="/images/twitter.svg"
                    alt="Social Icon twitter"
                    className="social-link-icon"
                    width={25}
                    height={25}
                  />
                </a>
                <a className="social-link h-[25px]" href="#" target="_blank">
                  <Image
                    src="/images/github.svg"
                    alt="Social Icon github"
                    className="social-link-icon"
                    width={25}
                    height={25}
                  />
                </a>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </footer>
    </>
  );
};

export default Home;
