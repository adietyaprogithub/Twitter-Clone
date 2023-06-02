
import React from 'react'
import Home from '../Home/Home'
import Column3 from '../../Column3'
import Sidebar from '../../leftsidebar/Sidebar'

export function MainHomePage(){
    return(
        <div className='Main-div'>
             <Sidebar/>
            <Home/>
            <Column3/>
           
        </div>
    )
}