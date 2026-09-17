// DAY 1: MongoDB CRUD Practice


// 1. Switch to (or create) the database

use('my_store_db');

// 2. Clear old data from collection (Optional, for clean testing)
db.messages.drop();

// 3. Insert Documents
// (Equivalent to: INSERT INTO messages VALUES (...);)
db.messages.insertMany([
  {
    name: "sneha",
    message: "please bring my parcel",
    status: "pending"
  },
  {
    name: "rohit",
    message: "call me back",
    status: "completed"
  }
]);

// 4. SOLUTION TO QUESTION 1: Fetch all pending messages
// (Equivalent to: SELECT * FROM messages WHERE status = 'pending';)
print("--- Question 1: Pending Messages ---");
const pendingMessages = db.messages.find({ status: "pending" }).toArray();
printjson(pendingMessages);

// 5. SOLUTION TO QUESTION 2: Update status to 'delivered'
// (Equivalent to: UPDATE messages SET status = 'delivered' WHERE name = 'sneha';)
db.messages.updateOne(
  { name: "sneha" },
  { $set: { status: "delivered" } }
);

// Verify update
print("--- Question 2: Updated Document ---");
printjson(db.messages.findOne({ name: "sneha" }));