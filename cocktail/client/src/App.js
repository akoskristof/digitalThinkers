import './App.css';
import Random from './request/random.js';
import {
  Routes,
  Route,
  useNavigate 
} from "react-router-dom";
import { useState } from 'react';

export default function App() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div>
      <button onClick={()=>nav("cocktail")}>
        Another random cocktail
      </button>
      <input
        onChange={evt => setInputValue(evt.target.value)}
        type="text"
        id="header-search"
        placeholder="Search cocktails"
        name="s" 
      />
      <button onClick={() =>nav("cocktail?name="+inputValue) } type="submit">Search</button>
      <Routes>
        <Route path={'cocktail?name='+inputValue} element={<Random/>} />
        <Route path='cocktail' element={<Random/>} />
      </Routes>
    </div>
  );

  function refreshPage(){
    window.location.reload();
  }

  function nav(to){
    navigate(to);
    refreshPage();
  }

}
