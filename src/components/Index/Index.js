import React from 'react';
import { AlphaBlocks, IndexContainer } from './style';
import { useContext } from 'react';
import { AppContext } from '../../App';

const Index = () => {

   const {setUrl}=useContext(AppContext)
    const alphabet= [ "A", "B", "C", "D","E","F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R","S", "T", "U", "V", "W","X","Y", "Z", ];

    const filterByIndex=(item)=>
      {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${item}`)        
                 
}
    return (
        
        <IndexContainer>
             {alphabet.map(item=>{return( <AlphaBlocks key={item.idMeal} onClick={()=>{filterByIndex(item)}} >{item}</AlphaBlocks>)})}  
         </IndexContainer>
    );
}

export default Index;
