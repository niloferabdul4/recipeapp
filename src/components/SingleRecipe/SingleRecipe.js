import React from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { RecipeInfoContainer,RecipeImageContainer,RecipeImage,RecipeInfo,RecipeTitle, Description,Button} from './style';



const SingleRecipe = () => {
    const {id}=useParams()
    const navigate=useNavigate()
    const [singleRecipe,setSingleRecipe]=useState([])

    useEffect(()=>{
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then((res)=>res.json())
                .then(data=>setSingleRecipe(data.meals))
            },[])
                      
    return (
        <>
           {singleRecipe.map(item=>{return <RecipeInfoContainer key={item.idMeal}>
            <Button onClick={()=>navigate(-1)}>{`<<  Go Home`}</Button>
                                                <RecipeImageContainer>
                                                       
                                                        <RecipeImage src={item.strMealThumb} alt='' />                    
                                                </RecipeImageContainer>
                                                <RecipeInfo>
                                                        <RecipeTitle>{item.strMeal}</RecipeTitle>  
                                                        <p>{item.strIngredient}</p>                                                   
                                                        <Description>{item.strInstructions}</Description>
                                                        <NavLink >{item.strYoutube}</NavLink>
                                                        
                                                </RecipeInfo>                                                
                                            </RecipeInfoContainer>
           })}  

    
      
       </>
        
    );
}

export default SingleRecipe;
