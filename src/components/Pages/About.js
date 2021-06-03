import React, { useRef, useState } from "react";

export const About = () => {
  let nameRef = useRef(null);
  let emailRef = useRef(null);
  const [data, setData] = useState([
    {
      name: "Amutha",
      email: "tamamutha@gmail.com",
      address: "44 faads",
    },
  ]);
  // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    // retrieving data using useRef
    console.warn("input 1 value is:", nameRef.current.value);
    console.warn("input 1 value is:", emailRef.current.value);
    // retrieving data using documentid
    let addr = document.getElementById("address").value;
    console.warn("input 3 value is:", addr);

    const namef = nameRef.current.value;
    const emailf = emailRef.current.value;

    if (namef.length > 0) {
      const info = {
        name: namef,
        email: emailf,
        address: addr,
      };
      controlcomp(info);
    }
  };

  const controlcomp = (infoo) => {
    setData((prev) => [infoo, ...prev]);

    console.log(data);
  };

  return (
    <div className="textinput">
      <h1>About</h1>

      <form onSubmit={handleSubmit}>
        <h4>Uncontroled Component</h4>
        <label>Name :</label>

        <input type="text" ref={nameRef} />
        <br />
        <br />
        <label>
          <label htmlFor="">E-mail : </label>
        </label>
        <input type="text" ref={emailRef} />
        <br />
        <br />
        <label>
          <label htmlFor="">Address : </label>
        </label>
        <input type="text" id="address" placeholder="Address..." />
        <button>Submit</button>
      </form>
    </div>
  );
};
