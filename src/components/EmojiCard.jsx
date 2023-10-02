import React from "react";
import Detail from "./Detail";
import Emoji from "./Emoji";

const EmojiCard = (props) => {
  return (
    <div>
      <Emoji emoji={props.emoji} />
      <Detail name={props.name} text={props.text} />
    </div>
  );
};

export default EmojiCard;
