import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContextValue";

const ADMIN_UID = "bGXTid5j3VUOrhb5y9hHiSVKLR73";

export default function AdminApprove() {
  const { currentUser } = useAuth();
  const [pendingPosts, setPendingPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getPendingPosts = async () => {
    const q = query(collection(db, "posts"), where("status", "==", "pending"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const refreshPendingPosts = async () => {
    setLoading(true);
    setError("");

    try {
      setPendingPosts(await getPendingPosts());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentUser?.uid !== ADMIN_UID) return;

    let ignore = false;

    async function loadPendingPosts() {
      try {
        const posts = await getPendingPosts();
        if (!ignore) {
          setPendingPosts(posts);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadPendingPosts();

    return () => {
      ignore = true;
    };
  }, [currentUser]);

  const approvePost = async (id) => {
    setError("");

    try {
      await updateDoc(doc(db, "posts", id), { status: "approved" });
      refreshPendingPosts();
    } catch (err) {
      setError(err.message);
    }
  };

  if (currentUser?.uid !== ADMIN_UID) {
    return <p className="mt-10 text-center">Access denied.</p>;
  }

  return (
    <div className="mx-auto mt-8 sm:mt-10 w-full max-w-3xl px-4">
      <h1 className="mb-6 sm:mb-8 text-2xl sm:text-3xl font-bold">
        Pending Posts
      </h1>

      {loading && <p className="text-center">Loading pending posts...</p>}
      {error && (
        <p className="mb-4 text-red-600 bg-red-50 px-4 py-2 rounded border-l-4 border-red-600">
          {error}
        </p>
      )}

      {!loading && pendingPosts.length === 0 && (
        <p className="text-center">No pending posts.</p>
      )}

      {pendingPosts.map((post) => (
        <div key={post.id} className="mb-6 border-b pb-6">
          <h2 className="text-lg sm:text-xl font-bold">{post.title}</h2>
          <p className="mb-2 text-sm text-gray-500">By {post.authorName}</p>
          <p className="mb-3 text-base whitespace-pre-line">{post.body}</p>
          <button
            onClick={() => approvePost(post.id)}
            className="rounded bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700 active:bg-blue-800 transition border-2 border-blue-600 cursor-pointer"
          >
            Approve
          </button>
        </div>
      ))}
    </div>
  );
}
