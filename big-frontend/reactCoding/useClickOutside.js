// This is a React coding question from BFE.dev

import React, { useRef, useEffect } from "react";

export function useClickOutside(callback) {
  let ref = useRef(null);

  useEffect(() => {
    const click = ({ target }) => {
      if (target && ref.current && !ref.current?.contains(target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", click);

    return () => {
      document.removeEventListener("mousedown", click);
    };
  }, []);

  return ref;
  // your code here
}

// to try your code on the right panel
// export App() component like below

// export function App() {
//   return <div>your app</div>
// }
