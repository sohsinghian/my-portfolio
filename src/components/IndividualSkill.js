import React from "react";

const IndividualSkill = (props) => {
  return (
    <>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-blue-50">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <img
            src={props.src}
            alt={props.name}
            width="42px"
            height="42px"
            className="m-auto"
          />
          <p className="flex flex-col items-center justify-center">
            {props.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default IndividualSkill;
