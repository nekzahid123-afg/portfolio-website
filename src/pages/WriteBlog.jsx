import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContextValue";

export default function WriteBlog() {
  const { currentUser } = useAuth();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  if (!currentUser) {
    return (
      <div className="flex flex-col items-center justify-center mt-12 px-4 py-8">
        <p className="text-base sm:text-lg mb-6 text-center text-gray-700">You must be logged in to write a blog.</p>
        <button
          onClick={() => navigate("/auth")}
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 active:bg-blue-800 transition border-2 border-blue-600 cursor-pointer"
        >
          Go to Login
        </button>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!title.trim() || !body.trim()) {
      setError("Please fill in both title and body.");
      return;
    }

    try {
      await addDoc(collection(db, "posts"), {
        title,
        body,
        authorId: currentUser.uid,
        authorName: currentUser.email,
        status: "pending",
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setTitle("");
      setBody("");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8 sm:mt-10 px-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Write a Blog</h1>

      {success && (
        <p className="text-green-600 mb-4 bg-green-50 px-4 py-2 rounded border-l-4 border-green-600">
          Submitted! Your post is pending approval.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Blog title (Header)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-2 border-gray-300 rounded px-4 py-2 text-base sm:text-lg font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />

        <textarea
          placeholder="Write your blog content here (Body)"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={10}
          className="border-2 border-gray-300 rounded px-4 py-2 text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
        />

        {error && <p className="text-red-600 text-sm bg-red-50 px-4 py-2 rounded border-l-4 border-red-600">{error}</p>}

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded font-semibold hover:bg-blue-700 active:bg-blue-800 transition border-2 border-blue-600 cursor-pointer"
        >
          Submit for Approval
        </button>
      </form>
    </div>
  );
}
