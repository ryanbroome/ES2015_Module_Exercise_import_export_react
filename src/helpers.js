// Helper array functions

// Return a random item from items array
function choice(items) {
  // generate random number between 0 - number of items
  let r = Math.floor(Math.random() * items.length);
  // return random item from items
  return items[r];
}

// remove first matching item from items, if item exists and returns it. Otherwise returns undefined
function remove(items, item) {
  // see if item is in items
  const found = items.find((i) => i === item);
  // if so get the index and splice it out
  if (found) {
    let idx = items.findIndex((i) => i === item);
    items.splice(idx, 1);
  }
  //   return the item or undefined if not found
  return found;
}
// export my named functions for repeat usage
export { choice, remove };
