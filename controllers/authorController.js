const Author = require("../models/author");
const asyncHandler = require("express-async-handler");

exports.author_list = asyncHandler(async (req, res, next) => {
  res.send("Not implemented :author list");
});

exports.author_details = asyncHandler(async (req, res, next) => {
  res.send(`Not implemented : Author details :${req.params.id}`);
});xit
exit


//display author create form  on get
exports.author_create_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: author create Get");
});

//handle author create on post
exports.author_create_post = asyncHandler(async (req, res, next) => {
  res.send("not implemented: author create post");
});

//display author delete form  on get
exports.author_delete_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: author delete Get");
});

//handle author delete on post
exports.author_delete_post = asyncHandler(async (req, res, next) => {
  res.send("not implemented: author delete post");
});


//display author update form  on get
exports.author_update_get = asyncHandler(async (req, res, next) => {
  res.send("Not implemented: author update Get");
});

//handle author update on post
exports.author_update_post = asyncHandler(async (req, res, next) => {
  res.send("not implemented: author update post");
});