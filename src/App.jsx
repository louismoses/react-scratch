import CurrentDate from "./components/CurrentDate";
import Header from "./components/Header";
import List from "./components/List";
import Calculator from "./components/Calculator";
import Card from "./components/Card";
import EmojiCard from "./components/EmojiCard";

import contacts from "./contacts";
import emote from "./emojipedia";

function App() {
  return (
    <div>
      <div className="text-center">
        <hr style={{ margin: "30px" }} />
        <Header heading="Moses React Scratch" />
        <hr style={{ margin: "30px" }} />

        <CurrentDate />
        <hr style={{ margin: "30px" }} />

        <div className="card-container">
          <List />
          <List />
        </div>
        <hr style={{ margin: "30px" }} />

        <Header heading="Calculator" />

        <Calculator />
        <hr style={{ margin: "30px" }} />
      </div>

      <div className="card-container">
        {contacts.map((contact) => (
          <Card
            name={contact.name}
            alt={contact.alt}
            img={contact.img}
            email={contact.email}
            tel={contact.tel}
            text={contact.text}
            key={contact.id}
          />
        ))}
      </div>

      <hr style={{ margin: "30px" }} />
      <div className="text-center">
        <Header heading="Emojipedia" />
      </div>
      <div className="card-container">
        {emote.map((emoji) => (
          <EmojiCard
            key={emoji.id}
            name={emoji.emojiName}
            text={emoji.emojiDetail}
            emoji={emoji.emojiIcon}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
