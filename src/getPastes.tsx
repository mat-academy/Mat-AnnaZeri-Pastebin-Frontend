import { useState } from "react";

interface Pastes {
  title: string;
  paste_text: string;
  summary: string;
}

function GetPastes(): JSX.Element {
  const [pastes, setPastes] = useState<Pastes[]>([]);
  const handleGetPastes = () => {
    fetch("https://pastebin-app-mat-annazeri.herokuapp.com/")
      .then((response) => response.json())
      .then((jsonBody) => setPastes(jsonBody));
  };

  return (
    <>
      <br></br>
      <br></br>
      <button onClick={handleGetPastes} className="blue">
        Get last 10 pastes
      </button>
      <br></br>
      <br></br>
      <br></br>
      <div>
        {pastes.map((paste, id) => {
          return (
            <details key={id}>
              <summary>
                {paste.title} - {paste.summary}
              </summary>
              {paste.paste_text}
            </details>
          );
        })}
      </div>
    </>
  );
}

export default GetPastes;
