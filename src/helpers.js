
const maxWidthTextSize = (width, text) => {
  if (!text)
    return null
  // riskFactor = 1 should be safe for all characters
  const riskFactor = 1.8;
  const pxSize = riskFactor*width/text.length;
  const roundDown = [6,8,10,12,15,18,23,28,32,40]
    .reverse()
    .find( el=> el<=pxSize );
  return roundDown || null
}

export { maxWidthTextSize };
