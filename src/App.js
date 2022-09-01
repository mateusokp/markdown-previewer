import React, { useState, useEffect } from "react";
import { marked } from "marked";
import "./App.css";
import Card from "./components/Card";
import MarkdownEditor from "./components/MarkdownEditor";
const App = (props) => {
  const [currentText, setCurrentText] = useState('');

  const setTextHandler = (markdown) => {
    setCurrentText(markdown);
  };


  return (
    <div className="App-header">
      <h1>Markdown Previewer</h1> 
      <Card>
        <MarkdownEditor setText={setTextHandler} />
        <h2 className='text'>Preview</h2>
        <Card light='true'>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(currentText) }}></div>
        </Card>
      </Card>
    </div>
  );
};

export default App;
