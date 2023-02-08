import React, { useState, useEffect } from "react";
import SessionContext from "./SessionContext";

export default function SessionProvider({ children }) {
  const [role, setRole] = useState({ message: "Student" });
  // const [roleStatus, setRoleStatus] = useState('')

  const [session, setSession] = useState({
    user: { access_token: localStorage.getItem("access_token") },
  });

  function updateSession(nextSession) {
    let value =
      typeof nextSession === "function"
        ? nextSession
        : (prevSession) => ({ ...prevSession, ...nextSession });
    setSession(value);
  }

  const verifyUser = async () => {
    const response = await fetch("http://localhost:8000/api/verify", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session.user.access_token}`,
      },
    });

    const result = await response.json();
    setRole(prevPerson => {
      return { 
        ...prevPerson, 
        message: result.message
      }
    })
  };


  useEffect(() => {
    let user_name = localStorage.getItem("firstname");
    let access_token = localStorage.getItem("access_token");
    let user = { user_name, access_token };
    updateSession({ user });
    verifyUser();
  }, []);

  async function loginDoctor(email, password) {
    const body = new FormData();
    body.append("email", email);
    body.append("password", password);
    const response = await fetch("http://localhost:8000/api/admins/login", {
      method: "post",
      body,
    });
    const result = await response.json();
    setRole({message : result.role})
    if (result.error) {
    } else {
      const { access_token, firstname, id } = result;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("name", firstname);
      localStorage.setItem("id", id);
      const user = { access_token, firstname, id };
      updateSession({ user });
    }
  }

  async function loginStudent(email, password) {
    const body = new FormData();
    body.append("email", email);
    body.append("password", password);
    const response = await fetch("http://localhost:8000/api/users/login", {
      method: "post",
      body,
    });
    const result = await response.json();
    if (result.error) {
    } else {
      const { access_token, firstname, id } = result;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("name", firstname);
      localStorage.setItem("id", id);
      const user = { access_token, firstname, id };
      updateSession({ user });
    }
  }

  function logout() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    setRole("");
    const user = { access_token: null, firstname: null };
    updateSession({ user });
    setRole({ message: "Student" });
  }

  const context = {
    session,
    actions: { loginDoctor, loginStudent, logout },
    role,
  };
  return (
    <SessionContext.Provider value={context}>
      {children}
    </SessionContext.Provider>
  );
}
