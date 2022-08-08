export const str2rgb = (strColor: string) => {
  if (strColor.substring(0, 1) !== "#") {
    throw new Error("Invalid color format. It must be like #RRGGBB");
  }

  const r = parseInt(strColor.substring(1, 3), 16);
  const g = parseInt(strColor.substring(3, 5), 16);
  const b = parseInt(strColor.substring(5, 7), 16);

  return [r, g, b];
};

export const getBlackOrWhite = (bgColor: string) => {
  let [r, g, b] = str2rgb(bgColor);

  let color =
    0.2126 * Math.pow(r / 255, 2.2) +
    0.7152 * Math.pow(g / 255, 2.2) +
    0.0722 * Math.pow(b / 255, 2.2);

  if (color < 0.5) {
    return "#FFF";
  } else {
    return "#000";
  }
};
