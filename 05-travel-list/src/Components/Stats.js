export function Stats({ items }) {
  if (items.length === 0)
    return (
      <footer className="stats">
        Start adding items to your packing list!
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "Everything is packed & ready to go!"
          : `You have ${numItems} items on your list, and you already packed
      ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
