import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Logo from '../../assets/logo.png'
export default function NavBar() {
  return (<>
    <div className='navBar'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="links">
            <Link to="/">Программа</Link>
            <Link to="/">Автор курса</Link>
            <Link to="/">Подарки</Link>
        </div>
        <div className="buttonMenu">
            <select name="" id="">
                <option value="RU">RU</option>
                <option value="EN">EN</option>
                <option value="TJ">TJ</option>
            </select>
            <button>Записаться на курс</button>
        </div>
    </div>
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  </>)
}
