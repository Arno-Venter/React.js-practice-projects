import { useState } from "react/cjs/react.development";
import "./App.css";
import {
  signInWithGoogle,
  signOutWithGoogle,
} from "./Firebase";

function App() {
  const [user, setUser] = useState();

  const signInHandler = () => {
    signInWithGoogle(setUser);
  };

  const signOutHandler = () => {
    signOutWithGoogle(setUser);
  };

  return (
    <div>
      <button onClick={signInHandler}>
        Sign in with Google
      </button>
      <h1>{user?.displayName}</h1>
      <h1>{user?.email}</h1>
      <img alt="No img" src={user?.photoURL} />
      <br></br>
      <button onClick={signOutHandler}>Sign out</button>
    </div>
  );
}

export default App;
