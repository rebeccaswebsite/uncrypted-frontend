export const login = (loginEmail, loginPassword) => {
  const baseURL = "http://localhost:3000";
  const loginURL = baseURL + "/login";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginEmail,
      password: loginPassword
    })
  };

  return fetch(loginURL, options).then(resp => resp.json());
};

export default { login };
