import styled from "styled-components";
import { mobile } from "../Responsive";

export const RecipeInfoContainer=styled.div`
        display: flex;
        height:calc(100vh-70px);
        top:70px;
        justify-content: center;
        margin-left:auto;
        margin-right: auto;       
        padding:60px;
        height:100vh;
        color:rgba(0,0,0,0.74);
        ${mobile({
          marginTop:'20px',
          padding:'10px',
          flexDirection:'column'

    })}


`
export const RecipeImageContainer=styled.div`
        flex:0.4;
        padding:20px;
        max-height: 500px;
        display: flex;
        justify-content: center;
        ${mobile({
          maxHeight: '250px'        

    })}

`

export const RecipeImage=styled.img`
       width:100%;
       object-fit: contain;   
       border-radius : 10px;

`
export const RecipeInfo=styled.div`

        flex:0.6;
        display: flex;
        flex-direction: column;
        padding:20px;
        max-height: 1000px;  
        gap:10px;  
        ${mobile({
        maxHeight: '500px',
         

    })}
 

`
export const RecipeTitle=styled.h3`
        font-size:30px;
        font-weight: 400;
        margin-bottom: 20px;
        line-height: 46px;
        text-align: justify; 
        ${mobile({
         fontSize:'20px'

    })}
       

`

export const Description=styled.div`        
        line-height: 30px;
        font-size:18px;
        text-align: justify;
        padding:10px 0px;              
`

export const Button=styled.button`
        width:150px;
        height:60px;
        font-size: 1.2rem;
        border-radius:8px;
        border:none;
        background-color: darkslateblue;
        color:white;
        ${mobile({
         display:'none'

    })}

`