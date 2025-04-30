import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };
  return (
    <section className="Contact py-14 md:py-28">
      <div className="container">
        <div className="max-w-[556px] px-4 py-10 mx-auto  flex flex-col ">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex flex-col justify-start items-start gap-6">
              <h1 className="text-2xl md:text-4xl font-bold mx-auto pb-5">
                Contact Me
              </h1>
              <form action={handleFormSubmit} className="flex flex-col gap-5">
                <div className="w-full">
                  <label className="  text-white   ">Name*</label>
                  <input
                    placeholder="Name"
                    type="text"
                    name="username"
                    required
                    className="mt-2 w-full px-5 py-2 bg-white rounded-xl outline outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal "
                  />
                </div>
                <div className="w-full">
                  <label className=" text-white">Email*</label>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full px-5 py-2 bg-white rounded-xl outline outline-offset-[-1px] outline-black  overflow-hidden  text-[#898989] text-lg font-normal "
                  />
                </div>
                <div className="w-full">
                  <label className=" text-white ">Message*</label>
                  <textarea
                    className="mt-2 w-full resize-none px-5 py-2 bg-white rounded-xl outline-none  overflow-hidden  text-[#898989] text-lg font-normal "
                    placeholder="Message"
                    name="message"
                    cols="40"
                    rows="10"
                  ></textarea>
                </div>
                <button className="hover-1">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
