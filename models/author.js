const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

//virtual author full name
AuthorSchema.virtual("name").get(function () {
  let fullname = "";
  if (this.first_name && this.family_name) {
    fullname = `${this.first_name}, ${this.first_name}`;
  }
  return fullname;
});
// virtuals for authors url
AuthorSchema.virtual("url").get(function () {
  return `catalog/author/${this._id}`;
});

MediaSourceHandle.exports = mongoose.model("Author", AuthorSchema);
