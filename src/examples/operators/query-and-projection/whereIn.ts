import { database } from "../../../database/database"
import { userModel } from "../../../database/models/user"
import { populate } from "../../../populator/Populate"
import { runExample } from "../../../utils/runExample"

// use one of these commands to run this example
// npm run dev src/examples/operators/query-and-projection/whereIn.ts
// yarn dev src/examples/operators/query-and-projection/whereIn.ts

// Use `npm run users` to get the users collection

runExample(async () => {
  await database.init()
  await populate.users()

  const users = await userModel.find({
    age: { $in: [38, 24] }
  })

  console.log(users)
})