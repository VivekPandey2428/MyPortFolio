import TextInput from "./TextInput";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLInputElement | null>(null);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const handleSendEmail = () => {
    if (!nameValue || !emailValue || !messageValue) {
      alert("Fields Cannot Be Empty");
      return;
    }
    const formData = {
      "from_name": nameValue,
      "from_email": emailValue,
      message: messageValue
    }
    emailjs.send('service_jjp4o15', 'template_9hx6gxn', formData, 'X8DWkTD_RnujEOamV')
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
        setEmailValue("");
        setNameValue("");
        setMessageValue("");
      }, (error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again later.');
      });

  }

  return (
    <div id="my-contact" className="py-10 px-14 md:px-5">
      <div className=" pb-5 text-white text-4xl">Contact Me</div>
      <div className="text-white text-opacity-60">
        Fill in the form or reach out to me at{" "}
        <span onClick={() => {window.open("mailTo:vivekpandey518392@gmail.com")}} className="text-white cursor-pointer">email</span>
      </div>
      <div
        className="py-5"
        onClick={() => {
          nameRef.current?.focus();
          if (!nameValue) setNameValue("Type your Name here");
        }}
      >
        <div className="text-white">Enter Your Name</div>
        <TextInput
          textAreaRef={nameRef}
          textValue={nameValue}
          setTextValue={setNameValue}
        />
      </div>
      <div
        className="py-5"
        onClick={() => {
          emailRef.current?.focus();
          if (!emailValue) setEmailValue("Type your Email here");
        }}
      >
        <div className="text-white">Enter Your Magical Email</div>
        <TextInput
          textAreaRef={emailRef}
          textValue={emailValue}
          setTextValue={setEmailValue}
        />
      </div>
      <div
        className="py-5"
        onClick={() => {
          messageRef.current?.focus();
          if (!messageValue) setMessageValue("Type your Message here");
        }}
      >
        <div className="text-white">Enter your Message</div>
        <TextInput
          textAreaRef={messageRef}
          textValue={messageValue}
          setTextValue={setMessageValue}
        />
      </div>
      <div onClick={handleSendEmail} className="text-white flex items-center cursor-pointer text-xl justify-end">
        Send <span className="material-icons-outlined">chevron_right</span>
      </div>
    </div>
  );
};

export default ContactMe;
