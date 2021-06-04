function rgb(r, g, b){
   return `${hexCodeMaker(r) + hexCodeMaker(g) + hexCodeMaker(b)}`
}

function hexCodeMaker(c){
  if(c < 0) c = 0;
  if(c > 255) c = 255;
  let hex = parseInt(c).toString(16);
  hex = hex.length === 1 ? "0" + hex : hex;
  return hex.toUpperCase()
}