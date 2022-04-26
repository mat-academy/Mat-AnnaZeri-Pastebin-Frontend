import { useState } from "react";

function App(): JSX.Element {
  const [state, setState] = useState({ title: "", paste_text: "" });

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    console.log(state);
  };

  return (
    <>
      <h1>Pastebin App</h1>
      <input
        value={state.title}
        placeholder="Title (optional)"
        onChange={handleChange}
        name="title"
      />
      <input
        value={state.paste_text}
        placeholder="Input text"
        onChange={handleChange}
        name="paste_text"
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default App;
