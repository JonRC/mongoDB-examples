import { database } from "../../../database/database"
import { userModel } from "../../../database/models/user"
import { populate } from "../../../populator/Populate"
import { runExample } from "../../../utils/runExample"

// use one of these commands to run this example

// npm run dev src/examples/operators/query-and-projection/lessThan.ts
// yarn dev src/examples/operators/query-and-projection/lessThan.ts

runExample(async () => {
  await database.init()
  await populate.users()

  const users = await userModel.find({
    age: { $lt: 25 }
  })

  console.log(users)
})