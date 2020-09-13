import React from "react";
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




function Home() {
  return (
    <>
      <div className="m-auto text-center shadow bg-gray-100">
        <p>Welcome to the jobs app</p>
        </div>  
    </>
  );
}

export default Home;
