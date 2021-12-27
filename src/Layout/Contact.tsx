//********** IMPORTS ************* */
import React, { useRef, useState } from 'react';
import Wrapper from '../helpers/Hoc/Wrapper/Wrapper';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import Image from 'next/image';
import Modal from '../components/UI/Modal';
init('user_ZvmIDRZKN0Dpu9EnexPlA');
//******************************** */

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });
    const [checking, setChecking] = useState(false);
    const form: any = useRef();
    let submittingCheck = null;
    const onSubmit = (e: any) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_29al46l',
                'template_lpc48he',
                form.current,
                'user_ZvmIDRZKN0Dpu9EnexPlA'
            )
            .then(
                (result) => {
                    // setToSend({
                    //     from_name: '',
                    //     message: '',
                    //     reply_to: '',
                    // });
                    setChecking(true);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    const handleChange = (e: any) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    const checkingHandler = () => {
        setChecking(false);
    };
    return (
        <section className="contact pt-[8rem]" id="contact">
            <Wrapper class="container">
                <Wrapper class="flex flex-col lgm:flex-row" animation="fade-up">
                    <Wrapper class="left flex-1">
                        <Wrapper
                            class="contact-form flex items-center justify-center flex-col mx-auto"
                            id="contact-form"
                        >
                            <Wrapper class="pb-4 text-center lgm:text-left">
                                <h1 className="text-5xl">Contact me</h1>
                                <hr className="c-line my-4 mx-auto lgm:mx-0"></hr>
                                <p className="text-[1.6rem]">
                                    I’m interested in freelance opportunities – especially ambitious
                                    or large projects. However, if you have other request or
                                    question, don’t hesitate to use the form.
                                </p>
                            </Wrapper>
                            <form
                                className="main-form flex flex-col  mt-4 w-100 pt-8"
                                onSubmit={onSubmit}
                                ref={form}
                            >
                                <Wrapper class="input flex-grow-0 w-100">
                                    <label className="input-label">From</label>

                                    <input
                                        className="input-element"
                                        type="text"
                                        name="from_name"
                                        placeholder="Your name"
                                        value={toSend.from_name}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                </Wrapper>
                                <Wrapper class="input flex-grow-0 w-100">
                                    <label className="input-label">Email</label>

                                    <input
                                        className="input-element"
                                        type="email"
                                        name="reply_to"
                                        placeholder="Your email"
                                        value={toSend.reply_to}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                </Wrapper>
                                <Wrapper class="input flex-grow-0 w-100">
                                    <label className="input-label">Message</label>

                                    <textarea
                                        className="input-element max-h-[13.5rem] min-h-[6.5rem]"
                                        name="message"
                                        placeholder="Your message"
                                        value={toSend.message}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                </Wrapper>
                                <Wrapper class="py-8 lgm:py-4 flex justify-center lgm:justify-start">
                                    <Wrapper class="send-message">
                                        <button
                                            className="btn-send flex items-center  rounded-md"
                                            type="submit"
                                        >
                                            <p className="py-4 px-10 text-[#ffffff]">
                                                Send Message
                                            </p>
                                            <div className="flex items-center justify-center text-white bg-[#7a3b78] h-[42px] w-[40px]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    stroke="currentColor"
                                                    fill="white"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    width={25}
                                                    height={25}
                                                    viewBox="0 0 474 474"
                                                >
                                                    <g>
                                                        <path d="M437.5,59.3h-401C16.4,59.3,0,75.7,0,95.8v282.4c0,20.1,16.4,36.5,36.5,36.5h401c20.1,0,36.5-16.4,36.5-36.5V95.8   C474,75.7,457.6,59.3,437.5,59.3z M432.2,86.3L239.5,251.1L46.8,86.3H432.2z M447,378.2c0,5.2-4.3,9.5-9.5,9.5h-401   c-5.2,0-9.5-4.3-9.5-9.5V104.9l203.7,174.2c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.3,0.2,0.4,0.3c0.3,0.2,0.5,0.4,0.8,0.5   c0.1,0.1,0.2,0.1,0.3,0.2c0.4,0.2,0.8,0.4,1.2,0.6c0.1,0,0.2,0.1,0.3,0.1c0.3,0.1,0.6,0.3,1,0.4c0.1,0,0.3,0.1,0.4,0.1   c0.3,0.1,0.6,0.2,0.9,0.2c0.1,0,0.3,0.1,0.4,0.1c0.3,0.1,0.7,0.1,1,0.2c0.1,0,0.2,0,0.3,0c0.4,0,0.9,0.1,1.3,0.1l0,0l0,0   c0.4,0,0.9,0,1.3-0.1c0.1,0,0.2,0,0.3,0c0.3,0,0.7-0.1,1-0.2c0.1,0,0.3-0.1,0.4-0.1c0.3-0.1,0.6-0.2,0.9-0.2c0.1,0,0.3-0.1,0.4-0.1   c0.3-0.1,0.6-0.2,1-0.4c0.1,0,0.2-0.1,0.3-0.1c0.4-0.2,0.8-0.4,1.2-0.6c0.1-0.1,0.2-0.1,0.3-0.2c0.3-0.2,0.5-0.3,0.8-0.5   c0.1-0.1,0.3-0.2,0.4-0.3c0.1-0.1,0.3-0.2,0.4-0.3L447,109.2V378.2z" />
                                                    </g>
                                                </svg>
                                            </div>
                                        </button>
                                    </Wrapper>
                                </Wrapper>
                            </form>
                        </Wrapper>

                        {checking ? (
                            <Modal show={checking} modalClosed={checkingHandler}>
                                {checking ? (
                                    <Wrapper class="submit-check text-center">
                                        <h1 className="text-3xl">Message Sent Successfully </h1>
                                    </Wrapper>
                                ) : null}
                            </Modal>
                        ) : null}
                    </Wrapper>
                    <Wrapper class="right flex-1">
                        <Wrapper class="c-img">
                            <Image
                                src="/images/send-mail-2.svg"
                                alt="Send Mail SVG"
                                width={720}
                                height={640}
                            />
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <hr className="separator"></hr>
            </Wrapper>
        </section>
    );
};

export default Contact;
