import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { login } from "../services/api";

class LoginForm extends React.PureComponent {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = () => {
    login(this.state.email, this.state.password).then(data => {
      if (data.error) {
        alert(data.error);
      } else {
        this.props.login(data.id, data.username);
      }
    });
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        <TextField
          id="emailInput"
          label="email"
          value={email}
          onChange={handleChange}
          margin="normal"
          name="email"
        />
        <br />
        <TextField
          id="passwordInput"
          label="Password"
          value={password}
          onChange={handleChange}
          margin="normal"
          name="password"
          type="password"
        />
        <br />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          SUBMIT
        </Button>
      </div>
    );
  }
}

export default LoginForm;
