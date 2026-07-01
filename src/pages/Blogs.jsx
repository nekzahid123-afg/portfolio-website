import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(
          collection(db, "posts"),
          where("status", "==", "approved"),
        );
        const snapshot = await getDocs(q);
        const approvedPosts = snapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .sort(
            (a, b) => (b.createdAt?.seconds ?? 0) - (a.createdAt?.seconds ?? 0),
          );

        setPosts(approvedPosts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto mt-8 sm:mt-10 px-4">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
        Blogs
      </h1>

      {posts.length === 0 && (
        <p className="text-center text-gray-600">No blogs yet.</p>
      )}

      {posts.map((post) => (
        <div key={post.id} className="border-b pb-6 mb-6">
          <h2 className="text-lg sm:text-2xl font-bold">{post.title}</h2>
          <p className="text-xs sm:text-sm text-gray-500 mb-2">
            By {post.authorName}
          </p>
          <p className="text-base whitespace-pre-line leading-relaxed">
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
}
