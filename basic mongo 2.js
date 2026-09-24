// 1. Switch to the admin database to create users
use admin;

// 2. Create a user with specific readWrite access to your target database
db.createUser({
  user: "appUser",
  pwd: "StrongPassword123!",
  roles: [
    { role: "readWrite", db: "eCommerceDB" }
  ]
});

// 3. Switch to your database and authenticate
use eCommerceDB;
db.users.updateOne(
  { email: "alex@example.com" },                          // Search filter
  { $set: { name: "Alex Rivera", lastLogin: new Date() } }, // Update data
  { upsert: true }                                        // Create if missing
);
db.orders.insertOne({
  orderId: "ORD-101",
  customerName: "Sam Taylor",
  // Embedded array of items
  items: [
    { name: "Laptop", price: 1200, qty: 1 },
    { name: "Mouse", price: 25, qty: 2 }
  ],
  shippingAddress: { street: "123 Main St", city: "Seattle", zip: "98101" }
});
// 1. Insert User
db.users.insertOne({
  _id: ObjectId("650000000000000000000001"),
  name: "Sam Taylor",
  email: "sam@example.com"
});

// 2. Reference User ID in Order Document
db.orders.insertOne({
  orderId: "ORD-101",
  userId: ObjectId("650000000000000000000001"), // Reference to user
  totalAmount: 1250
});
