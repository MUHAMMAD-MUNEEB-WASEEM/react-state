import React, { useState } from 'react';
import './Room.css';


function Room() {

    //In React, State is basically object(array) of component which holds some info
    //about that component which can be update when needed
    //useState is also an state, it consist of value of component at index 0 and 
    //function to update that value at index 1
    //for example, we have pass true to useState, so at index 0 we have true and 
    //index 1 we have function to update value, like if I change it to false, then
    //that index 1 function automatically run and changes its value

    //1
    //In below, usestate(true) return an array [true, f()] which will store in
    //const variable state. we can call value by state[0] or function by state[1]
    //************code ******************

    // const state = useState(true);
    // const isLit = state[0];
    // const setLit = state[1]; 
    // console.log(state);
    
    //2
    //Another way of accessing value and function in isLit and setLit correspondingly
    
    let [isLit, setLit] = useState(true);
    //console.log("isLit: ", isLit);

    //making a function to update whether lit or dark, earlier we use islit==true etc
    //but as i mentioned earlier usestate or state provide function, so we used that
    //funciton and pass !islit to it so that when use click on that button, it will
    //change value in opposite, like dark from lit or lit from dark
    function updatelit(){
        setLit(!isLit);
    }

    //other state for age
    let [age, setAge] = useState(20);//20 is the value of variable age 
                                    // again setAge is the function to update value of age

    //we can define this function below as, as when we click on button, it runs
    //increaseAge function and increase age everytime, but we have define it in 
    //another way as you can see in return function
    //() => //this part is in place of function ()
    //and we write return in a single line

    // function increaseAge() {
    //   setAge(++age);//Incrementing age
    // }

    let [temp, setTemp] = useState(72);

    //for first part
    //below in div starting tag, we have pass the className property and it works
    //as;we have pass to classes, room and islit, room work in any situation whereas
    //when isLit become lit, then it use .lit class from room.css and when islit
    //becomes dark, then it uses .dark class,

    //second part
    //it consist of my age text and button that uses function that consist [age,setAge] = usestate(20) and
    //increaments age by 1 upon clicking on it, we use setAge function to modify the value of age 

    //third part
    //it consist of object [temp, setTemp] = usestate(72) and two button, one for increasing the temperature and
    //other for decreasing the temperature by using setTemp(++temp) and setTemp(--temps
  
    //this is called template string

  return (

   <div className={`room ${isLit ? "lit" : "dark"}`}>
        
        <p>This Room is {isLit ? 'lit' : 'dark'} </p>
        <button onClick={updatelit}>Toggle lit</button>
        <p>To be specific</p>
  
        <button onClick={() => setLit(true)} className="on-off">Turn On</button> 
        <button onClick={() => setLit(false)}>Turn Off</button> 
 

        <p>My age is {age} </p>
        <button onClick={() => setAge(++age)}>Toggle Age</button>

        
        <p>The current temperature is: {temp}</p>
        <button onClick={() => setTemp(++temp)}>+</button>
        <button onClick={() => setTemp(--temp)}>-</button>
        
    </div>
  );
}

    // {isLit ? 'lit' : 'dark'} it checks isLit and for true false check ?
    //true then return lit otherwise dark
    //button, use to update value by using onclick event

    //end

export default Room;
