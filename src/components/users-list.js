import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    };
    fetchData();
  }, []);

  const userRows = users.map((user, index) => (
    <li key={index} className="bg-white p-4 rounded shadow-lg mb-4 mr-4">
      <span className="text-output">{user.name}</span>
    </li>
  ));

  return (
    <div className="px-4">
      <div className="flex container mx-auto">
        <div>
          <h1 className="mb-4">List of Users</h1>
          <ul className="flex flex-wrap">{userRows}</ul>
        </div>
      </div>
    </div>
  );
}
