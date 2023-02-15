import styled from "styled-components"
import { mobile } from "../Responsive"


export const HeaderContainer=styled.div`
        height:70px;
        color: black;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-family:'Roboto';
        gap:10px;
        padding: 20px 0px;
        background-color: darkslateblue;
        color:white;
        margin-bottom: 20px;
        ${mobile({
            height:'50px'

    })}
 

`


export const Input=styled.input`
        flex:1;
        width:30%;
        margin-right: 0px;
        text-indent:6px;
        border-radius: 4px;;
        border: none;
        font-size:1rem;
        ${mobile({
        fontSize:'0.9rem'

    })}

`

export const SearchBox=styled.div`
        background-color: aliceblue;
        width:30%;
        height:35px;
        display:flex;
        flex-direction:row;
        ${mobile({
        height:'24px',
      
        

    })}
`
export const Logo=styled.h2`
        
        ${mobile({
       fontSize:'18px'

    })}
`

export const Button=styled.button`
        height: 35px;
        width:50px;
        font-size: 0.96rem;
        border-radius: 4px;
        border:none;
        background-color:lightgrey;
        color:white;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 0px;
        ${mobile({
                height:'24px',
                width: '30px'
        

    })}

`
