import React from "react";

interface Props {
  Icon: any;
  title: string;
}

const ServiceCircle: React.FC<Props> = ({ Icon, title }) => {
  return (
    <>
      <div className="w-32 border">
        <div className="w-28 grid group place-content-center rounded-full relative  bg-green-500 h-28 ">
          <Icon className="text-5xl text-neutral-100 " />
          <div className="inset-0 group-hover:opacity-100 duration-150 transition-opacity ease-linear opacity-0 absolute border-4 m-1 border-neutral-300 rounded-full " />
        </div>
        <h3 className="text-center  font-medium mt-2">{title}</h3>
      </div>
    </>
  );
};

export default ServiceCircle;
