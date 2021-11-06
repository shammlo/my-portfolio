/* eslint-disable @next/next/no-img-element */
//********** IMPORTS ************* */
import React from 'react';
import Wrapper from '../helpers/Hoc/Wrapper/Wrapper';
import Image from 'next/image';
//******************************** */

interface projectsProps {}

const projects: React.FC<projectsProps> = ({}) => {
    return (
        <section className="projects pt-[6rem] pb-[12rem]" id="projects">
            <Wrapper class="container">
                {/* //- Projects header */}
                <Wrapper class="projects-header text-center" animation="fade-up">
                    <h1 className="text-7xl lgm:text-6xl text-[#02073e]">My Projects</h1>
                    <h2 className="text-3xl my-4  lgm:font-light">
                        Here are a few design projects I&apos;m worked on recently!
                    </h2>
                </Wrapper>
                {/* //---------------------------------------- */}
                {/* //- Projects Body */}
                <Wrapper class="projects-body flex flex-col	 gap-[3rem]">
                    {/* //- Projects One */}
                    <Wrapper class="project-one flex content-start flex-col lgm:flex-row pt-[100px] pb-[50px] lgm:py-[100px]">
                        {/* //- left */}
                        <Wrapper class="project-left flex-1 flex flex-col gap-20">
                            <Wrapper class="lgm:pr-20 pt-12" animation="fade-up">
                                <Wrapper class="pb-4">
                                    <h1 className="text-5xl lgm:text-4xl">Covid-19 tracker</h1>
                                    <p className="text-[1.75rem] py-4 lgm:font-light tracking-wide	">
                                        A website to track the new pandemic Covid-19 virus, with
                                        visualization of map, table, chart for global and specific
                                        counters, 3 different languages and light - dark them.
                                    </p>
                                </Wrapper>

                                {/* //---------------------------------------- */}
                                {/* //- Projects Text Info */}
                                <Wrapper class="py-8" id="animate-anchor" animation="fade-up">
                                    <h2 className="text-4xl lgm:text-3xl">Techs and tools used</h2>
                                    <Wrapper class="flex items-center justify-center lgm:justify-start pt-8">
                                        <img
                                            className="h-16 w-16 cursor-pointer"
                                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                                            alt="html5"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
                                            alt="sass"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                                            alt="javascript"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://datatables.net/media/images/logo.png"
                                            alt="DataTables"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://www.chartjs.org/media/logo-title.svg"
                                            alt="chartjs"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://select2.org/user/pages/images/logo.png"
                                            alt="Select2"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 cursor-pointer"
                                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png"
                                            alt="Webpack"
                                            width={30}
                                            height={30}
                                        />
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>

                            {/* //---------------------------------------- */}
                            {/* //- Projects Buttons */}
                            <Wrapper
                                class="w-100 flex justify-center lgm:justify-start"
                                animation="fade-up"
                                anchor="#animate-anchor"
                            >
                                {/* //---------------------------------------- */}
                                {/* //- Show Code button */}
                                <Wrapper class="project-code-btn">
                                    <a
                                        className="btn-live flex items-center  rounded-md"
                                        href="https://github.com/shammlo/covid-19-Tracker"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="py-4 px-10 text-[#ffffff]">Source Code</p>
                                        <div className="flex items-center justify-center text-white  h-[42px] w-[40px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                width={25}
                                                height={25}
                                            >
                                                <title>GitHub</title>
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </Wrapper>

                                {/* //---------------------------------------- */}
                                {/* //- Live Button */}
                                <Wrapper class="project-live-btn ml-12">
                                    <a
                                        className="btn-live flex items-center  rounded-md"
                                        href="https://covidvirus-tracker.netlify.app"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="py-4 px-10 text-[#ffffff]">Live Preview</p>
                                        <div className="flex items-center justify-center text-white  h-[42px] w-[40px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                width={25}
                                                height={25}
                                            >
                                                <title>External Link</title>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </div>
                                    </a>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>

                        {/* //---------------------------------------- */}
                        {/* //- Project Right */}
                        <Wrapper
                            class="project-right flex-1"
                            id="project-right"
                            animation="fade-up"
                        >
                            <Wrapper
                                class="project-image rounded-lg overflow-hidden shadow-d"
                                animation="fade-up"
                                // anchor="#animate-anchor"
                            >
                                <Image
                                    className="project-img h-100"
                                    // src="/images/sapiens-6.svg"
                                    src="/images/projects/project-1-light.png"
                                    alt="project image"
                                    width={1820}
                                    height={940}
                                    unoptimized={true}
                                    quality={100}
                                    // layout="responsive"
                                />
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    {/*//* ---------------------------------------------------------------- */}
                    {/* //- Projects Two */}
                    <Wrapper class="project-two flex content-start flex-col lgm:flex-row pt-[5rem]">
                        {/* //---------------------------------------- */}
                        {/* //- Project left */}
                        <Wrapper class="project-left flex-1 ">
                            <Wrapper
                                class="project-image rounded-lg overflow-hidden shadow-d"
                                animation="fade-up"
                            >
                                <Image
                                    className="project-img h-100"
                                    // src="/images/sapiens-6.svg"
                                    src="/images/projects/project-2-light.png"
                                    alt="project image"
                                    width={1924}
                                    height={1040}
                                    unoptimized={true}
                                    quality={100}
                                />
                            </Wrapper>
                        </Wrapper>
                        {/* //---------------------------------------- */}
                        {/* //- Project Right */}
                        <Wrapper
                            class="project-right flex-1 flex flex-col gap-20"
                            animation="fade-up"
                        >
                            {/* //- Project text */}
                            <Wrapper class="lgm:pl-20 pt-12" animation="fade-up">
                                <Wrapper class="">
                                    <h1 className="text-5xl lgm:text-4xl	">Covid-19</h1>
                                    <p className="text-[1.75rem] py-4 lgm:font-light">
                                        This web app is recreation of the Covid-19 tracker app, but
                                        used the Next.js framework with TypeScript for its
                                        development, showcasing map, table, chart for global and
                                        specific counters, with 2 themes light - dark.
                                    </p>
                                </Wrapper>
                                <Wrapper class="py-8" animation="fade-up">
                                    <h2 className="text-4xl lgm:text-3xl">Techs and tools used</h2>
                                    <Wrapper class="flex items-center justify-center lgm:justify-start pt-8 ">
                                        <img
                                            className="h-16 w-16 mr-4 cursor-pointer"
                                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
                                            alt="sass"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67"
                                            alt="Next.js"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                                            alt="TypeScript"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                                            alt="Redux"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-[3.8rem] w-20 mx-4 cursor-pointer"
                                            src="https://raw.githubusercontent.com/redux-saga/redux-saga/master/logo/0800/Redux-Saga-Logo.png"
                                            alt="Redux Saga"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://www.chartjs.org/media/logo-title.svg"
                                            alt="chartjs"
                                            width={30}
                                            height={30}
                                        />
                                        <img
                                            className="h-16 w-16 mx-4 cursor-pointer"
                                            src="https://raw.githubusercontent.com/mbrn/material-table.com/master/docs/assets/logo-back.png"
                                            alt="Material Table"
                                            width={35}
                                            height={30}
                                        />
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>

                            {/* //---------------------------------------- */}
                            {/* //- Project Button */}
                            <Wrapper
                                class="w-100 flex lgm:pl-20 justify-center lgm:justify-start"
                                animation="fade-up"
                            >
                                {/* //---------------------------------------- */}
                                {/* //- Code Button */}
                                <Wrapper class="project-code-btn">
                                    <a
                                        className="btn-live flex items-center  rounded-md"
                                        target="_blank"
                                        href="https://github.com/shammlo/Covid19-Tracker"
                                        rel="noreferrer"
                                    >
                                        <p className="py-4 px-10 text-[#ffffff]">Source Code</p>
                                        <div className="flex items-center justify-center text-white  h-[42px] w-[40px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                width={25}
                                                height={25}
                                            >
                                                <title>GitHub</title>
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                            </svg>
                                        </div>
                                    </a>
                                </Wrapper>
                                {/* //---------------------------------------- */}
                                {/* //- Live Button */}
                                <Wrapper class="project-live-btn ml-12">
                                    <a
                                        className="btn-live flex items-center  rounded-md"
                                        href="https://covidvirus-tracker.vercel.app/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <p className="py-4 px-10 text-[#ffffff]">Live Preview</p>
                                        <div className="flex items-center justify-center text-white  h-[42px] w-[40px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                role="img"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                width={25}
                                                height={25}
                                            >
                                                <title>External Link</title>
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </div>
                                    </a>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </section>
    );
};
export default projects;
