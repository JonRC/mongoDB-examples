import { database } from "../../../database/database"
import { userModel } from "../../../database/models/user"
import { populate } from "../../../populator/Populate"
import { runExample } from "../../../utils/runExample"

// use one of these commands to run this example

// npm run dev src/examples/operators/query-and-projection/lessThanOrEqual.ts
// yarn dev src/examples/operators/query-and-projection/lessThanOrEqual.ts

runExample(async () => {
  await database.init()
  await populate.users()

  const users = await userModel.find({
    age: { $lte: 25 }
  })

  console.log(users)
})