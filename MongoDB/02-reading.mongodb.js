use("ecommerce");

// To filter out base on requerment
db.products.find({ category: "Electronics" });

// Use mathematical operator(gt = graterthen, lt = Lessthen, gte = greterthenequalto, lte = lessthenequalto)
db.products.find({ price: { $gt: 1000 } }); // greater than 1000
db.products.find({ price: { $gte: 1000, $lte: 50000 } });

// We can use or operator
db.products.find({
  $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }],
});

// To select specific fields (1 select, 0 unselect)
db.products.find({}, { name: 1, price: 1, _id: 0 });

// Use for Sorting and Limiting
db.products.find().sort({ price: -1 }).limit(2);

// Use for pagination
db.products.find().skip(0).limit(10); // give first 10 records
db.products.find().skip(10).limit(10); // give 11-20 records
db.products.find().skip(20).limit(10); // give 21-30 records and so on
