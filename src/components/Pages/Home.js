import React from "react";
import "./homestyles.css";

export const Home = () => {
  return (
    <div>
      <header>
        <h1>Home</h1>
      </header>
      <div className="earthcontainer">
        <div data-content="These are text on hover." class="image">
          <img
            src="https://images.unsplash.com/photo-1564053489984-317bbd824340?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2xvYmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <hr></hr>
        <div
          data-content="I have tested this using data-content. It's working .... Great!"
          class="image"
        >
          <img
            src="https://images.unsplash.com/photo-1564053489984-317bbd824340?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2xvYmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

// export default Home;
