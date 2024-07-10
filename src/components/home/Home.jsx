import React from 'react'
import Strelka from '../../assets/Vector.svg'

export default function Home() {
  return (
    <div className='home'>
        <div className='contentHome'>
            <h1 className='titleHome1'>Как стать селлером</h1>
            <h1 className='titleHome2'>на Wildberries</h1>
            <img src={Strelka} alt="" />
        </div>
    </div>
  )
}
