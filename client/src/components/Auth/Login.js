import React from "react";
import { GoogleLogin } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {
  const onSuccess = (googleUser) => {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log(idToken);
  };

  return (
    <GoogleLogin
      clientId="634872894111-qie2q5s8k669hp3i3v7m2145rbn4gali.apps.googleusercontent.com"
      onSuccess={onSuccess}
      isSignedIn={true}
    />
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default withStyles(styles)(Login);
