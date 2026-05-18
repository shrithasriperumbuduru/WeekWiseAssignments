import { useEffect, useState } from "react";
import api from "../api/axiosClient";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/authStore";

function AuthorArticles() {
  const navigate = useNavigate();
  const user = useAuth((state) => state.currentUser);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?._id) return;

    const getAuthorArticles = async () => {
      try {
        setLoading(true);

        const res = await api.get(
          `/author-api/articles/${user._id}`
        );

        if (res.status === 200) {
          setArticles(res.data.payload);
        }

      } catch (err) {
        console.log(err);

        setError(
          err.response?.data?.error ||
          "Failed to fetch articles"
        );

      } finally {
        setLoading(false);
      }
    };

    getAuthorArticles();

  }, [user]);

  const openArticle = (article) => {
    navigate(`/article/${article._id}`, {
      state: article,
    });
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(
      "en-IN",
      {
        dateStyle: "medium",
      }
    );
  };

  if (loading) {
    return (
      <div className="text-center text-white py-20 text-xl">
        Loading articles...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-950 border border-red-500 text-red-300 p-5 rounded-2xl">
        {error}
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="text-center text-gray-400 py-20 text-lg">
        You haven't published any articles yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div
          key={article._id}
          className="bg-[#111111] border border-white/10 rounded-[30px] overflow-hidden shadow-2xl hover:scale-[1.02] transition duration-300 flex flex-col"
        >

          {/* ARTICLE IMAGE */}
          <img
            src={
              article.articleImage
                ? `http://localhost:5000${article.articleImage}`
                : "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1974&auto=format&fit=crop"
            }
            alt="Article"
            className="w-full h-60 object-cover"
          />

          {/* CONTENT */}
          <div className="p-6 flex flex-col flex-1">

            {/* STATUS */}
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold tracking-wider ${
                  article.isArticleActive
                    ? "bg-green-500/20 text-green-300"
                    : "bg-red-500/20 text-red-300"
                }`}
              >
                {article.isArticleActive
                  ? "ACTIVE"
                  : "DELETED"}
              </span>

              <span className="text-gray-500 text-sm">
                {formatDate(article.createdAt)}
              </span>
            </div>

            {/* CATEGORY */}
            <p className="uppercase tracking-[0.2em] text-gray-500 text-xs mb-3">
              {article.category}
            </p>

            {/* TITLE */}
            <h2 className="text-2xl font-serif text-white leading-snug mb-4">
              {article.title}
            </h2>

            {/* CONTENT */}
            <p className="text-gray-400 leading-relaxed mb-8 flex-1">
              {article.content.slice(0, 120)}...
            </p>

            {/* BUTTON */}
            <button
              onClick={() => openArticle(article)}
              className="w-full border border-white/20 text-white py-3 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Read Article
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AuthorArticles;