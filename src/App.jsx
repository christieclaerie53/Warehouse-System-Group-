import React from "react";
import App from "./App.jsx";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <div>
      {!user ? (
        <LoginForm onLogin={(email, password) => setUser({ email })} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;
