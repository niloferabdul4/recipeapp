import styled from "styled-components";
import { mobile } from "../Responsive";

export const IndexContainer=styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 40px;
        ${mobile({
        display:'grid',
        gridTemplateColumns:'repeat(12,1fr)',
        margin:'20px',
    

    })}

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
        ${mobile({
             marginLeft:'0px',
             borderRadius:'0px',
             padding:'4px',
             fontSize:'1rem',
          
    })}
`
