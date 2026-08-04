use("ecommerce");

// Create index in the DataBase
db.products.createIndex({ name: 1 });

// Display all index use in DataBase
db.products.getIndexes();
