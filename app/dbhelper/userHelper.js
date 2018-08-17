import User from "../models/user.js";

export default {
  async getUser() {
    return await User.find({})
  }
}