const sumItems = (array) => {
  let sum = 0;

  for (let element of array) {
    if (Array.isArray(element)) {
      element = sumItems(element);
    }
    sum += element;
  }

  return sum;
};

module.exports = sumItems;