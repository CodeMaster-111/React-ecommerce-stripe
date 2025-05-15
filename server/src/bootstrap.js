const { seedItems } = require('./seed/items');

module.exports = async ({ strapi }) => {
  if (process.env.NODE_ENV === 'development') {
    // Run the seeder
    await seedItems(strapi);
  }
}; 