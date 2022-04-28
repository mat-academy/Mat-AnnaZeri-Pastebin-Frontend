import { useState } from "react";

interface Pastes {
  title: string;
  summary: string;
}

function App(): JSX.Element {
  const [state, setState] = useState({ title: "", paste_text: "" });
  const [pastes, setPastes] = useState<Pastes[]>([]);

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    console.log(state);
    //
    //const body = {state};
    const requestOptions = {
      method: "POST",
      headers: { "Contact-Type": "application/json" },
      body: JSON.stringify(state),
    };
    console.log(JSON.stringify(state));
    fetch(
      "https://pastebin-app-mat-annazeri.herokuapp.com/pastes",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("success", result);
      })
      .catch((error) => {
        console.log("error", error);
      });
    console.log(requestOptions);
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
      <button onClick={handleGetPastes}>Get last 10 pastes</button>
      <div>
        {pastes.map((paste, id) => {
          return <div key={id}>{paste.title + ", " + paste.summary}</div>;
        })}
      </div>
    </>
  );
}

export default App;
