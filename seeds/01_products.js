
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Sketch', description: '15 minutes at most', price:'15'},
        {id: 2, name: 'Lineart', description: 'Clean lines aww yiss', price:'20'},
        {id: 3, name: 'Flat Colors', description: 'Bruh, basic of the basic', price:'25'}
      ]);
    });
};