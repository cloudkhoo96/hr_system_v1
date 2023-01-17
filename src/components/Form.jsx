import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            id="inputname"
            placeholder="Enter Name Here..."
            required
          />
        </label>
        <br />
        <label>
          Date of birth:{" "}
          <input
            type="date"
            name="dob"
            id="inputdob"
            required
         />
        </label>
        <br />
        <label>
          Email:{" "}
          <input
            type="email"
            name="email"
            id="inputemail"
            placeholder="Enter Email Here..."
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
