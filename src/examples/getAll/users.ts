import { database } from "../../database/database";
import { userModel } from "../../database/models/user";
import { populate } from "../../populator/Populate";
import { runExample } from "../../utils/runExample";

// use one of these commands to run this example

// npm run users
// yarn users

runExample(async () => {
  await database.init()
  await populate.users()

  const allUsers = await userModel.find({})

  console.log('Users populates.\n', allUsers)
})