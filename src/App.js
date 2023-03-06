import "./App.css";
import NotFound from "./Pages/NotFound";
import SignIn from "./Pages/SignIn";
import Chat from './Pages/Chat'
import { Routes, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from './FirebaseConfig'
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  console.log(user);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Chat /> : <SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
