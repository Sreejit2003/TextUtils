import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success")
    }
    const handleLoClick = ()=>{
      // console.log("LowerCase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase!", "success")
  }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
  }
  const handleClearClick = ()=>{
    // console.log("Text cleared");
    let newText = ("");
    setText(newText)
    props.showAlert("Text Cleared!", "success")
}

const handleCopy = () => {
  navigator.clipboard.writeText(text);
  props.showAlert("Copied to Clipboard!", "success")
}

const handleExtraSpaces = () => {
  let newText = text.split(/[  ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!", "success")
}

  const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'? 'white':'#072754'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#2c5695':'white', color: props.mode === 'dark'? 'white':'#072754'}}id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2"  style={{color: props.mode === 'dark'? 'white':'#072754'}}>
      <h3>Your text summary</h3>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read </p>
      <h3>Preview</h3>
      <p>{text.length>0? text: "Nothing to preview"}</p>
    </div>
    </>
  )
}
