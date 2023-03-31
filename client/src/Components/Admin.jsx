import React, { useEffect, useState } from "react";

import "./Admin.css";
import axios from "axios";

function Admin() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3000/contact");
      setContacts(response.data);
    })();
  }, []);

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>contact</th>
          </tr>
        </thead>
        {contacts &&
          contacts.map((val, key) => {
            return (
              <tbody key={key}>
                <tr>
                  <td>{key + 1} </td>
                  <td>{val.firstName} </td>
                  <td>{val.lastName}</td>
                  <td>{val.email}</td>
                  <td>{val.phone}</td>
                  <td>{val.message}</td>
                  <td>
                    <a href={`mailto:${val.email}`}>Send email</a>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
}

export default Admin;
