import CurrentDate from "./components/CurrentDate";
import Header from "./components/Header";
import List from "./components/List";
import Calculator from "./components/Calculator";
import Card from "./components/Card";

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
          name="Louis"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Louis_Eysen_-_Die_Mutter_des_K%C3%BCnstlers_-_Google_Art_Project.jpg/454px-Louis_Eysen_-_Die_Mutter_des_K%C3%BCnstlers_-_Google_Art_Project.jpg?20110210001623"
          alt="Photo Louis "
          tel="+63 960 504 9151"
          email="louis@mail.com"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />

        <Card
          name="Moses"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Guido_Reni_-_Moses_with_the_Tables_of_the_Law_-_WGA19289.jpg/220px-Guido_Reni_-_Moses_with_the_Tables_of_the_Law_-_WGA19289.jpg"
          alt="Photo Moses: "
          tel="+63 960 504 9151"
          email="moses@mail.com"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
      </div>

      <hr style={{ margin: "30px" }} />
    </div>
  );
}

export default App;
