import React from 'react';
import {NavLink, useNavigate,} from 'react-router-dom';
import { RecipeCardContainer, Image,InfoContainer,Category,RecipeTitle} from './style';


const RecipeCard = ({id,title,image,category}) => {
  const navigate=useNavigate()
    return (
        <RecipeCardContainer >            
            <Image src={image} alt='' role='button' onClick={()=>{navigate(`${id}`)}}/>
            <Category>{category}</Category>
            <InfoContainer>
                    <RecipeTitle>{title}</RecipeTitle>
                    <NavLink to={`${id}`}>
                       <p>Full Recipe</p>                         
                    </NavLink>                      
            </InfoContainer>            
        </RecipeCardContainer>            
      
    );
}

export default RecipeCard;

