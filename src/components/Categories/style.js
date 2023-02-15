import styled from "styled-components";
import { mobile } from "../Responsive";


export const CategoryContainer=styled.div`
        width:100%;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 0px 40px;    
        ${mobile({
        display:'grid',
        gridTemplateColumns:'repeat(5,1fr)',
        padding:'10px'
    })}
 

`

export const Span=styled.span`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin:10px;
        ${mobile({
      margin:'2px'

    })}

`

export const CategoryImage=styled.img`
        border-radius: 50%;
        border: 1px solid grey;
        height:70px;
        width:70px;
        cursor: pointer;
        ${mobile({
        height:'40px',
        width:'40px'

    })}


`
export const CategoryName=styled.p`
font-size: 16px;
${mobile({
       fontSize:'14px'
    })}

`
