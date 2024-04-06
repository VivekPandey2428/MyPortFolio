import TextInput from "./TextInput";
import {useRef, useState} from "react";

const ContactMe = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLInputElement | null>(null);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  return (
    <div className="py-10">
      <div className=" pb-5 text-white text-4xl">Contact Me</div>
      <div className="text-white text-opacity-60">
        Fill in the form or reach out to me at{" "}
        <span className="text-white cursor-pointer">email</span>
      </div>
      <div className="py-5" onClick={() => nameRef.current?.focus()}>
        <div className="text-white">Enter Your Name</div>
      <TextInput textAreaRef={nameRef} textValue={nameValue} setTextValue={setNameValue}/>
      </div>
      <div className="py-5" onClick={() => emailRef.current?.focus()}>
        <div className="text-white">Enter Your Magical Email</div>
      <TextInput textAreaRef={emailRef} textValue={emailValue} setTextValue={setEmailValue}/>
      </div>
      <div className="py-5" onClick={() => messageRef.current?.focus()}>
        <div className="text-white">Enter your Message</div>
      <TextInput textAreaRef={messageRef} textValue={messageValue} setTextValue={setMessageValue}/>
      </div>
      <div className="text-white flex items-center cursor-pointer text-xl justify-end">Send <span className="material-icons-outlined">chevron_right</span></div>
    </div>
  );
};

export default ContactMe;
