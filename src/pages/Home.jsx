import React from 'react'
import Last from '../components/Footer/Last'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/navbar/Navbar'
import NewProducts from '../components/NewProducts/NewProducts'
import PopularProduct from '../components/PopularProduct/PopularProduct'
import Promotions from '../components/Promotions/Promotions'


const Home = ({database}) => {
    return (
        <>
            <Navbar/>
            <Header/>
            <Hero/>
            <NewProducts database={database}/>
            <Promotions/>
            <PopularProduct database={database}/>
        <Last/>
            
        </>
    )
}

export default Home
