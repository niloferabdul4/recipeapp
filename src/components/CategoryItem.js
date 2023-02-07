
import React from 'react';
import { CategoryImage,CategoryName,Span } from '../styles';
import { useContext } from 'react';
import { AppContext } from '../App';


const CategoryItem = ({category,thumbnail}) => {

    const {setUrl}=useContext(AppContext)

    const filterCategory=()=>
      { 
        setUrl(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        
      }

    
     return (        
        <Span>
            <CategoryImage src={thumbnail} onClick={filterCategory}/>
            <CategoryName>{category}</CategoryName>            
        </Span>
     
    );
}

export default CategoryItem;

