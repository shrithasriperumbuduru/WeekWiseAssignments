import exp from "express";
const authorApp = exp.Router();

import expressAsyncHandler from "express-async-handler";
import multer from "multer";

import { ArticleModel } from "../models/ArticleModel.js";


// ================= MULTER CONFIG =================

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + "-" + file.originalname
    );
  },
});

const upload = multer({ storage });


// ================= CREATE ARTICLE =================

authorApp.post(
  "/article",

  upload.single("articleImage"),

  expressAsyncHandler(async (req, res) => {
    try {
      const {
        title,
        category,
        content,
        author,
      } = req.body;

      const newArticle = new ArticleModel({
        title,
        category,
        content,
        author,

        articleImage: req.file
          ? `/uploads/${req.file.filename}`
          : "",
      });

      const savedArticle =
        await newArticle.save();

      res.status(201).json({
        message:
          "Article published successfully",

        payload: savedArticle,
      });

    } catch (err) {
      console.log(err);

      res.status(500).json({
        error:
          "Failed to publish article",
      });
    }
  })
);


// ================= GET AUTHOR ARTICLES =================

authorApp.get(
  "/articles/:authorId",

  expressAsyncHandler(async (req, res) => {
    try {
      const { authorId } = req.params;

      const articles =
        await ArticleModel.find({
          author: authorId,
        }).sort({ createdAt: -1 });

      res.status(200).json({
        message: "Articles fetched",
        payload: articles,
      });

    } catch (err) {
      console.log(err);

      res.status(500).json({
        error:
          "Failed to fetch articles",
      });
    }
  })
);


// ================= UPDATE ARTICLE STATUS =================

authorApp.patch(
  "/articles",

  expressAsyncHandler(async (req, res) => {
    try {
      const {
        articleId,
        isArticleActive,
      } = req.body;

      const updatedArticle =
        await ArticleModel.findByIdAndUpdate(
          articleId,
          { isArticleActive },
          { new: true }
        );

      res.status(200).json({
        message:
          "Article updated successfully",

        payload: updatedArticle,
      });

    } catch (err) {
      console.log(err);

      res.status(500).json({
        error:
          "Failed to update article",
      });
    }
  })
);

export { authorApp };