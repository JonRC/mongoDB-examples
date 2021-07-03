import { config } from 'dotenv'
config()

import { connect, ConnectOptions } from 'mongoose'

class Database {
  constructor(
    private uri = process.env.MONGO_URI
  ) { }

  async init() {
    const connectOptions: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'mongodb-examples'
    }

    return connect(this.uri, connectOptions)
  }
}

const database = new Database()

export { database }