const items = [
  {
    name: "Classic White Sneakers",
    shortDescription: "Comfortable and stylish white sneakers for everyday wear",
    longDescription: "These classic white sneakers are perfect for any casual outfit. Made with high-quality materials and designed for comfort.",
    price: 89.99,
    category: "newArrivals"
  },
  {
    name: "Leather Backpack",
    shortDescription: "Durable leather backpack with multiple compartments",
    longDescription: "A versatile leather backpack perfect for work or travel. Features multiple compartments and laptop sleeve.",
    price: 129.99,
    category: "bestSellers"
  },
  {
    name: "Wireless Earbuds",
    shortDescription: "High-quality wireless earbuds with noise cancellation",
    longDescription: "Experience premium sound quality with these wireless earbuds. Features active noise cancellation and long battery life.",
    price: 199.99,
    category: "topRated"
  }
];

module.exports = {
  async seedItems(strapi) {
    try {
      // Check if items already exist
      const existingItems = await strapi.entityService.findMany('api::item.item');
      
      if (existingItems.length === 0) {
        // Add items if none exist
        for (const item of items) {
          await strapi.entityService.create('api::item.item', {
            data: {
              ...item,
              publishedAt: new Date()
            }
          });
        }
        console.log('Sample items have been created');
      } else {
        console.log('Items already exist in the database');
      }
    } catch (error) {
      console.error('Error seeding items:', error);
    }
  }
}; 