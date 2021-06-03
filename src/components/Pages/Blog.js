import React, { useState } from "react";

export const Blog = () => {
  const [data, setData] = useState([
    {
      name: "Amutha",
      email: "tamamutha@gmail.com",
    },
  ]);
  const [ntext, setNtext] = useState("");
  const [etext, setEtext] = useState("");

  const handleNameTextChange = (event) => setNtext(event.target.value);
  const handleEmailTextChange = (event) => setEtext(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.warn("input 1 value is:", nameRef.current.value);
    // console.warn("input 1 value is:", emailRef.current.value);

    const info = {
      name: ntext,
      email: etext,
    };
    if (ntext.length > 0) {
      controlcomp(info);
      setNtext("");
      setEtext("");
    }
  };

  const controlcomp = (info) => {
    setData((prev) => [info, ...prev]);
    console.log(data);
  };

  return (
    <div className="textinput">
      <h1>About</h1>

      <form onSubmit={handleSubmit}>
        <h4>Controled Component</h4>
        <label htmlFor="">Name :</label>

        <input type="text" value={ntext} onChange={handleNameTextChange} />
        <br />
        <br />
        <label htmlFor="">
          {" "}
          <label htmlFor="">E-mail : </label>
        </label>
        <input type="text" value={etext} onChange={handleEmailTextChange} />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
