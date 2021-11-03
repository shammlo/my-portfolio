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
                            class="about-text max-w-[65rem] lgm:max-w-[50rem] mx-auto lgm:pt-[100px] px-[3rem"
                            // animation="fade-up"
                        >
                            <h2 className="about-text-title text-6xl mb-6">About me</h2>
                            <hr className="c-line my-4"></hr>
                            <p className="text-4xl lgm:text-3xl text-[#3f3a5a] leading-normal overflow-ellipsis">
                                Hello! My name is Shamlo Ameer, I’m a self taught junior web
                                developer located in kurdistan, computer science graduate, I’m very
                                passionate about learning new technologies and try new experiences,
                                as hobbies i like to do meditation, reading books, going to gym, and
                                walking.
                            </p>
                            <p className="text-4xl lgm:text-3xl text-[#3f3a5a] leading-normal overflow-ellipsis py-8">
                                Now I design and develop using Next.js and TypeScript as my main
                                languages, also I&apos;m currently learning Node.js, Express.js and
                                after that MongoDB, SQL, MySQL since i want to be a full stack
                                developer, and my main goal is to become a software engineer.
                            </p>
                            <p className="text-4xl lgm:text-3xl text-[#3f3a5a] leading-normal overflow-ellipsis ">
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
