import {
  divider,
  errorClass,
  formCard,
  formGroup,
  formTitle,
  inputClass,
  labelClass,
  pageBackground,
  submitBtn,
  mutedText,
  linkClass,
} from "../styles/common";

import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axiosClient";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  const onUserRegister = async (userObj) => {
    const formData = new FormData();

    formData.append("role", userObj.role);
    formData.append("firstName", userObj.firstName);
    formData.append("lastName", userObj.lastName);
    formData.append("email", userObj.email);
    formData.append("password", userObj.password);

    if (userObj.profileImage?.[0]) {
      formData.append("profileImage", userObj.profileImage[0]);
    }

    try {
      setLoading(true);
      setApiError(null);

      const res = await api.post("/user-api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 201) {
        navigate("/login");
      }
    } catch (err) {
      setApiError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`${pageBackground} flex items-center justify-center py-16 px-4`}
    >
      <div
        className={`${formCard} max-w-3xl border border-gray-200 shadow-xl`}
      >
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#0066cc] mb-4">
            Join MyBlog
          </p>

          <h2 className={formTitle}>
            Create a writer-friendly account
          </h2>

          <p className="text-sm text-[#6e6e73] max-w-2xl mx-auto leading-relaxed">
            Choose a role, upload a profile image, and get started publishing
            or exploring stories instantly.
          </p>
        </div>

        {/* API Error */}
        {apiError && (
          <p className={`${errorClass} mb-5`}>
            {apiError}
          </p>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onUserRegister)}>

          {/* Role Selection */}
          <div className="grid gap-5 md:grid-cols-3 mb-6">

            {["USER", "AUTHOR", "ADMIN"].map((role) => (
              <label
                key={role}
                className="border border-gray-300 rounded-2xl p-5 cursor-pointer hover:border-black transition-all duration-300 bg-white flex items-center gap-3"
              >
                <input
                  type="radio"
                  value={role}
                  {...register("role", {
                    required: "Please select a role",
                  })}
                  className="accent-black w-4 h-4"
                />

                <span className="text-black text-sm font-semibold tracking-wide">
                  {role}
                </span>
              </label>
            ))}

          </div>

          {errors.role && (
            <p className={`${errorClass} mb-4`}>
              {errors.role.message}
            </p>
          )}

          {/* Name Fields */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-4">

            <div className={formGroup}>
              <label className={labelClass}>
                First Name
              </label>

              <input
                type="text"
                className={inputClass}
                {...register("firstName", {
                  required: "First name is required",
                })}
              />

              {errors.firstName && (
                <p className={errorClass}>
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className={formGroup}>
              <label className={labelClass}>
                Last Name
              </label>

              <input
                type="text"
                className={inputClass}
                {...register("lastName")}
              />
            </div>

          </div>

          {/* Email */}
          <div className={formGroup}>
            <label className={labelClass}>
              Email
            </label>

            <input
              type="email"
              className={inputClass}
              {...register("email", {
                required: "Email is required",
              })}
            />

            {errors.email && (
              <p className={errorClass}>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className={formGroup}>
            <label className={labelClass}>
              Password
            </label>

            <input
              type="password"
              className={inputClass}
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors.password && (
              <p className={errorClass}>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Profile Image */}
          <div className={formGroup}>
            <label className={labelClass}>
              Profile Image
            </label>

            <input
              type="file"
              className={inputClass}
              accept="image/png, image/jpeg"
              {...register("profileImage")}
              onChange={(e) => {
                const file = e.target.files[0];

                if (file) {
                  setPreview(URL.createObjectURL(file));
                }
              }}
            />

            {preview && (
              <div className="mt-5 flex justify-center">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={submitBtn}
            disabled={loading}
          >
            {loading
              ? "Creating account..."
              : "Create Account"}
          </button>

        </form>

        {/* Footer Link */}
        <p className={`${mutedText} text-center mt-7`}>
          Already have an account?{" "}

          <NavLink
            to="/login"
            className={linkClass}
          >
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Register;