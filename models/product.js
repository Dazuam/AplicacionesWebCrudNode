const knex = require('../database/connection');

exports.all = () => {
    return knex
        .select('*')
        .from('products');
}

exports.create = (product) => {
    return knex('products')
        .insert({
            name: product.name,
            price: product.price,
            description: product.description
        });
}

exports.find = (id) => {
    return knex
      .select('*')
      .from('products')
      .where('id', id)
      .first();
}