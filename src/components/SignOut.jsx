import React from 'react'



/* Step 7- below */



function SignOut() {
  return (
    /* Step 11- below */
    auth.currentUser && (
      <button className="button-57" onClick={() => auth.signOut()}>
        <span className="text">Sign Out</span>
        <span>Don't 😢</span>
      </button>
    )
  )
}

export default SignOut