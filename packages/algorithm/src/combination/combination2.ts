const combination2 = (arr: number[], k: number): number[][] => {
  if (k === 1) {
    return arr.map((comboOption) => [comboOption]);
  }

  const res: number[][] = [];

  arr.forEach((currentOption, index) => {
    const smallerCombos = combination2(
      arr.slice(index + 1),
      k - 1,
    );

    smallerCombos.forEach((smallerCombo) => {
      res.push([currentOption].concat(smallerCombo));
    });
  });

  return res;
}

export default combination2
