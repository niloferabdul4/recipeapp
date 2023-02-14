import React from 'react';
import { useState } from 'react';
import {GrSearch} from 'react-icons/gr'
import { HeaderContainer,Input,Button,SearchBox,Hamburger} from '../styles'
import { useContext } from 'react';
import { AppContext } from '../App';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';

const Header = () => {

     const {setUrl}=useContext(AppContext)
     const[searchText,setSearchText]=useState('')
     const [menuOpen,setMenuOpen]=useState(false)

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

             <h1><span>Recipes</span> App</h1>
             <SearchBox>
               <Input type='text' placeholder='Search meals here...' onChange={handleChange} />
               <Button name='search' onClick={searchRecipe}>
                    <GrSearch size={26} />
               </Button>
             </SearchBox>
             
             <Hamburger>                        
                        {menuOpen? (<GrClose size={24} color={'white'} onClick={()=>setMenuOpen(false)}/>): (<GiHamburgerMenu  size={24} onClick={()=>setMenuOpen(true)}/>)}        
                       
            </Hamburger>            
    
       
      </HeaderContainer>
      

       
    );
}

export default Header;
