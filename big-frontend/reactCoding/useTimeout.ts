// Create a hook to easily use setTimeout(callback, delay).

// reset the timer if delay changes
// DO NOT reset the timer if only callback changes

import { useEffect, useRef } from "react";
export function useTimeout(callback: () => void, delay: number) {
  // your code here
  const callbackRef = useRef(callback)
  callbackRef.current = callback
  useEffect(() => {
    let timeout = setTimeout(() => callbackRef.current(), delay)
    return () => clearTimeout(timeout)
  }, [delay])
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }




