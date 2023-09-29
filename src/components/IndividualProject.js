import React from "react";

const IndividualProject = (props) => {
  const handleButtonClick1 = (event) => {
    event.preventDefault();
    window.location.href = props.website;
  };
  const handleButtonClick2 = (event) => {
    event.preventDefault();
    window.location.href = props.github;
  };
  return (
    <>
      <div class="text-center w-full">
        <img
          class="rounded-xl group-hover:opacity-10"
          src={props.src}
          alt="broken"
          width="700px"
          height="700px"
          class="m-auto"
        />
        <p class="py-2 text-lg">{props.name}</p>
        {props.button1 && (
          <button
            class="uppercase font-bold px-4 py-2 mx-2 bg-sky-900 rounded text-white"
            onClick={handleButtonClick1}
          >
            {props.button1}
          </button>
        )}
        <button
          class="uppercase font-bold px-4 py-2 mx-2 bg-sky-900 rounded text-white"
          onClick={handleButtonClick2}
        >
          Repo
        </button>
      </div>
    </>
  );
};

export default IndividualProject;
