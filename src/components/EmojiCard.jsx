import React from "react";
import Detail from "./Detail";
import Emoji from "./Emoji";

const EmojiCard = (props) => {
  return (
    <div
      style={{
        border: "solid 1px red",
        borderRadius: "8px",
        padding: "8px",
        margin: "8px",
      }}
    >
      <Emoji emoji={props.emoji} />
      <Detail name={props.name} text={props.text} />
    </div>
  );
};

export default EmojiCard;
