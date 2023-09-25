/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    { id: 1, task: 'one', status: false, createdOn: knex.fn.now() },
    { id: 2, task: 'tow', status: false, createdOn: knex.fn.now() },
  ]);
};
