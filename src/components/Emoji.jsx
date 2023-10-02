import React from "react";

const Emoji = (props) => {
  return (
    <div>
      <h5 className="mb-2 text-4xl font-semibold tracking-tight text-gray-900  text-center ">
        {props.emoji}
      </h5>
    </div>
  );
};

export default Emoji;
