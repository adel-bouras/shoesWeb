import './content.css';
import first from './../../assets/first.jpg';
import second from './../../assets/second.jpg';
import third from './../../assets/third.jpg';
import fourth from './../../assets/fourth.jpg';
import fifth from './../../assets/fifth.jpg';
import { useState } from 'react';





export default function Content(){
    const imgs = [first , second , third , fourth , fifth];
    const [main , setMain] = useState(first);
    const [count , setCount] = useState(0);

    const leftArrow = ()=>{
        const current = imgs.indexOf(main);
        const next = (current-1<0) ? (imgs.length-1) : (current-1);
        setMain(imgs[next]);
        console.log(next);
    }

    const rightArrow = ()=>{
        const current = imgs.indexOf(main);
        const next = (current+1>=imgs.length) ? (0) : (current+1);
        setMain(imgs[next]);
        console.log(next);
    }

    const increment = ()=>{
        setCount((prev)=>prev+1);
    }

    const decrement = ()=>{
       if(count>0)setCount((prev)=>prev-1);
    }


    const handlClcick = (index)=>{
        setMain(imgs[index]);

    }
    return (
        <div id="content">

            <div id="image">
                    <div className="arrow">
                    <svg onClick={leftArrow} xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="m488-272 88-89-56-56h151v-126H520l56-56-88-89-208 208 208 208Zm-8 226q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z"/></svg>
                    <svg onClick={rightArrow} xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#e8eaed"><path d="m472-272 208-208-208-208-88 89 56 56H289v126h151l-56 56 88 89Zm8 226q-91 0-169.99-34.08-78.98-34.09-137.41-92.52-58.43-58.43-92.52-137.41Q46-389 46-480q0-91 34.08-169.99 34.09-78.98 92.52-137.41 58.43-58.43 137.41-92.52Q389-914 480-914q91 0 169.99 34.08 78.98 34.09 137.41 92.52 58.43 58.43 92.52 137.41Q914-571 914-480q0 91-34.08 169.99-34.09 78.98-92.52 137.41-58.43 58.43-137.41 92.52Q571-46 480-46Z"/></svg>
                    </div>
                <img id='mainIMG' src={main} alt="item" />
                

                <div id="secondaryIMGS">
                    {
                        imgs.map((element , index)=>(
                            <img className='secondarys' key={index} onClick={()=>handlClcick(index)} src={element} alt="item" />
                        ))
                    }
                </div>

            </div>

            <div id="discription">
                <h3>SNEAKER COMPANY</h3>

                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everithing the weather can offer</p>

                    <h2>$125.00 <strong>50%</strong></h2>
                    <h3 style={{textDecoration:'line-through'}}>$250.00</h3>

                    <div id="buttons">
                        <div id="contity">
                        <button onClick={decrement} id='decrement'>-</button>
                        <button id='counter'>{count}</button>
                        <button onClick={increment} id='increment'>+</button>
                        </div>


                        <button id='tocart'> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
                             Add to cart</button>
                    </div>
            </div>
            
        </div>
    )
}