import { userModel } from "../database/models/user";
import { usersPopulateData } from "./data/users";

class Populate {
  async users() {
    await userModel.deleteMany({})
    await userModel.insertMany(usersPopulateData)
  }
}

const populate = new Populate()

export { populate }