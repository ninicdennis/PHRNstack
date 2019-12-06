
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('test_table').del()
    .then(function () {
      // Inserts seed entries
      return knex('test_table').insert([
        {id: 1, data: 'Backend Hookup Success'}
      ]);
    });
};
