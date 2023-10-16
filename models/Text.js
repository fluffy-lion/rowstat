import mongoose from "mongoose";

const TextSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxlength: 60,
  },

});

const Text = mongoose.models.Text || mongoose.model("Text", TextSchema);

export default Text;