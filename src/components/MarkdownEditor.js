import React, {useState, useEffect} from "react";

import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import classes from './MarkdownEditor.module.css';

const MarkdownEditor = (props) => {
  const [text, setText] = useState('');
  const starting = "# Markdown Text goes here\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n>dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n- Ask for help on the Forum (that's what worked for me.)\n\n![react icon](logo192.png 'react logos')\n\n\n";
  
//   `<h1>This is some markdown</h1>
//   <h2>Consider making your own</h2>

//   <code>push()</code>
//   <pre><code>tell application "Foo"
//     beep
// end tell
//   </code></pre>

//   <blockquote cite="http://developer.mozilla.org"><p>Esta é uma citação tirada da Mozilla Developer Center.</p></blockquote>
  
//   <li>George</li>
//   <li>Paul</li>
//   <li>Ringo</li>
//   <li>John</li>
  
//   <img src="logo192.png" alt="Minha Figura">

//   #### Make it **bold** or make it *italic*
  
//   ####[Github](https://github.com/mateusokp)`

  const textChangeHandler = (event) => {
    setText(event);
    props.setText(event);
  }

  useEffect(()=>{
    textChangeHandler(starting);
}, []);

  return (
    <div>
      <h2 className={classes.text}>Editor</h2>
      <FloatingLabel style={{fontSize: '16px'}}label="Write your markdown here...">
        <Form.Control
          as="textarea"
          id="editor"
          style={{ height: "150px" }}
          onChange={e => textChangeHandler(e.target.value)}
        >{starting}</Form.Control>
      </FloatingLabel>
    
    </div>
  );
};

export default MarkdownEditor;