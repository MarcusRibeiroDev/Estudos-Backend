const sum = (...args) => {
  return args.reduce((acc, current) => acc + current, 0);
};

console.log(sum(1, 5, 6, 7, 8));
