import styled from "styled-components";
import { mobile } from "../Responsive";

export const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
font-family:'Roboto';
gap:20px;
${mobile({
        gap:'10px',
        padding:'10px',       

    })}

`

export const MainContainer=styled.div`
        display:grid;
        grid-template-columns: repeat(4,1fr);
        ${mobile({
        display:'grid',
        gridTemplateColumns:'repeat(2,1fr)',
        
       
    })}

`

export const RecipeCardContainer=styled.div`
        height:400px;
        width:300px;
        margin:10px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2.6px;
        background-color: lavender;
        position:relative;
        cursor:pointer;
        ${mobile({
        height:'200px',
        width:'170px',
        margin:'10px',
        padding: '6px'
    })}
       
`

export const Image=styled.img`
        object-fit: cover;
        height:250px;
        width:250px;
        justify-content: center;
        ${mobile({
          height: '100px',
          width:'100px'

    })}

`

export const InfoContainer=styled.div`
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        gap:20px;
        ${mobile({
        gap:'10px',
        padding:'10px'
    })}
    p{
        ${mobile({
        fontSize:'12px'
        

    })}
    }

`
export const RecipeTitle=styled.h3`
        font-weight: 400;

        ${mobile({
        fontSize:'14px'
        

    })}
`
export const Category=styled.p`
        position:absolute;
        top:2px;
        right:0;
        padding: 10px;
        color:black;
        background-color:#D3D3D3;
        opacity: 0.9;
        border:none;
        ${mobile({
        display:'none',
       
        

    })}
`
