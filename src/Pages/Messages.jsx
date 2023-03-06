import firebase from "../FirebaseConfig";
const auth = firebase.auth();

function Messages(props) {
  const { text, photoURL, uid, displayName } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img
        id="imgProfile"
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

export default Messages;
