import React from 'react';
import Last from '../components/Footer/Last';
import Navbar from '../components/navbar/Navbar';
import ShopMain from '../components/Shop/ShopMain';

const Shop = ({database}) => {
    console.log(database);
    return (
        <>
         <Navbar/>  
         <ShopMain database={database}/>
         <Last/> 
        </>
    )
}

export default Shop
