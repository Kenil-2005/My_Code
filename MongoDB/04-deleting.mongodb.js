use("ecommerce");

// Use to Delete single record
db.contacts.deleteOne({ name: "Alice" });

// Use to delete Multiple records
db.orders.deleteMany({ status: "Delivered" });
