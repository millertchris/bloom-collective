import { useEffect, useRef } from "react";
import Rellax from "rellax";

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};


export const RellaxIt = () => {
 useEffect(() => {
   var rellax = new Rellax('.rellax');
 })};
