import { config } from 'dotenv'
config()

function runExample(fn: () => Promise<void>) {
  fn()
    .then(() => {
      process.exit()
    })
    .catch(error => {
      console.error(error)
      process.exit(1)
    })
}

export { runExample }