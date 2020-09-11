import React from 'react';


function MyParagraph(props){
    const {text} = props;        
    return <p> {text}</p>
}

const texts = [
"Hello World" ,
"Hello World2",
"Hello World3",
"Hello World4",
"Hello World5" 
]

const ParagraphArray = texts.map(textString => <MyParagraph key={textString} text={textString}></MyParagraph>)

function Home(){
    return <>
        {ParagraphArray}
    </>
}

export default Home;