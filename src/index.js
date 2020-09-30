module.exports = function reverse (n) {
    n+='';
    n=n.split('');
    if(n.includes('-')) n=n.slice(1);
  return n.reverse().join('');
}
