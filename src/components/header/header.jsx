import './header.css';
import person from './../../assets/person.jpg';
import { useState } from 'react';

export default function Header(){
    const [isOpen , setIsOpen] = useState(false);

        const handlOpen = ()=>{
            setIsOpen(!isOpen);
        }
    return(
        <div id="header">
            <div className="left">

            <input id='checkmenu' type="checkbox"/>
            <label onClick={handlOpen} htmlFor='checkmenu' id="overlay"></label>
            <label onClick={handlOpen} htmlFor='checkmenu' id="menu">
            {
                (isOpen) ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#696969">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#696969">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                ) 
            }
            </label >

            <h1>sneakers</h1>
            
            <ul id='unordredList'>
                <li>Collections</li>
                <li>Men</li>
                <li>Woman</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            </div>


            <div className="right">
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#7a7a7a"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
            <img src={person} alt="profile" />
            </div>
        </div>
    )
}
