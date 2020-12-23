const faker = require('faker');

const accounts = [
  {
    _id: faker.random.uuid(),
    user_id: '{123e4567-e89b-12d3-a456-426652340000}',
    Account_Types_id: '{1addb46d-4085-4fe6-b66d-e28cc7f5570d}',
    description: 'checking',
    balance: 1000,
    rate: 1,
  },
];

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Accounts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('Accounts').insert(accounts);
    });
};
