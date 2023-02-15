import React from 'react';
import RecipeCard from './RecipeCard';
import Index from '../Index/Index'
import Categories from '../Categories/Categories';
import { MainContainer,Container } from './style';
import { useContext } from 'react';
import { AppContext } from '../../App';


const Main = () => {    
              
    const {setUrl,allRecipes}=useContext(AppContext)
    
    return (
       
           <Container>         
                <Categories setUrl={setUrl}/>      
                <Index setUrl={setUrl} />
                <MainContainer>
                    {(!allRecipes)? 
                    
                                (<h2>Not Found</h2>) 
                                
                                : 

                                (allRecipes.map(recipe=>{return <RecipeCard   key={recipe.idMeal}
                                                                            id={recipe.idMeal}                                                   
                                                                            title={recipe.strMeal}
                                                                            image={recipe.strMealThumb}
                                                                            category={recipe.strCategory}
                                                                        
                            />
                    
                            }))
                        }
                </MainContainer>
         

             </Container>
     
   
    );
}

export default Main;
