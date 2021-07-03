# ![Logo](public/leaf.svg) MongoDB Examples
Created to help you building MongoDB queries.

## Available examples
<details>
<summary>Operators</summary>
### Query and Projection

- `$eq | $ne`: Equal | Not Equal
- `$in | $nin`: Selects the documents whose field holds an array that contains at least one element that matches a value in the specified array
- `$gt | $gte`: Greater than | Greater than or equal
- `$lt | $lte`: Less than | Less than or equal

</details>

## Usage
1. Clone the repository.
2. Install depedencies:
```bash
	$ npm install
```
3. In root create a `.env` file and write your mongodb uri following the example.
```
MONGO_URI=mongodb://user:password@host:port/authDB
```
4. In `src/examples` switch a example file and use the commented command on file to run the example.
> It will create a database named 'mongodb-examples', create documents and populate them as needed before run the example.
