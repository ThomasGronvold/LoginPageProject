import { useEffect, useState } from "react";
import { User } from "../helpers/types";

const HomePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5079/api/user");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();

        setUsers(data);
      } catch (err) {
        setError(String(err));
      }
    };
    fetchData();
  }, []);

  console.log(`Users: ${users} Error: ${error}`);

  return (
    <>
      <h1>You Are Logged In</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};

export default HomePage;
