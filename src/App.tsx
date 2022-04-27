import { useState } from "react";

interface Pastes {
  title: string;
  paste_text: string;
}

function App(): JSX.Element {
  const [state, setState] = useState({ title: "", paste_text: "" });
  const [pastes, setPastes] = useState<Pastes[]>();

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

  const handleGetPastes = () => {
    fetch("https://pastebin-app-mat-annazeri.herokuapp.com/")
      .then((response) => response.json())
      .then((jsonBody) => setPastes(jsonBody));
  };

  console.log(pastes);

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
      <div onChange={handleGetPastes}>These are the last 10 pastes</div>
    </>
  );
}

export default App;
