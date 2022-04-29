import { useState } from "react";

// interface Pastes {
//   title: string;
//   paste_text: string;
//   summary: string;
// }

function App(): JSX.Element {
  const [state, setState] = useState({ title: "", paste_text: "" });
  // const [pastes, setPastes] = useState<Pastes[]>([]);

  const handleChange = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = () => {
    if (state.paste_text !== "") {
      if (state.title === "") {
        state.title = "Untitled";
      }
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(state),
      };
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
    }
  };

  // const handleGetPastes = () => {
  //   fetch("https://pastebin-app-mat-annazeri.herokuapp.com/")
  //     .then((response) => response.json())
  //     .then((jsonBody) => setPastes(jsonBody));
  // };

  return (
    <div>
      <h1 className="title">Pastebin App</h1>
      <div className="Container">
        <textarea
          value={state.title}
          placeholder="Title (optional)"
          onChange={handleChange}
          name="title"
        />
        <textarea
          value={state.paste_text}
          placeholder="Input text"
          onChange={handleChange}
          name="paste_text"
        />
        <br></br>
        <button onClick={handleClick} className="blue">
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
