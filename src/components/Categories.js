import React from 'react';
import CategoryItem from './CategoryItem';
import { CategoryContainer} from '../styles';
import { useState,useEffect } from 'react';


const Categories = () => {   

    const [categories,setCategories]=useState([])

    useEffect(()=>{fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                        .then((res)=>res.json())
                        .then(data=>setCategories(data.categories))
             }, [])


    return (
        <CategoryContainer>
   
                { categories.map(item=>{return( <CategoryItem key={item.idMeal}
                                                              id={item.idCategory}
                                                              category={item.strCategory}
                                                              thumbnail={item.strCategoryThumb}
                                                            
                />)})
        }  
    
        </CategoryContainer>
    );
}

export default Categories;
