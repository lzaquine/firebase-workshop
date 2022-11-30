import './App.css';
import SignIn from "./components/SignIn";
import Chat from './components/Chat'
import { Routes, Route } from "react-router-dom";

/* Step 8- below */
import { useAuthState } from "react-firebase-hooks/auth";

/* Step 7- below */


function App() {
  
  /* Step 8- below */
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="App">
      <Routes>
      {/* Below, if there's an user, show the Chat, if there isn't, show the SignIn */}
        <Route path="/" />
      </Routes>
    </div>
  );
}

export default App;
