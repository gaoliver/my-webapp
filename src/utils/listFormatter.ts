function handleList(list: Array<string>) {
  return list.map((word) => {
    if (word === list[list.length - 1]) {
      return `and ${word}.`;
    } else {
      return `${word}, `;
    }
  });
}

export default handleList;
