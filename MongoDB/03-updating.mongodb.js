use("ecommers");

// To update single record.
db.products.updateOne(
  {
    name: "Wireless Mouse",
  },
  { $set: { price: 899 } }, // set is use to set the data
);

// To update may records at once
db.products.updateMany(
  {
    category: "Electronics",
  },
  { $inc: { stock: 10 } }, // inc(increse) is use to increass data
);

db.products.updateOne(
  {
    name: "Wireless Mouse",
  },
  { $push: { tags: "new" } }, // puch is use too add elements to array
);

