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

  const fetchMessages = async (authToken: string, pageNum = 1, query = "") => {
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

      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();

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

  // Debounced search
  useEffect(() => {
    if (!token) return;
    const timer = setTimeout(() => fetchMessages(token, 1, search), 500);
    return () => clearTimeout(timer);
  }, [search]);

  const totalPages = Math.ceil(count / 5);

  const deleteMessage = async (id: number) => {
    if (!token || !confirm("Delete this message?")) return;
    await fetch(`${import.meta.env.VITE_CELAB_API}/contact/admin/${id}/`, {
      method: "DELETE",
      headers: { Authorization: `Token ${token}` },
    });
    fetchMessages(token, page, search);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow-md">

        {/* Header + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <input
            type="text"
            placeholder="Search messages…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 px-3 py-2 rounded w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Loading / Error */}
        {loading && <p className="text-center text-gray-500">Loading…</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Id</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Email</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Message</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Time</th> 
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {messages.map((msg) => (
                <tr key={msg.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{msg.id}</td>
                  <td className="px-4 py-2">{msg.name}</td>
                  <td className="px-4 py-2">{msg.email}</td>
                  <td className="px-4 py-2 max-w-md break-words whitespace-normal">{msg.message}</td>
                  <td className="px-4 py-2">{new Date(msg.created_at).toLocaleString()}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => (window.location.href = `mailto:${msg.email}`)}
                    >
                     
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-2">
          <button
            disabled={page === 1}
            onClick={() => fetchMessages(token!, page - 1, search)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-gray-700">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => fetchMessages(token!, page + 1, search)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
