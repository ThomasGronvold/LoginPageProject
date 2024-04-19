import { useState } from "react";
import "./app.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
// Page imports
import LoginForm from "./pages/loginFormPage";
import HomePage from "./pages/homePage";
import Error from "./pages/NotFoundPage";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, /* setAuth */] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuth ? <HomePage /> : <Navigate to="/logIn" />,
      errorElement: <Error />,
    },
    {
      path: "/LogIn",
      element: (
        <LoginForm
          onUsernameChange={handleUsernameChange}
          onPasswordChange={handlePasswordChange}
          onSubmit={handleLoginSubmit}
        />
      ),
    },
  ]);

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
    console.log(username);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    console.log(password);
  }

  function handleLoginSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const firstInputValue = (event.currentTarget[0] as HTMLInputElement).value;
    console.log(firstInputValue);
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
