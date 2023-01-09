import React, { useEffect } from "react";

const Contact = () => {
  return (
    <div className="block m-auto text-center p-4 bg-gray-900" id="contact">
      <div>
        <h1 className="text-4xl p-3 text-white">Contact Us</h1>
        <iframe
          src="https://whatsform.com/cTVIve"
          width="100%"
          height="600"
          frameBorder="0"
          className="bg-gray-900"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
