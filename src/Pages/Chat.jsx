import React from "react";
import ironhack from "../ironhack.png.webp";
import SignOut from "./SignOut";
import Messages from "./Messages";
import { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "../FirebaseConfig";
const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {
  const messagesRef = firestore.collection("messages");
  const q = messagesRef.orderBy("createdAt");
  const [messages] = useCollectionData(q, { idField: "id" });

  const scroll = useRef();

  const [formValue, setFormValue] = useState("");
  const handleValue = (e) => setFormValue(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { uid, photoURL, displayName } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });

    setFormValue("");

    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="signout">
        <SignOut />
      </div>
      <img id="ironRight" src={ironhack} alt="ironhack" />
      <img id="ironLeft" src={ironhack} alt="ironhack" />
      <div id="chatDiv">
        <main id="chatMain">
          <div className="pChat">
            <p className="pChat">Firebase Chat</p>
          </div>
          {messages &&
            messages.map((msg) => <Messages key={msg.id} message={msg} />)}
          <div ref={scroll}></div>
          <form onSubmit={handleSubmit}>
            <input
              value={formValue}
              onChange={handleValue}
              placeholder="Type your message here"
            />
            <button className="button-57 sendBtn" type="submit">
              <span className="text">Send 💬</span>
              <span>Yay!!! 🥰</span>
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Chat;

