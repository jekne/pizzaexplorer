// export const selectNumberOfPizzas = (reduxState) => {
//   return reduxState.pizzas.Allpizzas.length;
// };

// export const selectMostBoughtPizza = (reduxState) => {
//   if (reduxState.pizzas.Allpizzas.length === 0) {
//     return null;
//   }
//   return reduxState.pizzas.allPizzas.reduce((mostBought, nextPizza) => {
//     return mostBought.bought >= nextPizza.bought ? mostBought : nextPizza;
//   });
// };
export const selectPizzas = (reduxState) => {
  const clonedPizzas = [...reduxState.pizzas.allPizzas];

  return clonedPizzas.sort((a, b) => {
    return b.bought - a.bought;
  });
};
