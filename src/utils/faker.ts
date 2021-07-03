import faker from 'faker'

for (let i = 0; i <= 5; i++) {
  console.log('name:', faker.name.findName(), faker.name.lastName())
  console.log('email:', faker.internet.email())
  console.log('age:', faker.datatype.number(60))
}