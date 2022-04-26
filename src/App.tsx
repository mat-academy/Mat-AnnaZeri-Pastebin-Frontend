import { useState } from "react";

  // interface Properties {
  //  title?: string;
  //  paste_text: string;
  // }

function App(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [paste_text, setPaste_text] = useState<string>("");
  console.log(title);
  console.log(paste_text);

  return (
    <>
      <h1>Pastebin App</h1>
      <input 
        value = {title} 
        placeholder="Title (optional)" 
        onChange={event => {
            setTitle(event.target.value)
            }} 
      />
      <input 
        value = {paste_text} 
        placeholder="Input text" 
        onChange={event => {
            setPaste_text(event.target.value)
            }} 
      />
      <button>Submit</button>
    </>
  );
}

export default App;
