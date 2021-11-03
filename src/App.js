import "./App.css";
import PizzaList from "./components/PizzaList";
import AddPizzaForm from "./components/AddPizzaForm";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      {/* <img
          src="https://static.toiimg.com/photo/85647758.cms"
          className=""
          alt="logo"
        /> */}
    </div>
  );
}

export default App;
