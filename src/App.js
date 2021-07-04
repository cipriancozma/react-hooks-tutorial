import './App.css';
import { useForm } from './useForm';

function App() {

    const [values, handleChange] = useForm({email: "", password: ""})

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
