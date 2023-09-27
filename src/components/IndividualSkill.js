import React from "react";

const IndividualSkill = (props) => {
  return (
    <>
      <div className="p-4 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-blue-50">
        <img src={props.src} alt={props.name} className="m-auto h-10 w-10 mb-2" />
        <p>{props.name}</p>
      </div>
    </>
  );
};

export default IndividualSkill;
