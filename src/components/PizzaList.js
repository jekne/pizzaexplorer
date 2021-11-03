// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
// import { selectMostBoughtPizza } from "../store/pizzas/selectors";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);
  // const most = useSelector(selectMostBoughtPizza);
  // console.log("this is the most", most);

  console.log("this is my pizzas", pizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p>
        Ther are {""} Total number of Know Pizzas:
        <strong>{pizzas.length}</strong>
      </p>
      <p>The list of pizzas</p>
      <ul>
        {pizzas.map((pi) => (
          <li key={pi.id}>
            <strong>{pi.name}</strong>
            <p> {pi.description}</p>
            <img src={pi.image} />
            <p>{pi.bought}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
