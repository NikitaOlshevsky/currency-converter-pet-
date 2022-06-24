import { useState, useEffect } from 'react';
import ConvertService from '../service/ConvertService';
import './Sidebar.css';
import euro from '../resources/icons/euro.png';
import yen from '../resources/icons/yen.png';
import usd from '../resources/icons/dollar.png';
import byn from '../resources/icons/belarus.png'

const Sidebar = () => {
    const [data, setData] = useState([]);
    const [time, setTime] = useState();

    useEffect(() => {
        ConvertService()
        .then(res =>JSON.parse(res))
        .then(data => setData(data))
      },[])

      useEffect(() => {
        const now = new Date(data.PreviousDate).toLocaleString()
        setTime(now)
      },[data.PreviousDate])

    return(
        <div className="sidebar">
            <div className="sidebar__title">Дополнительная информация</div>
            <div className="sidebar__descr">Дата последнего обновления курса валют: {time}</div>
            <div className="sidebar__wrapper">
              <div className="sidebar__item">
                <div className="sidebar__item-title">EUR - Евро  <span>€</span></div>
                <img src={euro} alt="euro" className="sidebar__item-img" />
              </div>
              <div className="sidebar__item">
              <div className="sidebar__item-title">JPY - Японская йена  <span>¥</span></div>
                <img src={yen} alt="yen" className="sidebar__item-img" />
              </div>
              <div className="sidebar__item">
              <div className="sidebar__item-title">USD - Доллар США  <span>$</span></div>
                <img src={usd} alt="usd" className="sidebar__item-img" />
              </div>
              <div className="sidebar__item">
              <div className="sidebar__item-title">BYN - Белорусский рубль <span>Br</span> </div>
                <img src={byn} alt="byn" className="sidebar__item-img" />
              </div>
            </div>
        </div>
    )
} 


export default Sidebar; 