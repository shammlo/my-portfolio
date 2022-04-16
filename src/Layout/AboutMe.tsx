//********** IMPORTS ************* */

import Wrapper from '../helpers/Hoc/Wrapper/Wrapper';
import Image from 'next/image';

//******************************** */

interface AboutMeProps {}

const AboutMe: React.FC<AboutMeProps> = ({}) => {
    return (
        <section className="about-me" id="about-me">
            <Wrapper class="container">
                <Wrapper class="flex flex-col lgm:flex-row py-[3rem]">
                    <Wrapper class="about-left order-2 lgm:order-1 flex-1" animation="fade-up">
                        <Wrapper
                            class="about-image c-img lgm:ml-[-75px]"
                            // animation="fade-up"
                        >
                            <Image
                                src="/images/about-me.svg"
                                alt="About me Image"
                                width={720}
                                height={640}
                            />
                        </Wrapper>
                    </Wrapper>
                    <Wrapper class="about-right order-1 lgm:order-2" animation="fade-up">
                        <Wrapper
                            class="about-text max-w-[65rem]  lgm:max-w-[50rem] mx-auto lgm:pt-[100px] px-[2rem] pb-9 lgm:pb-0"
                            // animation="fade-up"
                        >
                            <h2 className="about-text-title text-6xl mb-6 text-center lgm:text-left">
                                <span className="relative">About me</span>
                            </h2>
                            <hr className="c-line my-4 mx-auto lgm:mx-0"></hr>
                            <p className="text-3xl lgm:text-3xl text-[#3f3a5a] leading-normal overflow-ellipsis">
                                Hello! My name is Shamlo Ameer, I’m a self taught full-stack
                                engineer located in kurdistan, computer science graduate, I’m very
                                passionate about learning new technologies and try new experiences,
                                as hobbies i like to do meditation, reading books, going to gym, and
                                walking.
                            </p>
                            <p className="text-3xl lgm:text-3xl text-[#3f3a5a] leading-normal overflow-ellipsis py-8">
                                Now I design and develop using Next.js and TypeScript as my main
                                languages for front-end and Node, Express, and MongoDB for back-end,
                                right now im practicing more by creating MERN stack applications,
                                personally and within my work area.
                            </p>
                            <p className="text-3xl lgm:text-3xl text-[#3f3a5a] leading-normal overflow-ellipsis ">
                                I don’t like to define myself by the work I’ve done. I define myself
                                by the work I want to do. Skills can be taught, personality is
                                inherent. I prefer to keep learning new technologies and better
                                habits, continue challenging myself, and do interesting things that
                                matter.
                            </p>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </section>
    );
};
export default AboutMe;
