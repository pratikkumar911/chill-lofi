import React from "react";

import sounds from "../components/sounds";

import Header from "../components/Header";
import Main from "../components/Main";

const index = () => {
  return (
    <div className="grained-bg h-full w-full min-h-screen text-[#111]">
      <Header />
      <div className="w-full flex justify-center mt-[60px]">
        <div className="p-3 w-full lg:w-[80%] xl:w-[80%] md:w-[80%]">
          <Main sounds={sounds} />
        </div>
      </div>
    </div>
  );
};

export default index;
