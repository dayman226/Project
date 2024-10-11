const mockLDAP = require("../utils/mockLDAP");

const getUsers = () => {
  return mockLDAP.getUsers();
};

const resetPassword = (username) => {
  const newPassword = "newPassword123";
  return mockLDAP.resetPassword(username, newPassword);
};

const disableUser = (username) => {
  return mockLDAP.disableUser(username);
};

module.exports = { getUsers, resetPassword, disableUser };
