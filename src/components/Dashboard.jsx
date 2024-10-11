import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("/api/ad/users");
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Active Directory Users</h3>
      <ul>
        {users.map(user => (
          <li key={user.username}>{user.username} - {user.ou}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
