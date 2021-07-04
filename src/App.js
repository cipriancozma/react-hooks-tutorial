import { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';
import './App.css';
import { Hello } from './Hello';
import { useFetch } from './useFetch';
import { useForm } from './useForm';

function App() {

    const [values, handleChange] = useForm({email: "", password: "", firstName: ""})

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));
    const [count2, setCount2] = useState(0);

   const {data} =  useFetch(`http://numbersapi.com/${count}/trivia`);

   const inputRef = useRef();
   const rectRef = useRef();

   useEffect(() => {
       localStorage.setItem("count", JSON.stringify(count))
   }, [count]);


   useLayoutEffect(() => {
     console.log(rectRef.current.getBoundingClientRect());
     
   }, [])

   const increment = useCallback(() => {
        setCount2(count2 + 1);
   }, [count2, setCount2])

  return (
    <div className="App">
    {!data ? "loading..." : data}
    <div>{count}</div>

    <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    <input 
        name="first name"
        value={values.firstName}
        onChange={handleChange}
        placeholder="first name"
        ref={inputRef}
     />
     <input
        ref={rectRef}
        name="email"
        value={values.email}
        onChange={handleChange}
     />
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
     />
     <button onClick={() => inputRef.current.focus()}>Focus</button>
     <Hello increment={increment} />
     {count2}
    </div>
  );
}

export default App;
