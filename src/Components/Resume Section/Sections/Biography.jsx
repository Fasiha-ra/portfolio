import React from "react";

const Biography = () => {
  return (
    <div className="w-full h-full lg:flex-row flex-col flex lg:items-center justify-center py-5 lg:py-0 lg:gap-20">
      <div className="lg:w-1/2 text-white">
        <div className="flex items-center justify-between border-b-[1px] border-white border-opacity-20 my-2 pb-2">
          <h3 className="font-bold text-lg">Name</h3>
          <p className="opacity-80">Fasiha</p>
        </div>{" "}
        <div className="flex items-center justify-between border-b-[1px] border-white border-opacity-20 pb-2 my-2">
          <h3 className="font-bold text-lg">Email</h3>
          <p className="opacity-80">fasiharehmatali@gmail.com</p>
        </div>{" "}
        <div className="flex items-center justify-between border-b-[1px] border-white border-opacity-20 pb-2">
          <h3 className="font-bold text-lg">Linkedin</h3>
          <p className="opacity-80">linkedin.com/in/fasiha-rehmat-ali-715037279</p>
        </div>
      </div>
      <div className="lg:w-1/2 text-white">
        <div className="flex items-center justify-between border-b-[1px] border-white border-opacity-20 pb-2 my-2">
          <h3 className="font-bold text-lg">Adress</h3>
          <p className="opacity-80">Lahore</p>
        </div>{" "}
        <div className="flex items-center justify-between border-b-[1px] border-white border-opacity-20 pb-2 my-2">
          <h3 className="font-bold text-lg">Phone</h3>
          <p className="opacity-80">+92 3237867490</p>
        </div>{" "}
        <div className="flex items-center justify-between pb-2">
          <h3 className="font-bold text-lg">Freelance</h3>
          <p className="opacity-80">Available</p>
        </div>
      </div>
    </div>
  );
};

export default Biography;
