export function cutString( str:string, size:number ) {
  if (str.length > size) {
    let newStr = str.substring(0, size) + "...";
    return newStr;
  } else {
    return str;
  }
}
