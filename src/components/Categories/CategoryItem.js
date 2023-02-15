
import React from 'react';
import { CategoryImage,CategoryName,Span } from './style';
import { useContext } from 'react';
import { AppContext } from '../../App';


const CategoryItem = ({category,thumbnail}) => {

    const {filterCategory}=useContext(AppContext)


     return (        
        <Span>
            <CategoryImage src={thumbnail} onClick={()=>filterCategory(category)}/>
            <CategoryName>{category}</CategoryName>            
        </Span>
     
    );
}

export default CategoryItem;

