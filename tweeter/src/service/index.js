export const checkPostsIntoObj = arr => {
  const arrNew = arr.filter( el => {
    if(el !== null && typeof el === 'object' && Object.prototype.toString.call(el) === '[object Object]') {
      return el
    }
  });
  return arrNew
}