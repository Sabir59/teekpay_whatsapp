function stringTruncateHandler(text2BTruncate: string, numberOfChars: number) {
  let returnedText = '';
  returnedText =
    text2BTruncate.length > numberOfChars ? text2BTruncate.slice(0, numberOfChars) + '...' : text2BTruncate;
  return returnedText;
}

export default stringTruncateHandler;
