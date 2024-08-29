import { EmptyCartImg } from "../Assets";
import { toast } from "react-toastify";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const submitForm = (e: any) => {
    e.preventDefault();
    return toast.info(`${name} Form handling is not implemented yet`, {
      position: "top-left",
      autoClose: 3000,
      toastId: "form",
    });
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 bg-primary">
      <img src={EmptyCartImg} alt="not found" className="w-[30%] h-[30%]" />
      <form
        action="#"
        className="flex flex-col justify-center w-full mb-6 itemx-center gap-y-3"
      >
        <div className="mb-6">
          <input
            type="text"
            className="block w-full px-4 py-2 m-0 text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="block w-full px-4 py-2 m-0 text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="block w-full px-4 py-2 m-0 text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <textarea
            className="form-control block w-full min-h-[25vh] px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-purple-600 hover:bg-purple-700 w-full focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 block"
          onClick={submitForm}
        >
          Send Message
        </button>
      </form>
      <p className="mb-2 text-sm text-gray-500 cursor-pointer dark:text-gray-400">
        <a href="mailto:bentilshadrack72@gmail.com" className="hover:underline">
          bentilshadrack72@gmail.com
        </a>
      </p>
      <p className="text-sm text-gray-500 cursor-pointer dark:text-gray-400">
        <a href="tel:+233556844331" className="hover:underline">
          +233 55 684 4331
        </a>
      </p>
    </div>
  );
};

export default Form;
