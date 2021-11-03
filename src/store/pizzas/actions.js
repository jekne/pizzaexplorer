export const addPizza = ({ name, description }) => ({
  type: "add/pizza",
  payload: { name, description, id: Math.random() },
});
