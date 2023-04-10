// import { useEffect, DependencyList } from "react";

// export function useDebounceEffect(
//   fn: () => void,
//   waitTime: number,
//   deps?: DependencyList
// ) {
//   useEffect(() => {
//     const t = setTimeout(() => {
//       fn.apply(undefined, deps);
//     }, waitTime);

//     return () => {
//       clearTimeout(t);
//     };
//   }, deps);
// }
import React from "react";

const useDebounceEffect = () => {
  return <div>useDebounceEffect</div>;
};

export default useDebounceEffect;
