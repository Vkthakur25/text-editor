import React, { useState } from 'react';
function Form(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  }
  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState('enter your text');
  return (
    <>
      <div className="mb-5 my-5 w-75  mx-auto">
        <h1>{props.heading}
        </h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" style={{ backgroundColor: props.mode === 'dark' ? '#4a4956' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
        <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to UPPERCASE</button>
        <button type="button" onClick={handleDownClick} className="btn btn-primary mx-2 my-2">Convert to LOWERCASE</button>
        <button type="button" onClick={handleCopy} className="btn mx-2 my-2 btn-primary ">Copy</button>
        <button type="button" onClick={handleExtraSpaces} className="btn btn-primary  mx-2 my-2 ">Remove extra spaces</button>
        <button type="button" onClick={handleClear} className="btn btn-primary mx-2 my-2 ">Clear</button>
      </div>
      <div className="w-75  mx-auto">
        <h2> Your Text Summary </h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      </div>
    </>
  );
}
export default Form;