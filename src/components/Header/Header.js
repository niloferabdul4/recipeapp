import React from 'react';
import { useState } from 'react';
import {GrSearch} from 'react-icons/gr'
import { HeaderContainer,Input,Button,SearchBox,Logo} from './style'
import { useContext } from 'react';
import { AppContext } from '../../App';


const Header = () => {

     const {setUrl}=useContext(AppContext)
     const[searchText,setSearchText]=useState('')
     

     const handleChange=(event)=>
     {
          setSearchText(event.target.value)
     }

     const searchRecipe=()=>
     {
      setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
     }
    
    return (
      <HeaderContainer>
             <Logo>Recipes App</Logo>
             <SearchBox>
               <Input type='text' placeholder='Search meals here...' onChange={handleChange} />
               <Button name='search' onClick={searchRecipe}>
                    <GrSearch size={26} />
               </Button>
             </SearchBox>             
                    
      </HeaderContainer>    
    );
}

export default Header;
