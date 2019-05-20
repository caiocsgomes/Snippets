//https://docs.mongodb.com/manual/crud/         
//EVERYTHING IS WELL DOCUMENTED ON THE PAGE
//insertOne
//insertOne() returns a promise that provides a result. The result.insertedId promise contains the _id of the newly inserted document.
//If the collection does not currently exist, insert operations will create the collection.
//save in an object
save() {
    const db = getDb();
    return db
      .collection('collection')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

//insertMany
//returns a promise that provides a result. The result.insertedIds field contains an array with the _id of each newly inserted document.
db
.collection('collection')
.inserMany([
  {
    name: 'caio',
    age: 25
  },
  {
    name: 'thais',
    age: 25
  }
])
.then(result => {
  console.log(result);
})
.catch(err => {
  console.log(err);
})

//find()
//SELECT * FROM inventory
//in an object
static fetchAll() {
  const db = getDb();
  return db
    .collection('colection')
    .find()
    .toArray()
    .then(elements => {
      console.log(elements);
      return elements;
    })
    .catch(err => {
      console.log(err);
    });
}

//SELECT * FROM collection WHERE status = "D"
db
.collection('collection')
.find({status: 'D'})
.toArray().
.then(result => {
  return result;
})
.catch(err => {
  console.log(err);
})

//find returs a cursor to the collection, the next returns the first element (document) from the collection
const mongodb = require('mongodb');
static findById(id){
    return db
      .collection('products')
      .find({_id: new mongodb.ObjectId(id)}) //remember that the id inside mongodb is not a string, but a ObjectId
      .next()
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err);
      })
  }

//deleteMany()
//Deletes all documents from the collection
//deleteMany() returns a promise that provides a result. The result.deletedCount property contains the number of documents that matched the filter.
db
.collection('collection')
.deleteMany();

db
.collection('collection')
.deleteMany({status0:10}, status1:'A')