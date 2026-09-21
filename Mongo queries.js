// Switch to (or create) a database named 'schoolDB'
use schoolDB;

// Create a collection named 'students' (MongoDB creates it automatically when inserting)
db.createCollection("students");
// Insert a single document
db.students.insertOne({
  name: "Alice Johnson",
  age: 20,
  major: "Computer Science",
  gpa: 3.8,
  tags: ["coding", "math"]
});

// Insert multiple documents at once
db.students.insertMany([
  { name: "Bob Smith", age: 22, major: "Mathematics", gpa: 3.2, tags: ["chess"] },
  { name: "Charlie Brown", age: 19, major: "Computer Science", gpa: 2.9, tags: ["gaming", "coding"] },
  { name: "Diana Prince", age: 21, major: "Physics", gpa: 3.9, tags: ["reading"] }
]);
// Find all documents in the collection
db.students.find();

// Find a single document matching a condition
db.students.findOne({ name: "Alice Johnson" });

// Find documents with a specific condition (e.g., major is Computer Science)
db.students.find({ major: "Computer Science" });

// Find documents using comparison operators ($gt = greater than, $gte = greater than or equal)
db.students.find({ gpa: { $gt: 3.5 } });

// Find documents matching multiple conditions (AND implicit)
db.students.find({ major: "Computer Science", gpa: { $gte: 3.0 } });

// Sort results (1 for ascending, -1 for descending) and limit output
db.students.find().sort({ gpa: -1 }).limit(2);
// Update a single document ($set updates specific fields without overwriting the whole document)
db.students.updateOne(
  { name: "Alice Johnson" },
  { $set: { gpa: 3.9 } }
);

// Add an element to an array field using $push
db.students.updateOne(
  { name: "Alice Johnson" },
  { $push: { tags: "ai" } }
);

// Update multiple documents (e.g., increment age of all students by 1)
db.students.updateMany(
  {},
  { $inc: { age: 1 } }
);
// Delete a single document matching a condition
db.students.deleteOne({ name: "Charlie Brown" });

// Delete all documents matching a condition
db.students.deleteMany({ gpa: { $lt: 3.0 } });

// Drop the entire collection
db.students.drop();