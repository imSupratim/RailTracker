import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-10"
    >
      <div className="flex items-center bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">

        <input
          type="text"
          placeholder="Search by Train Number or Train Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent px-5 py-4 outline-none"
        />

        <button
          className="bg-blue-600 hover:bg-blue-700 px-6 py-4"
        >
          <Search size={22} />
        </button>

      </div>
    </form>
  );
}