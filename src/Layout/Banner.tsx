//********** IMPORTS ************* */
import Head from 'next/head';
import React from 'react';
import Wrapper from '../helpers/Hoc/Wrapper/Wrapper';
import Image from 'next/image';
import { Link } from 'react-scroll';
//******************************** */

interface BannerProps {}

const Banner: React.FC<BannerProps> = ({}) => {
    const downloadPDF = () => {
        window.open('/files/Shamlo-Ameer.pdf', '_blank');
    };
    return (
        <section className="banner cta-banner" id="home">
            <Wrapper class="container">
                <Head>
                    <title>S H A M L O</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/images/s.png" />
                </Head>
                <Wrapper class="flex content-start flex-col lgm:flex-row">
                    <Wrapper class="banner-left banner-text flex-1 pb-16 lgm:pt-[6rem]">
                        <Wrapper
                            class="banner-text text-center lgm:text-left"
                            animation="fade-right"
                        >
                            <h1 className="banner-text-title my-3">
                                Hi, I&apos;m{}
                                <svg className="svg-filters" style={{ display: 'none' }}>
                                    <defs>
                                        <filter id="marker-shape">
                                            <feTurbulence
                                                type="fractalNoise"
                                                baseFrequency="0 0.15"
                                                numOctaves="1"
                                                result="warp"
                                            />
                                            <feDisplacementMap
                                                xChannelSelector="R"
                                                yChannelSelector="G"
                                                scale="30"
                                                in="SourceGraphic"
                                                in2="warp"
                                            />
                                        </filter>
                                    </defs>
                                </svg>
                                <strong className="c-name relative"> Shamlo</strong>, I&apos;m a
                                Front End Developer!
                            </h1>
                            <h2 className="banner-text-subtitle mb-8 mt-4">
                                A self-taught front-end developer and web designer based in
                                Kurdistan.
                            </h2>
                        </Wrapper>
                        {/* //-------------------------------------------- */}
                        {/* //- <! -- Download CV -->*/}

                        <Wrapper
                            class="banner-cta-btn flex items-center justify-center lgm:justify-start text-gray-50"
                            animation="fade-right"
                        >
                            <Wrapper class="banner-cv max-h-[42px] max-w-[170px] mr-12">
                                <a
                                    className="btn-download flex items-center"
                                    href="/files/Shamlo-Ameer.pdf"
                                    download
                                    target="_blank"
                                    onClick={() => downloadPDF()}
                                >
                                    <p className="py-4 px-8 text-[#fff]">Download CV</p>
                                    <Wrapper>
                                        <svg viewBox="0 0 24 24">
                                            <path d="M 4,12 C 4,12 12,20 12,20 C 12,20 20,12 20,12"></path>
                                        </svg>
                                    </Wrapper>
                                </a>
                            </Wrapper>
                            <Wrapper class="banner-contact max-h-[42px] max-w-[170px]">
                                <Link
                                    to="contact"
                                    className="btn-contact flex items-center   rounded-md "
                                    offset={-70}
                                >
                                    <p className="py-4 px-10 text-[#ffffff]">Contact me</p>
                                    <div className="flex items-center justify-center text-white  h-[42px] w-[40px]">
                                        <svg
                                            className="contact-icon "
                                            x="2.5rem"
                                            y="2.5rem"
                                            viewBox="0 0 474 474"
                                        >
                                            <g>
                                                <path d="M437.5,59.3h-401C16.4,59.3,0,75.7,0,95.8v282.4c0,20.1,16.4,36.5,36.5,36.5h401c20.1,0,36.5-16.4,36.5-36.5V95.8   C474,75.7,457.6,59.3,437.5,59.3z M432.2,86.3L239.5,251.1L46.8,86.3H432.2z M447,378.2c0,5.2-4.3,9.5-9.5,9.5h-401   c-5.2,0-9.5-4.3-9.5-9.5V104.9l203.7,174.2c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.5,0.4,0.8,0.5   c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.2,0.8,0.4,1.2,0.6c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0.3,1,0.4c0.1,0,0.3,0.1,0.4,0.1   c0.3,0.1,0.6,0.2,0.9,0.2c0.1,0,0.3,0.1,0.4,0.1c0.3,0.1,0.7,0.1,1,0.2c0.1,0,0.2,0,0.3,0c0.4,0,0.9,0.1,1.3,0.1l0,0l0,0   c0.4,0,0.9,0,1.3-0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.7-0.1,1-0.2c0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.2c0.1,0,0.3-0.1,0.4-0.1   c0.3-0.1,0.6-0.2,1-0.4c0.1,0,0.2-0.1,0.3-0.1c0.4-0.2,0.8-0.4,1.2-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.3-0.2,0.5-0.3,0.8-0.5   c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.3-0.2,0.4-0.3L447,109.2V378.2z" />
                                            </g>
                                        </svg>
                                    </div>
                                </Link>
                            </Wrapper>
                        </Wrapper>
                        {/* //-------------------------------------------- */}

                        {/* //-Social links */}
                        <Wrapper
                            class="banner-socials mt-12"
                            ariaLabel="Social Links"
                            animation="fade-right"
                        >
                            <a
                                className="social-link"
                                href="https://www.facebook.com/shamlo.redzx"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/images/facebook.svg"
                                    alt="Social Icon Facebook"
                                    className="social-link-icon"
                                    width={25}
                                    height={25}
                                />
                            </a>
                            <a
                                className="social-link"
                                href="https://twitter.com/Shamlo_"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Image
                                    src="/images/twitter.svg"
                                    alt="Social Icon twitter"
                                    className="social-link-icon"
                                    width={25}
                                    height={25}
                                />
                            </a>
                            <a
                                className="social-link"
                                href="https://github.com/shammlo"
                                target="_blank"
                                rel="noreferrer"
                            >
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

                    {/* //-------------------------------------------- */}
                    {/* //- Banner right */}
                    <Wrapper class="banner-right flex-1 mt-8 lgm:mt-0" animation="fade-left">
                        <Wrapper class="banner-right-wrapper">
                            <Image
                                className="banner-img"
                                // src="/images/sapiens-6.svg"
                                src="/images/banner.png"
                                alt="banner image"
                                height={765}
                                width={958}
                                unoptimized={true}
                                quality={100}
                                layout="responsive"
                                sizes="(max-width: 500px) 100px"
                            />
                        </Wrapper>
                    </Wrapper>
                </Wrapper>

                {/* //-------------------------------------------- */}
                {/* //-Scroll down */}

                <Wrapper class="w-100 flex justify-center">
                    <Link to="about-me" className="px-4 py-4 cursor-pointer" smooth={true}>
                        <div className="scrolldown ">
                            <div className="chevrons">
                                <div className="chevrondown"></div>
                                <div className="chevrondown"></div>
                            </div>
                        </div>
                    </Link>
                </Wrapper>
            </Wrapper>
        </section>
    );
};
export default Banner;
