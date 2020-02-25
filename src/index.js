
exports.min = function min (array) {
  if(!array || array.length===0) return 0;
  return array.reduce((p, el)=>p= el<p? el: p, array[0])
}

exports.max = function max (array) {
  if(!array || array.length===0) return 0;
  return array.reduce((p, el)=>p= el>p? el: p, array[0])
}

exports.avg = function avg (array) {
  if(!array || array.length===0) return 0;
  const summ= array.reduce((p, el)=> p += el, 0);
  return summ/array.length;
}
