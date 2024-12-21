```javascript
// Incorrect usage of $inc operator for updating a field
db.collection.updateOne({fieldName: 'value'}, {$inc: {fieldName: 'string'}});
```