import { useState } from "react";

export default function FormMaker() {
  const [username, setusername] = useState("aslan");

  // Corrected the function to handle the event parameter more clearly
  const handleUsernameChange = (event) => {
    setusername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action
    console.log(username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* Added form tag with onSubmit handler */}
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="username"
        />
        <button type="submit">Submit</button> {/* Ensured button is of type submit */}
      </form>
    </div>
  );
}
