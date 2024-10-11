const express = require("express");
const router = express.Router();
const { getUsers, resetPassword, disableUser } = require("../services/adService");

router.get("/users", (req, res) => {
  const users = getUsers();
  res.json(users);
});

router.post("/users/:username/reset-password", (req, res) => {
  const { username } = req.params;
  resetPassword(username);
  res.json({ success: true });
});

router.post("/users/:username/disable", (req, res) => {
  const { username } = req.params;
  disableUser(username);
  res.json({ success: true });
});

module.exports = router;
