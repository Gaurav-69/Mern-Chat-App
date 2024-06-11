const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { sendMessage, allMessages } = require("../controller/messageController");

const router = express.Router();

router.route("/").post(protect, sendMessage);
router.route("/:chatId").get(protect, allMessages); // Changed ChatId to chatId

module.exports = router;
