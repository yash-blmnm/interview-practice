
import React, {EffectCallback, DependencyList, useRef, useEffect} from 'react';

export function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  // your code here
  let isFirstRender = useRef(true);
  useEffect(() => {
    if(!isFirstRender.current) {
      return effect()
    }else {
      isFirstRender.current = false;
    }
  }, deps)
}


// to try your code on the right panel
// export App() component like below

// export function App() {
//   ...
//   return <div>BFE.dev</div>
// }





