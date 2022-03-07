import React from "react";

import bg from "../assets/footer-bg.jpg";

const PageHeader = (props) => {
  return (
    <div
      className="page-header bg-no-repeat bg-cover bg-top relative mb-4 text-center px-3 py-1 h-52"
      style={{
        backgroundImage: `linear-gradient(
        rgba(8, 27, 39, 0.6), 
        rgba(8, 27, 39, 1)
      ), url(${bg})`,
      }}
    >
      <h2 className="text-white flex items-center justify-center h-full w-full text-3xl font-semibold">
        {props.children}
      </h2>
    </div>
  );
};

export default PageHeader;
