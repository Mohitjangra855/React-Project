import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full h-screen flex gap-4   px-20 py-24 border-t-[1px] border-[#53535c] sticky -top-40 z-0 '>
      <Card bgcolor="#004D43" text="ochi" para="&#169; 2019-2022" width="50%" textColor="#ceeb67" />
      <Card bgcolor="#212121" img="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" para="rating 5.0 on clutch" width="25%" textColor="#f5f5f5" />
      <Card bgcolor="#212121" img="https://ochi.design/wp-content/uploads/2022/04/logo003.png" width="25%" para="business bootcamp alumni" textColor="#f5f5f5" />
    </div>
  )
}

export default Cards
