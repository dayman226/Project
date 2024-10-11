const testUsers = [
  {
    username: "admin1",
    password: "admin123",
    groups: ["AdminGroup"],
    ou: "IT Department",
    isDisabled: false,
  },
  {
    username: "user1",
    password: "user123",
    groups: ["UserGroup"],
    ou: "Sales",
    isDisabled: false,
  },
  {
    username: "user2",
    password: "user234",
    groups: ["UserGroup"],
    ou: "HR",
    isDisabled: true,
  },
];

const mockLDAP = {
  authenticate(username, password) {
    const user = testUsers.find((user) => user.username === username && user.password === password);
    if (user) {
      return user;
    } else {
      throw new Error("Invalid credentials");
    }
  },

  getUsers() {
    return testUsers;
  },

  resetPassword(username, newPassword) {
    const user = testUsers.find((user) => user.username === username);
    if (user) {
      user.password = newPassword;
      return true;
    } else {
      throw new Error("User not found");
    }
  },

  disableUser(username) {
    const user = testUsers.find((user) => user.username === username);
    if (user) {
      user.isDisabled = true;
      return true;
    } else {
      throw new Error("User not found");
    }
  }
};

module.exports = mockLDAP;
