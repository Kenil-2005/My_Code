use("ecommerce");

db.sales.insertMany([
  { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
  { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
  { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
  { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
  { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" },
]);

/**  What is aggregation
 * Each stage takes input (your data)
 * Performs some operation (like filtering, sorting, grouping)
 * Sends the result to the next stage
 */

// This give fruit with items and price
db.sales.aggregate([
  { $match: { category: "Fruit" } }, // Match given category
  { $project: { _id: 0, item: 1, price: 1 } }, // Select specific fields (1 select, 0 unselect)
]);

// use to group by
db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalSales: { $sum: { $multiply: ["$price", "$quantity"] } },
    },
  }, // Use to group by
  { $sort: { totalSales: -1 } }, // Use for Sorting Records
]);
