import {useReducer} from "react"
export function useToggle(on: boolean): [boolean, () => void] {
  // your code here
  const [state, setState] = useReducer((state) => !state, on)
  return [state, setState]
}


// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }








