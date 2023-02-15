import React, { useContext } from 'react';
import CategoryItem from './CategoryItem';
import { CategoryContainer} from './style';
import { useState,useEffect } from 'react';
import { AppContext } from '../../App';


const Categories = () => {   

    const {categories,setCategories}=useContext(AppContext)

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
