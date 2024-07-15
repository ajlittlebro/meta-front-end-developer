function DessertsList({ data }) {
  const filteredDesserts = data.filter((dessert) => dessert.calories < 500);

  const sortedDesserts = filteredDesserts.sort(
    (a, b) => a.calories - b.calories
  );

  const dessertsList = sortedDesserts.map((dessert) => (
    <li key={dessert.name}>
      {dessert.name} - {dessert.calories} cal
    </li>
  ));

  return <ul>{dessertsList}</ul>;
}

export default DessertsList;
