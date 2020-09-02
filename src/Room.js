import React, { useState } from 'react';


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

  return (
    //for first part
    <div>
        <p>This Room is {isLit ? 'lit' : 'dark'} </p>
        <button onClick={updatelit}>toggle lit</button>

        <p>This age is {age} </p>
        <button onClick={() => setAge(++age)}>toggle Age</button>
        
    </div>
    // {isLit ? 'lit' : 'dark'} it checks isLit and for true false check ?
    //true then return lit otherwise dark
    //button, use to update value by using onclick event

    //second para for second part
    //end
  );
}

export default Room;
