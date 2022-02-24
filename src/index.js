
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr=[];
  let i=true;
  for (const key in matrix) {
    if(i)
      arr=arr.concat(matrix[key]);
    else
      arr=arr.concat(matrix[key].reverse());
    i=!i;
  }
  return arr;
}
