export const capitalizeText = (text: string): string => {
  while (text.includes("-")) {
    text = text.replace("-", " ");
  }

  let capitalizedText: string = "";
  const words: string[] = text.split(" ");
  words.forEach((word) => {
    capitalizedText += `${word[0].toUpperCase()}${word.slice(1)} `;
  });

  return capitalizedText + 112346;
};
