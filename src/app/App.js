import {useState, useEffect} from 'react'
import ConvertService from '../service/ConvertService';

import './App.css';

const App = (props) => {
  const [data, setData] = useState([]);
  const [result, setResult] = useState('');
  const [userValue, setUserValue] = useState();
  
  const btns = [
    {name: "EUR" , icon: "€"},
    {name: "JPY", icon: "¥"},
    {name: "USD", icon: "$"},
    {name: "BYN", icon: "Br"}
  ]
  
    useEffect(() => {
      ConvertService()
      .then(res =>JSON.parse(res))
      .then(data => setData(data))
    },[])
  
  const convertValue = (currency,i) => {
        const res = (userValue / data.Valute[currency].Value).toFixed(1);
        if(isNaN(res) || res < 0) {
          setResult(0)
        } else {
          setResult(res + btns[i].icon);
        }
  }
  
  const onInputValue = (e) => {
    setUserValue(e.target.value);
  }

  const resetValue = () => {
    setResult(result => null)
  }
  
      return (
      <div class="app">
          <input className="valueInput" type="number"  onChange={onInputValue} placeholder="Введите сумму"/>
        <div className="result">{result}</div>
        <div className="controls">
          {btns.map(({name}, i) => {
            return (
              <button  onClick={() => convertValue(name,i)} >{name}</button>
            )
          })}
          <button className="reset" onClick={resetValue}>Сбросить</button>
        </div>
      </div>
    )
}


export default App; 

