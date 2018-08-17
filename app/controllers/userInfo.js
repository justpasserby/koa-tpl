import userHelper from "../dbHelper/userHelper";

export default {
  async getUser(ctx) {
    const data = await userHelper.getUser();

    ctx.body = {
      data: data
    };
  }
}