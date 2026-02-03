import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const fetchedOnce = useRef(false);

  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const fetchMessages = async (
    authToken: string,
    pageNum = 1,
    query = ""
  ) => {
    if (loading) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_CELAB_API}/contact/admin/?page=${pageNum}&search=${query}`,
        {
          headers: {
            Authorization: `Token ${authToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data = await response.json();

      // 🔥 DRF-aligned
      setMessages(data.results);
      setCount(data.count);
      setPage(pageNum);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fetchedOnce.current) return;
    fetchedOnce.current = true;

    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      navigate("/login");
      return;
    }

    setToken(storedToken);
    fetchMessages(storedToken);
  }, [navigate]);

  // 🔍 Debounce search
  useEffect(() => {
    if (!token) return;

    const timer = setTimeout(() => {
      fetchMessages(token, 1, search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const totalPages = Math.ceil(count / 5);

  // 🗑 Delete message
  const deleteMessage = async (id: number) => {
    if (!token || !confirm("Delete this message?")) return;

    await fetch(
      `${import.meta.env.VITE_CELAB_API}/contact/admin/${id}/`,
      {
        method: "DELETE",
        headers: { Authorization: `Token ${token}` },
      }
    );

    fetchMessages(token, page, search);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-xl shadow">

        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <input
            placeholder="Search messages…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded"
          />
        </div>

        {loading && <p>Loading…</p>}
        {error && <p className="text-red-600">{error}</p>}

        <table className="w-full">
          <thead>
            <tr className="border-b text-left">
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
              <tr key={msg.id} className="border-b">
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td className="truncate max-w-md">{msg.message}</td>
                <td className="space-x-2">
                  <button
                    className="text-blue-600"
                    onClick={() =>
                      window.location.href = `mailto:${msg.email}`
                    }
                  >
                    Reply
                  </button>

                  <button
                    className="text-red-600"
                    onClick={() => deleteMessage(msg.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between mt-4">
          <button
            disabled={page === 1}
            onClick={() => fetchMessages(token!, page - 1, search)}
          >
            Previous
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => fetchMessages(token!, page + 1, search)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
