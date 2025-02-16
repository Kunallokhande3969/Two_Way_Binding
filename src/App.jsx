import React from "react";
import { useState } from "react";

const App = () => {
  const [Allsongs, setAllsongs] = useState([]);

  const [Songposter, setSongposter] = useState("");
  const [Songname, setSongname] = useState("");
  const [Singername, setSingername] = useState("");
  const [Actorname, setActorname] = useState("");

  function formhandler(e) {
    const copyAllsongs = [...Allsongs];

    copyAllsongs.push({ Songposter, Songname, Singername, Actorname });

    setAllsongs(copyAllsongs);

    e.preventDefault();
    setSongposter("");
    setSongname("");
    setSingername("");
    setActorname("");
  }

  return (
    <div className="m-2">
      <form
        onSubmit={function (e) {
          formhandler(e);
        }}
      >
        <input
          required
          value={Songposter}
          onChange={function (e) {
            setSongposter(e.target.value);
          }}
          className="p-2 border m-2 "
          type="text"
          placeholder="Enter poster URL"
        />
        <input
          required
          value={Songname}
          onChange={function (e) {
            setSongname(e.target.value);
          }}
          className="p-2 border m-2 "
          type="text"
          placeholder="Enter your song name"
        />
        <input
          required
          onChange={function (e) {
            setSingername(e.target.value);
          }}
          value={Singername}
          className="p-2 border m-2 "
          type="text"
          placeholder="Enter singer name"
        />
        <input
          required
          value={Actorname}
          onChange={function (e) {
            setActorname(e.target.value);
          }}
          className="p-2 border m-2  "
          type="text"
          placeholder="Enter actor name"
        />
        <button className="m-3 p-2 bg-green-400 font-bold  text-black rounded-[2px]">
          Create Song
        </button>
      </form>

      <div>
        {Allsongs.map((elem, idx) => (
          <div className="card bg-zinc-300 inline-block p-4 m-2" key={idx}>
            <div className="text-black font-semibold text-center">
              <img
                src={elem.Songposter}
                alt={elem.Songname}
                className="h-30 w-35 bg-red-300  object-cover "
              />
              <h1>{elem.Songname}</h1>
              <h3 className="my-1">{elem.Singername}</h3>
              <h1>{elem.Actorname}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
