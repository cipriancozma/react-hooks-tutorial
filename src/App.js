import { useEffect, useState, useRef } from 'react';
import './App.css';
import { useFetch } from './useFetch';
import { useForm } from './useForm';

function App() {

    const [values, handleChange] = useForm({email: "", password: "", firstName: ""})

    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")));

   const {data} =  useFetch(`http://numbersapi.com/${count}/trivia`);

   const inputRef = useRef();

   useEffect(() => {
       localStorage.setItem("count", JSON.stringify(count))
   }, [count]);

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
    </div>
  );
}

export default App;
