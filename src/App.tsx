//import { useState } from "react";

// interface Properties {
//   title?: string;
//   paste_text: string;
// }

function App(): JSX.Element {
  //const [properties, setProperties] = useState<Properties[]>();

  return (
    <>
      <h1>Pastebin App</h1>
      <input placeholder="Title (optional)" />
      <input placeholder="Input text" />
      <button>Submit</button>
    </>
  );
}

export default App;
