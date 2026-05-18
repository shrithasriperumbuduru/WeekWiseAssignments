import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../api/axiosClient";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import {
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  loadingClass,
} from "../styles/common";

import { useAuth } from "../store/authStore";

function WriteArticles() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [articleImage, setArticleImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const currentUser = useAuth(
    (state) => state.currentUser
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitArticle = async (articleObj) => {
    setLoading(true);

    try {
      const formData = new FormData();

      formData.append("title", articleObj.title);

      formData.append(
        "category",
        articleObj.category
      );

      formData.append(
        "content",
        articleObj.content
      );

      formData.append(
        "author",
        currentUser._id
      );

      if (articleImage) {
        formData.append(
          "articleImage",
          articleImage
        );
      }

      const res = await api.post(
        "/author-api/article",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        toast.success(
          "Article published successfully"
        );

        navigate("../articles");
      }

    } catch (err) {
      toast.error(
        err.response?.data?.error ||
          "Failed to publish article"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${formCard} max-w-4xl mx-auto border border-gray-200 shadow-2xl`}
    >
      <h2 className={`${formTitle} mb-10`}>
        Write New Article
      </h2>

      <form onSubmit={handleSubmit(submitArticle)}>

        {/* Title */}
        <div className={formGroup}>

          <label className={labelClass}>
            Title
          </label>

          <input
            type="text"
            className={inputClass}
            placeholder="Enter article title"
            {...register("title", {
              required: "Title is required",

              minLength: {
                value: 5,
                message:
                  "Title must be at least 5 characters",
              },
            })}
          />

          {errors.title && (
            <p className={errorClass}>
              {errors.title.message}
            </p>
          )}

        </div>

        {/* Category */}
        <div className={formGroup}>

          <label className={labelClass}>
            Category
          </label>

          <select
            className={inputClass}
            {...register("category", {
              required:
                "Category is required",
            })}
          >
            <option value="">
              Select category
            </option>

            <option value="technology">
              Technology
            </option>

            <option value="programming">
              Programming
            </option>

            <option value="ai">
              AI
            </option>

            <option value="web-development">
              Web Development
            </option>

          </select>

          {errors.category && (
            <p className={errorClass}>
              {errors.category.message}
            </p>
          )}

        </div>

        {/* Article Image */}
        <div className={formGroup}>

          <label className={labelClass}>
            Article Image
          </label>

          <input
            type="file"
            accept="image/*"
            className={inputClass}
            onChange={(e) => {
              const file =
                e.target.files[0];

              setArticleImage(file);

              if (file) {
                setPreview(
                  URL.createObjectURL(file)
                );
              }
            }}
          />

          {preview && (
            <div className="mt-6">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-72 object-cover rounded-3xl shadow-xl"
              />
            </div>
          )}

        </div>

        {/* Content */}
        <div className={formGroup}>

          <label className={labelClass}>
            Content
          </label>

          <textarea
            rows="12"
            className={`${inputClass} resize-none`}
            placeholder="Write your article content..."
            {...register("content", {
              required:
                "Content is required",

              minLength: {
                value: 50,
                message:
                  "Content must be at least 50 characters",
              },
            })}
          />

          {errors.content && (
            <p className={errorClass}>
              {errors.content.message}
            </p>
          )}

        </div>

        {/* Submit Button */}
        <button
          className={submitBtn}
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Publishing..."
            : "Publish Article"}
        </button>

        {/* Loading */}
        {loading && (
          <p className={loadingClass}>
            Publishing article...
          </p>
        )}

      </form>
    </div>
  );
}

export default WriteArticles;