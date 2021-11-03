export const selectNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.Allpizzas.lenght;
};

export const selectMostBoughtPizza = (reduxState) => {
  if (reduxState.pizzas.Allpizzas.lenght === 0) {
    return null;
  }
  return reduxState.pizzas.allPizzas.reduce((mostBought, nextPizza) => {
    return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
  });
};
export const selectPizza = (reduxState) => reduxState.pizzas.allPizzas;

export const showPizzas = (reduxState) => reduxState.pizzas.allPizzas;
