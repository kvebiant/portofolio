import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoIosPaperPlane } from "react-icons/io";
import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import AlertButton from "../Assets/AlertsAssets/AlertButton";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(0);
  const [contactData, setContactData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const API = {
    service: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
    template: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
    user: process.env.NEXT_PUBLIC_EMAIL_USER_ID as string,
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setContactData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onCloseAlert = () => {
    setShowAlert(0);
  };

  const onsubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (
      contactData.from_name.trim() !== "" &&
      contactData.from_email.trim() !== "" &&
      contactData.message.trim() !== ""
    ) {
      if (contactData.from_email.includes("@" && ".")) {
        setLoading(true);
        emailjs
          .sendForm(
            API.service,
            API.template,
            e.target as HTMLFormElement,
            API.user
          )
          .then(
            //If Message is successful
            () => {
              setShowAlert(4);
              setTimeout(onCloseAlert, 4000);
            },
            //If some Error occured
            () => {
              setShowAlert(1);
              setTimeout(onCloseAlert, 4000);
            }
          )
          .finally(() => setLoading(false))
          .then(() => {
            (contactData.from_name = ""),
              (contactData.from_email = ""),
              (contactData.message = "");
          });
      } else {
        //If email is not true
        setShowAlert(3);
        setTimeout(onCloseAlert, 4000);
      }
    } else {
      //If some box has no value
      setShowAlert(2);
      setTimeout(onCloseAlert, 4000);
    }
  };

  return (
    <section
      id="Contact"
      className=" w-full min-h-[92vh] h-full bg-teal-600 text-white flex-grow justify-center items-center"
    >
      {showAlert === 1 ? (
        <AlertButton
          bgcolor="bg-red-200 "
          textcolor="text-red-500"
          icon={<RiErrorWarningFill />}
          message="An error occurred, Please try again later or please contact the developers."
          onClick={onCloseAlert}
        />
      ) : showAlert === 2 ? (
        <AlertButton
          bgcolor="bg-yellow-200 "
          textcolor="text-yellow-500"
          icon={<BsExclamationTriangleFill />}
          message="Some fields must not empty."
          onClick={onCloseAlert}
        />
      ) : showAlert === 3 ? (
        <AlertButton
          bgcolor="bg-yellow-200 "
          textcolor="text-yellow-500 "
          icon={<BsExclamationTriangleFill />}
          message="Please enter a valid email address."
          onClick={onCloseAlert}
        />
      ) : showAlert === 4 ? (
        <AlertButton
          bgcolor="bg-green-200 "
          textcolor="text-green-500 "
          icon={<IoIosPaperPlane />}
          message="Message sent successfully. Thank you for contacting."
          onClick={onCloseAlert}
        />
      ) : null}
      <div className="max-w-[1240px] text-center mx-auto p-2 flex flex-col justify-center">
        <div className="text-xl tracking-widest text-white">
          <p className="text-white/80 text-sm pt-2">Get In Touch</p>
          <h2 className="py-4">Contact Me</h2>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-black/20 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={onsubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="from_name"
                      onChange={onChange}
                      value={contactData.from_name}
                      placeholder="Please Enter your Name"
                      className="border-2 placeholder:text-lg text-black rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="from_email"
                      placeholder="Please Enter your Email Address"
                      onChange={onChange}
                      value={contactData.from_email}
                      className="border-2 placeholder:text-lg text-black rounded-lg p-3 flex border-gray-300"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    name="message"
                    onChange={onChange}
                    value={contactData.message}
                    placeholder="Please Enter your Message"
                    className="border-2 placeholder:text-xl rounded-lg p-3 flex border-gray-300 text-black"
                    rows={10}
                  />
                </div>
                <button
                  type="submit"
                  value="send"
                  className="w-full p-4 hover:scale-105 bg-black/20 text-gray-100 mt-4 shadow-black/20 ease-in duration-300"
                >
                  {loading ? "loading ..." : "Send message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-6 pr-6 my-2 md:my-10">
          <a href={process.env.NEXT_PUBLIC_PORT as string + '/#'}>
            <div className="rounded-full shadow-lg bg-black/40 shadow-black/20 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className=" text-gray-300" size={20} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
