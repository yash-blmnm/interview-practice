
// This is a React problem from BFE.dev

import React, { useMemo, useReducer, useCallback } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void,
  removeByIndex: (index: number) => void
}

const reducer = (state: T[], action:{type:string, value:T|number}) => {
  switch (action.type) {
    case 'push' : {
      return [...state, action.value];
      break;
    }
    case 'removeByIndex' : {
      let index = action.value;
      return [...state.slice(0, index), ...state.slice(index+1)];
      break;
    }
  }
}

export function useArray<T>(initialValue: T[]): { value: T[] } & UseArrayActions<T> {
  // const [arr, setArr] = useState<T[]>(initialValue);
  // const push = (value: T) => {
  //   setArr([...arr, value]);
  // }
  // const removeByIndex = (index: number) => {
  //   console.log(index)
  //   console.log([...arr.slice(0, index), ...arr.slice(index+2)])
  //   setArr([...arr.slice(0, index), ...arr.slice(index+2)])
  // }
  const [state, dispatch] = useReducer(reducer, initialValue);
  const push = useCallback((item: T) => {
    dispatch({type: 'push', value: item})
  }, [])
  const removeByIndex = useCallback((index: number) => {
    dispatch({type: 'removeByIndex', value: index})
  }, [])
  return useMemo(() => ({value: state, push, removeByIndex}),[state, push, removeByIndex])
}


// if you want to try your code on the right panel
// remember to export App() component like below
// export function App() {
//   const { value, push, removeByIndex } = useArray([1, 2, 3])
//   return <div>
//     {value}
//   </div>
// }



