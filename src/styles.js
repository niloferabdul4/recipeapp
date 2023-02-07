import styled from "styled-components"


export const HeaderContainer=styled.div`

width:100%;
height:80px;
color: black;
display: flex;
justify-content: center;
align-items: center;
font-family:'Roboto';
gap:10px;
padding: 20px;
background-color: bisque;

`


export const Input=styled.input`

height:35px;
width:30%;
margin-right: 0px;
text-indent:6px;
border-radius: 4px;;
border: none;

`


export const Button=styled.button`
height: 35px;
width:${props=>props.name==='search' ? '50px' : '140px' };
font-size: ${props=>props.name==='search' ? '0.96rem' : '1.04rem' };
border-radius: 6px;
border:none;
background-color: ${props=>props.name==='search' ? 'lightgrey' : 'darkslateblue' };
color:white;
padding: 10px;
display: flex;
align-items: center;
justify-content: center;
margin-left: 0px;

`


export const Container=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 20px;
font-family:'Roboto';
background-color: bisque;
`

export const MainContainer=styled.div`
display:grid;
grid-template-columns: repeat(4,1fr);
padding-left:100px;



`

export const IndexContainer=styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin: 40px;

`

export const AlphaBlocks=styled.div`
display:flex;
margin-left: 10px;
padding:10px;
background-color: darkslateblue;
color:white;
font-size: 1.5rem;
border-radius: 4px;
cursor: pointer;

`

export const RecipeCardContainer=styled.div`
height:400px;
width:300px;
margin:10px;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 10px;
box-shadow: rgba(53, 48, 48, 0.15) 1.95px 1.95px 2.6px;
background-color: white;
position:relative;
`

export const Image=styled.img`
object-fit: cover;
height:250px;
width:250px;
justify-content: center;

`

export const InfoContainer=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const Category=styled.p`
position:absolute;
top:2px;
right:30px;
padding: 10px;;
color:black;
background-color:#D3D3D3;
opacity: 0.9;
border:none;

`

export const CategoryContainer=styled.div`

width:100%;
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 0px 40px;

`

export const Span=styled.span`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin:10px;

`

export const CategoryImage=styled.img`
border-radius: 50%;
border: 1px solid grey;
height:70px;
width:70px;


`
export const CategoryName=styled.p`
font-size: 16px;

`


export const RecipeInfoContainer=styled.div`
        display: flex;
        justify-content: center;
        margin-left:auto;
        margin-right: auto;
       
        padding:60px;
        height:100vh;
        background-color: bisque;
        color:rgba(0,0,0,0.74);

`
export const RecipeImageContainer=styled.div`
        flex:0.4;
        padding:20px;
        max-height: 500px;
        display: flex;
        justify-content: center;
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

`
export const RecipeTitle=styled.h3`
        font-size:30px;
        font-weight: 400;
        margin-bottom: 20px;
        line-height: 46px;
        text-align: justify;        

`

export const Description=styled.div`
        
        line-height: 30px;
        font-size:18px;
        text-align: justify;
        padding:10px 0px;              
`

