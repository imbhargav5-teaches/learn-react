import React, { useState } from "react";
import Head from "next/head";
import Job from '../components/Job'


function MyParagraph(props) {
  const { text } = props;
  return <p> {text}</p>;
}

const texts = [
  "Hello World",
  "Hello World2",
  "Hello World3",
  "Hello World4",
  "Hello World5",
];

const ParagraphArray = texts.map((textString) => (
  <MyParagraph key={textString} text={textString}></MyParagraph>
));

// props , state 

// event listeners 
// a state basics
// props and state 
// inputs


// function Counter(){
//   const [value , setValue] = useState(0);

//   function handleIncrementButtonClick(){
//     console.log("old value is",value);
//     setValue(value + 1);
//     console.log("new value is ",value);
//   }

//   function handleDecrementButtonClick(){
//     console.log("old value is",value);
//     setValue(value - 1);
//     console.log("new value is ",value);
//   }

//   console.log("counter has rendered");

//   return <div>
//     <p>The current count value is {value}</p>
//     <button onClick={handleIncrementButtonClick} className="border mx-4 p-2 my-4">Increment</button>
//     <button onClick={handleDecrementButtonClick} className="border mx-4 p-2 my-4">Decrement</button>
//   </div>
// }


function Home() {

  return (
    <>
      <div className="m-auto text-center">
          
        </div>  
    </>
  );
}

export default Home;
