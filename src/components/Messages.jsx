import React from 'react'

/* Step 7- below */


function Messages(props) {

    /* Step 15- below */
  const { text, photoURL, uid, displayName } = props.message;


    /* Step 16- */
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <div className={`message ${messageClass}`}>
      <img
        id="imgProfile"
    /* Step 15- below */
        src={photoURL}
        referrerPolicy="no-referrer"
        alt="profile"
      />
      <p>
        <b>{displayName || "User"}:</b>
        <br /> {text}
      </p>
    </div>
  );
}

export default Messages