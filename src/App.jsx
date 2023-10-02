import CurrentDate from "./components/CurrentDate";
import Header from "./components/Header";
import List from "./components/List";
import Calculator from "./components/Calculator";
import Card from "./components/Card";

import contacts from "./contacts";

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
        <Card
          name={contacts[0].name}
          img={contacts[0].img}
          alt={contacts[0].alt}
          tel={contacts[0].tel}
          email={contacts[0].email}
          text={contacts[0].text}
        />
        <Card
          name={contacts[1].name}
          img={contacts[1].img}
          alt={contacts[1].alt}
          tel={contacts[1].tel}
          email={contacts[1].email}
          text={contacts[1].text}
        />
        <Card
          name={contacts[2].name}
          img={contacts[2].img}
          alt={contacts[2].alt}
          tel={contacts[2].tel}
          email={contacts[2].email}
          text={contacts[2].text}
        />
      </div>

      <hr style={{ margin: "30px" }} />
    </div>
  );
}

export default App;
