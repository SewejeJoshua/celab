import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Fetch messages
  const fetchMessages = async (authToken: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_CELAB_API}/contact/admin/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${authToken}`, // ✅ required by DRF
          },
        }
      );

      if (response.status === 401 || response.status === 403) {
        throw new Error("Not authorized. Please login.");
      }

      const data = await response.json();
      setMessages(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load token and fetch messages
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      navigate("/login");
      return;
    }

    setToken(storedToken);
    fetchMessages(storedToken);
  }, [navigate]);

  if (!token) return null; // wait until token is ready

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={() => token && fetchMessages(token)}
            className="px-4 py-2 bg-black text-white rounded hover:opacity-80 transition"
          >
            Refresh
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          {loading && <p className="text-gray-500 text-center">Loading messages...</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}
          {!loading && !error && messages.length === 0 && (
            <p className="text-gray-500 text-center">No messages found.</p>
          )}
          {!loading && !error && messages.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm uppercase text-gray-600">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Message</th>
                    <th className="p-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg) => (
                    <tr key={msg.id} className="border-t hover:bg-gray-50 transition">
                      <td className="p-3 font-medium text-gray-800">{msg.name}</td>
                      <td className="p-3 text-gray-600">{msg.email}</td>
                      <td className="p-3 text-gray-700 max-w-md truncate">{msg.message}</td>
                      <td className="p-3 text-gray-500 text-sm">
                        {msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
