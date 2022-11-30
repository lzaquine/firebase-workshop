import React from 'react'
import ironhack from "../ironhack.png.webp";
import SignOut from './SignOut';
import Messages from './Messages';
import { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";



/* Step 7- below */



function Chat() {
  

  /* Step 13- below */


  /* Step 20- below */
  const scroll = useRef();


  /* Step 17- below */
  const [formValue, setFormValue] = useState("");
  const handleValue = (e) => setFormValue(e.target.value);

  
  /* Step 18- below */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { uid, photoURL, displayName } = auth.currentUser;
    
    /* Step 19- below */
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      displayName,
    });
    

    setFormValue("");

    /* Step 20- below */
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


          {/* Step 14- below */}
          {messages &&
              messages.map((msg) => <Messages key={msg.id} message={msg} />)}
          

          {/* Step 20- below */}
          <div ref={scroll}></div>


          {/* Step 18- below */}
          <form onSubmit={handleSubmit}>


          {/* Step 17- below */}
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

export default Chat