import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { fadeLeft, fadeRight } from "../helpers";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

// Contact component responsible for displaying a contact form and handling email sending.
export const Contact = () => {
  const form = useRef();
  const [recaptchaValue, setRecaptchaValue] = useState(null); // New state for reCAPTCHA

  /*
   * Function to handle form submission and send email using emailjs.
   * @param {Event} e The form submission event.
   */
  const sendEmail = (e) => {
    e.preventDefault();

    // Extract form data
    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const message = formData.get("message");

    // Validate form fields
    if (!userName || !userEmail || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Check reCAPTCHA
    if (!recaptchaValue) {
      toast.error("Please verify the reCAPTCHA.");
      return;
    }

    // Send email using emailjs
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value); // Set the reCAPTCHA token
  };

  return (
    <>
      <section className="overflow-hidden" id="contact">
        
        <div className="bg-slate-white">
          <div className="container mx-auto grid grid-cols-2 gap-10 overflow-hidden px-2 py-32 sm:gap-5 sm:px-4">
            <motion.div
              className="col-span-2 sm:col-span-1"
              initial="initial"
              whileInView="animate"
              variants={fadeRight}
              viewport={{
                once: true,
              }}
            >
              <h1 className="mb-5 text-2xl font-bold uppercase">
                Schreib mir eine Nachricht
              </h1>
              <ul className="font-medium">
                <li className="mb-4">
                  <p>Johannes Wolf</p>
                </li>
                <li className="mb-4">
                  <a href="tel:#">+49 1743338839</a>
                </li>
                <li className="mb-4">
                  <a href="maito:#">info@wavewolf.de</a>
                </li>
              </ul>
              <a className="mr-4 inline-block hover:animate-zoom" href="https://de.linkedin.com/in/johannes-wolf-3b5702203">
                <BsLinkedin className="text-3xl" />
              </a>
            </motion.div>
            <motion.div
              className="col-span-2 sm:col-span-1"
              initial="initial"
              whileInView="animate"
              variants={fadeLeft}
              viewport={{
                once: true,
              }}
            >
              <form ref={form} onSubmit={sendEmail}>
                <label className="mb-5 flex flex-col gap-3">
                  <span className="text-sm font-bold uppercase">
                    Dein Name
                  </span>
                  <input
                    type="text"
                    placeholder="Vorname Nachname"
                    className="rounded-md border-2 border-slate-300 p-2 text-sm outline-none transition-all duration-300 focus:border-primary-500 focus:ring-0"
                    name="user_name"
                  />
                </label>
                <label className="mb-5 flex flex-col gap-3">
                  <span className="text-sm font-bold uppercase">
                    Deine EMail Adresse
                  </span>
                  <input
                    type="text"
                    placeholder="yourmail@example.com"
                    className="rounded-md border-2 border-slate-300 p-2 text-sm outline-none transition-all duration-300 focus:border-primary-500 focus:ring-0"
                    name="user_email"
                  />
                </label>
                <label className="mb-5 flex flex-col gap-3">
                  <span className="text-sm font-bold uppercase">
                    Betreff
                  </span>
                  <textarea
                    rows="1"
                    placeholder="Betreff"
                    className="resize-none overflow-y-auto rounded-md border-2 border-slate-300 p-2 text-sm outline-none transition-all duration-300 focus:border-primary-500 focus:ring-0"
                    name="topic"
                  ></textarea>
                </label>
                <label className="mb-5 flex flex-col gap-3">
                  <span className="text-sm font-bold uppercase">
                    Deine Nachricht
                  </span>
                  <textarea
                    rows="5"
                    placeholder="Schreibe deine Nachricht hier"
                    className="resize-none overflow-y-auto rounded-md border-2 border-slate-300 p-2 text-sm outline-none transition-all duration-300 focus:border-primary-500 focus:ring-0"
                    name="message"
                  ></textarea>
                </label>
                 {/* reCAPTCHA Component */}
                 <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your reCAPTCHA site key
                  onChange={handleRecaptchaChange}
                />
                 <br></br>
                <button
                  type="submit"
                  className="rounded-full bg-primary-500 px-3 py-2 text-white shadow-[inset_0px_-4px_2px_rgb(0_0_0_/_25%)] hover:animate-zoom"
                >
                  Senden
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
