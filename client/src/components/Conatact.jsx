import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_6jpyxvn", "template_ruutrpn", form.current, {
        publicKey: "yO-kEUtOs6WXhBawl",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="grid  grid-cols-1  px-8 py-20 mx-auto rounded-lg   bg-[#1A1E23] text-gray-100"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center pb-10">
          <h1 className="text-5xl p-2 font-normal w-[280px] flex flex-col items-center justify-center gap-2 text-center  font-ubuntu  text-[#12F7D6]">
            Contact <img src="/line.png" alt="" />
          </h1>
          <div className="text-white font-plexMono">
            I’m currently available for work
          </div>
        </div>
        <div className="">
          <h1 className="text-5xl p-2 font-normal capitalize lg:w-[500px] text-center rounded-tl-[40px] rounded-br-[40px] font-ubuntu border-4 border-[#12F7D6] text-[#12F7D6] mb-10">
            Send me a message
          </h1>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <div className="flex gap-6">
          <div className="w-1/2">
            <label htmlFor="name" className="text-sm text-[#12F7D6]">
              Full name *
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              name="from_name"
              className="w-full p-3 outline-none bg-transparent border-b border-white"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="email" className="text-sm mb-3 text-[#12F7D6]">
              Email *
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="user_email"
              className="w-full p-3 outline-none bg-transparent border-b border-white"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-[#12F7D6]">
            Enter Your Message *
          </label>
          <textarea
            name="message"
            rows=""
            className="w-full p-3 outline-none bg-transparent border-b border-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
