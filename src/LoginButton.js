import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { Button, MenuItem, TextField } from "@mui/material";


function LoginButton({setUser}) {
 
    function logIn() {
      var provider = new firebase.auth.GoogleAuthProvider(); 
      firebase.auth().signInWithPopup(provider).then(function(result) {
        console.log(result.user);
        setUser(result.user);
      }).catch(function(error) {
        console.log(error);
     });
    }
  
    return (
      <Button onClick={() => logIn()}>
        Login
      </Button>
  );
    }
  
  export default LoginButton;