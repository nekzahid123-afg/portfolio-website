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
      <div className="text-center mt-12">
        <p className="text-lg">You must be logged in to write a blog.</p>
        <button
          onClick={() => navigate("/auth")}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
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
    <div className="flex flex-col items-center mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Write a Blog</h1>

      {success && (
        <p className="text-green-600 mb-4">
          Submitted! Your post is pending approval.
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Blog title (Header)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded px-4 py-2 text-lg font-bold"
        />

        <textarea
          placeholder="Write your blog content here (Body)"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={10}
          className="border rounded px-4 py-2"
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="bg-green-800 text-white py-2 rounded hover:bg-gray-700"
        >
          Submit for Approval
        </button>
      </form>
    </div>
  );
}
