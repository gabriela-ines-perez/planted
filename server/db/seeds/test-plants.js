/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('plants').del()
  await knex('plants').insert([
    {
      id: 1,
      name: 'Jerry',
      species: 'monserta',
      image: 'monstera.webp',
      extID: 426,
    },
    {
      id: 2,
      name: 'Joy',
      species: 'snake plant',
      image: 'snake-plant.jpeg',
      extID: 426,
    },
    {
      id: 3,
      name: 'Lip',
      species: 'heart leaf philodendron',
      image: 'heart-leaf-philodendron.jpeg',
      extID: 426,
    },
  ])
}
