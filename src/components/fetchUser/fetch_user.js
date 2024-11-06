import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
      } catch (err) {
        setError("Gagal mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={user.avatar_url}
              alt={user.login}
              width={200}
              height={200}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{user.login}</h2>
              <p className="text-gray-600">{user.type}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
