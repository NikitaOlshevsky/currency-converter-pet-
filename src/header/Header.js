import { useState, useEffect} from 'react';
import './Header.css'

const Header = () => {
    const [date, setDate] = useState(new Date());

    function updateTime()  {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(updateTime, 1000)

        return() => {
            clearInterval(timerId)
        }
    },[])

    return(
        <div className="header">
            <h1 className="header__title">Курс рубля к различным валютам</h1>
            <h2> Текущее время: {date.toLocaleTimeString()}</h2>
        </div>

    )
}

export default Header;