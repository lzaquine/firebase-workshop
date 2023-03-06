import firebase from '../FirebaseConfig'
const auth = firebase.auth();

function SignOut() {
    return (
      auth.currentUser && (
        <button className="button-57" onClick={() => auth.signOut()}>
          <span className="text">Sign Out</span>
          <span>Don't 😢</span>
        </button>
      )
    );
  }

export default SignOut