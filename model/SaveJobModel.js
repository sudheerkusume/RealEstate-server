const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
            required: true,
        },
        jobId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "jobcategories",
            required: true,
        },
    },
    { timestamps: true }
);

// Prevent duplicate saves
savedJobSchema.index({ userId: 1, jobId: 1 }, { unique: true });

module.exports = mongoose.model("SavedJob", savedJobSchema);
