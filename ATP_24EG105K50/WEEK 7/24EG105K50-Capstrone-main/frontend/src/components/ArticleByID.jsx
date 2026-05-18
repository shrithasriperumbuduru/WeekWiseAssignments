import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axiosClient";
import { useAuth } from "../store/authStore";
import { toast } from "react-hot-toast";

function ArticleByID() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const user = useAuth((state) => state.currentUser);

  const [article, setArticle] = useState(location.state || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (article) return;

    const getArticle = async () => {
      setLoading(true);

      try {
        const res = await api.get(`/user-api/article/${id}`);
        setArticle(res.data.payload);
      } catch (err) {
        setError(
          err.response?.data?.error || "Unable to load article."
        );
      } finally {
        setLoading(false);
      }
    };

    getArticle();
  }, [article, id]);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const toggleArticleStatus = async () => {
    const newStatus = !article.isArticleActive;

    const confirmMsg = newStatus
      ? "Restore this article?"
      : "Delete this article?";

    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await api.patch("/author-api/articles", {
        articleId: article._id,
        isArticleActive: newStatus,
      });

      setArticle(res.data.payload);

      toast.success(
        res.data.message || "Article status updated."
      );

    } catch (err) {
      const msg =
        err.response?.data?.message ||
        "Operation failed.";

      toast.error(msg);
      setError(msg);
    }
  };

  const editArticle = (articleObj) => {
    navigate("/edit-article", {
      state: articleObj,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">
        Loading article...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-red-400 flex items-center justify-center text-xl">
        {error}
      </div>
    );
  }

  if (!article) return null;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      <div className="max-w-4xl mx-auto">

        {/* Category */}
        <p className="uppercase tracking-[0.35em] text-sm text-gray-400 mb-6">
          {article.category || "General"}
        </p>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-10 text-white uppercase">
          {article.title}
        </h1>

        {/* Author Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-y border-white/10 py-5 mb-14 text-gray-300 gap-4">

          <div className="flex items-center gap-3 text-lg">
            <span>✍️</span>

            <span>
              {article.author?.firstName ||
                user?.firstName ||
                "Author"}
            </span>
          </div>

          <div className="text-sm tracking-wide">
            {formatDate(article.createdAt)}
          </div>

        </div>

{/* Article Image */}
{article.imageURL && (
  <img
    src={article.imageURL}
    alt="Article"
    className="w-full h-[450px] object-cover rounded-[2rem] mb-14 shadow-2xl"
  />
)}

        {/* Article Content */}
        <div className="text-gray-200 text-xl leading-[2.3rem] space-y-10 font-light">

          {article.content
            ?.split("\n")
            .filter((para) => para.trim() !== "")
            .map((para, index) => (
              <p key={index}>
                {para}
              </p>
            ))}

        </div>

        {/* Action Buttons */}
        {user?.role === "AUTHOR" && (
          <div className="flex gap-5 mt-16">

            <button
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-105 transition duration-300"
              onClick={() => editArticle(article)}
            >
              Edit Article
            </button>

            <button
              className="border border-red-400 text-red-400 px-8 py-3 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
              onClick={toggleArticleStatus}
            >
              {article.isArticleActive
                ? "Delete Article"
                : "Restore Article"}
            </button>

          </div>
        )}

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-gray-500 text-sm">
          Last updated: {formatDate(article.updatedAt)}
        </div>

      </div>

    </div>
  );
}

export default ArticleByID;