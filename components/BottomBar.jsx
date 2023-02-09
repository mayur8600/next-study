import Image from 'next/image'
import React from 'react'
import heart from '../images/heart.png'
import location from '../images/location.png'
import music from '../images/musical.png'
import news from '../images/news.png'

function BottomBar() {
  return (
    <div className='flex border w-screen h-[70px] fixed bottom-0 z-1 bg-indigo-500'>
        <div className='flex flex-col w-[25%] h-full justify-center items-center cursor-pointer bg-indigo-500 hover:bg-indigo-400'>
            <div><Image src={heart} width={20} height={20}/></div>
            <div>Favorites</div>
        </div>
        <div className='flex flex-col w-[25%] h-full justify-center items-center bg-indigo-500 cursor-pointer hover:bg-indigo-400'>
        <div><Image src={music} width={20} height={20}/></div>
            <div>Music</div>
        </div>
        <div className='flex flex-col w-[25%] h-full justify-center items-center bg-indigo-500 cursor-pointer hover:bg-indigo-400'>
        <div><Image src={location} width={20} height={20}/></div>
            <div>Places</div>
        </div>
        <div className='flex flex-col w-[25%] h-full justify-center items-center bg-indigo-500 cursor-pointer hover:bg-indigo-400'>
        <div><Image src={news} width={20} height={20}/></div>
            <div>News</div>
        </div>
    </div>
  )
}

export default BottomBar