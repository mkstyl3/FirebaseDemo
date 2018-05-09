document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app);

 });

 function googleLogin() {
     const provider = new firebase.auth.GoogleAuthProvider();

     firebase.auth().signInWithPopup(provider)
        .then( result => {
            const user = result.user;
            user.sendEmailVerification().then(function() {
            // Email sent.
            }).catch(function(error) {
            // An error happened.
            });
            document.write(`Hello ${user.displayName}`);
            console.log(user);
        })
        .catch(console.log)
 
  }

  