import { database } from "../../../database/database"
import { userModel } from "../../../database/models/user"
import { populate } from "../../../populator/Populate"
import { runExample } from "../../../utils/runExample"

// use one of these commands to run this example
// npm run dev src/examples/operators/query-and-projection/equal.ts
// yarn dev src/examples/operators/query-and-projection/equal.ts

// Use `npm run users` to get the users collection

runExample(async () => {
  await database.init()
  await populate.users()

  const users = await userModel.find({
    age: 27
  })
 
  console.log(users)
})