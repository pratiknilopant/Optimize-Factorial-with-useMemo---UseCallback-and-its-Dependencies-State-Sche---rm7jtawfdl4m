// import React, { useMemo } from 'react';

// function factorial(n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// }

// export default function FactorialComponent({ number }) {

//   const factorialResult = useMemo(() => factorial(number), [number]);
//   return <div className='result'>The factorial of {number} is {factorialResult}</div>;
// }


import { useMemo } from "react";
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export default function FactorialComponent({value}) {

  const memoResult = useMemo(()=>{
    return factorial(value);
  },[value])
  return <div className='result'>The factorial of {value} is {memoResult}</div>;
}