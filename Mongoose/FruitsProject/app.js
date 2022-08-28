// 336 Create
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema ({
//     name: String,
//     rating: Number,
//     review: String
// });

// const Fruit = mongoose.model('Fruit', fruitSchema);

// const fruit = new Fruit ({
//     name: 'Apple',
//     rating: 7,
//     review: 'Pretty solid as a fruit.'
// });

// fruit.save();

// const findDocuments = function(db, callback) {

//     const collection = db.collection('fruits');

//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log('Found the following records');
//         console.log(fruits);
//         callback(fruits);
//     });

//     const personSchema = new mongoose.Schema ({
//         name: String,
//         age: Number
//     });

//     const Person = mongoose.model('Person', personSchema);

//     const person = new Person({
//         name: 'Jason',
//         age: 26
//     });

//     person.save();

//     const kiwi = new Fruit({
//         name: 'Kiwi',
//         score: 10,
//         review: 'The best fruit!'
//     });

//     const orange = new Fruit({
//         name: 'Orange',
//         score: 4,
//         review: 'Too sour for me'
//     });

//     const banana = new Fruit({
//         name: 'Banana',
//         score: 3,
//         review: 'Weird texture'
//     });

//     Fruit.insertMany([kiwi, orange, banana], function(err){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('succesfully saved all the fruits to fruitsDB');
//         }
//     });

// }

// npm i mongoose



// 337 Read
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema ({
//     name: String,
//     rating: Number,
//     review: String
// });

// const Fruit = mongoose.model('Fruit', fruitSchema);

// const fruit = new Fruit ({
//     name: 'Apple',
//     rating: 7,
//     review: 'Pretty solid as a fruit.'
// });

// fruit.save();

// const findDocuments = function(db, callback) {

//     const collection = db.collection('fruits');

//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log('Found the following records');
//         console.log(fruits);
//         callback(fruits);
//     });

//     const personSchema = new mongoose.Schema ({
//         name: String,
//         age: Number
//     });

//     const Person = mongoose.model('Person', personSchema);

//     const person = new Person({
//         name: 'Jason',
//         age: 26
//     });

//     person.save();

//     const kiwi = new Fruit({
//         name: 'Kiwi',
//         score: 10,
//         review: 'The best fruit!'
//     });

//     const orange = new Fruit({
//         name: 'Orange',
//         score: 4,
//         review: 'Too sour for me'
//     });

//     const banana = new Fruit({
//         name: 'Banana',
//         score: 3,
//         review: 'Weird texture'
//     });

    // Fruit.insertMany([kiwi, orange, banana], function(err){
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log('succesfully saved all the fruits to fruitsDB');
    //     }
    // });

//     Fruit.find(function(err, fruits){
//         if (err) {
//             console.log(err);
//         } else {

//             mongoose.connection.close()
            
//             fruits.forEach(function(fruit){
//                 console.log(fruit.name);
//             });
//         }
//     });

// }

// npm i mongoose



// 338
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema ({
//     name: {
//         type: String,
//         required: [true, 'Please check your data entry, no name specified!']
//     },
//     rating: {
//         type: Number,
//         min: 1,
//         max: 10
//     },
//     review: String
// });

// const Fruit = mongoose.model('Fruit', fruitSchema);

// const fruit = new Fruit ({
//     rating: 10,
//     review: 'Peaches are so yummy!'
// });

// fruit.save();

// const findDocuments = function(db, callback) {

//     const collection = db.collection('fruits');

//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log('Found the following records');
//         console.log(fruits);
//         callback(fruits);
//     });

//     const personSchema = new mongoose.Schema ({
//         name: String,
//         age: Number
//     });

//     const Person = mongoose.model('Person', personSchema);

//     const person = new Person({
//         name: 'Jason',
//         age: 26
//     });

//     // person.save();

//     Fruit.find(function(err, fruits){
//         if (err) {
//             console.log(err);
//         } else {

//             mongoose.connection.close()
            
//             fruits.forEach(function(fruit){
//                 console.log(fruit.name);
//             });
//         }
//     });

// }

// node app.js



// 339 Update
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema ({
//     name: {
//         type: String,
//         required: [true, 'Please check your data entry, no name specified!']
//     },
//     rating: {
//         type: Number,
//         min: 1,
//         max: 10
//     },
//     review: String
// });

// const Fruit = mongoose.model('Fruit', fruitSchema);

// const fruit = new Fruit ({
//     rating: 10,
//     review: 'Peaches are so yummy!'
// });

// // fruit.save();

// const findDocuments = function(db, callback) {

//     const collection = db.collection('fruits');

//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log('Found the following records');
//         console.log(fruits);
//         callback(fruits);
//     });

//     const personSchema = new mongoose.Schema ({
//         name: String,
//         age: Number
//     });

//     const Person = mongoose.model('Person', personSchema);

//     const person = new Person({
//         name: 'Jason',
//         age: 26
//     });

//     // person.save();

//     Fruit.find(function(err, fruits){
//         if (err) {
//             console.log(err);
//         } else {

//             mongoose.connection.close()
            
//             fruits.forEach(function(fruit){
//                 console.log(fruit.name);
//             });
//         }
//     });

//     Fruit.updateOne({_id: '5bc0854dd6ec7ad010738bc7'}, {name: 'Peach'}, function(err){
//         if (err){
//             console.log(err);
//         } else {
//             console.log('succesfully updated the document.');
//         }
//     })

// }




// 339 DeleteOne
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema ({
//     name: {
//         type: String,
//         required: [true, 'Please check your data entry, no name specified!']
//     },
//     rating: {
//         type: Number,
//         min: 1,
//         max: 10
//     },
//     review: String
// });

// const Fruit = mongoose.model('Fruit', fruitSchema);

// const fruit = new Fruit ({
//     rating: 10,
//     review: 'Peaches are so yummy!'
// });

// // fruit.save();

// const findDocuments = function(db, callback) {

//     const collection = db.collection('fruits');

//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log('Found the following records');
//         console.log(fruits);
//         callback(fruits);
//     });

//     const personSchema = new mongoose.Schema ({
//         name: String,
//         age: Number
//     });

//     const Person = mongoose.model('Person', personSchema);

//     const person = new Person({
//         name: 'Jason',
//         age: 26
//     });

//     // person.save();

//     Fruit.find(function(err, fruits){
//         if (err) {
//             console.log(err);
//         } else {

//             mongoose.connection.close()
            
//             fruits.forEach(function(fruit){
//                 console.log(fruit.name);
//             });
//         }
//     });

//     Fruit.deleteOne({name: 'Peach'}, function(err){
//         if (err){
//             console.log(err);
//         } else {
//             console.log('succesfully deleted the document');
//         }
//     })

// }



// 339 DeleteMany
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema ({
//     name: {
//         type: String,
//         required: [true, 'Please check your data entry, no name specified!']
//     },
//     rating: {
//         type: Number,
//         min: 1,
//         max: 10
//     },
//     review: String
// });

// const Fruit = mongoose.model('Fruit', fruitSchema);

// const fruit = new Fruit ({
//     rating: 10,
//     review: 'Peaches are so yummy!'
// });

// // fruit.save();

// const findDocuments = function(db, callback) {

//     const collection = db.collection('fruits');

//     collection.find({}).toArray(function(err, fruits) {
//         assert.equal(err, null);
//         console.log('Found the following records');
//         console.log(fruits);
//         callback(fruits);
//     });

//     const personSchema = new mongoose.Schema ({
//         name: String,
//         age: Number
//     });

//     const Person = mongoose.model('Person', personSchema);

//     const person = new Person({
//         name: 'Jason',
//         age: 26
//     });

//     // person.save();

//     Fruit.find(function(err, fruits){
//         if (err) {
//             console.log(err);
//         } else {

//             mongoose.connection.close()
            
//             fruits.forEach(function(fruit){
//                 console.log(fruit.name);
//             });
//         }
//     });

//     Person.deleteMany({name: 'John'}, function(err){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('succesfully deleted all the document');
//         }
//     })

// }

// node app.js



// 340 Relationships
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

// const fruitSchema = new mongoose.Schema ({
//     name: {
//         type: String,
//         required: [true, 'Please check your data entry, no name specified!']
//     },
//     rating: {
//         type: Number,
//         min: 1,
//         max: 10
//     },
//     review: String
// });

// const Fruit = mongoose.model('Fruit', fruitSchema);

// const fruit = new Fruit ({
//     rating: 10,
//     review: 'Peaches are so yummy!'
// });

// // fruit.save();

//     const personSchema = new mongoose.Schema ({
//         name: String,
//         age: Number,
//         favouriteFruit: fruitSchema
//     });

//     const Person = mongoose.model('Person', personSchema);

//     const pineapple = new Fruit({
//         name: 'Pineapple',
//         score: 9,
//         review: 'Great fruit.'
//     });

//     pineapple.save();

//     const person = new Person({
//         name: 'Aida',
//         age: 23,
//         favouriteFruit: pineapple
//     });

//     // person.save();

//     Fruit.find(function(err, fruits){
//         if (err) {
//             console.log(err);
//         } else {

//             mongoose.connection.close()
            
//             fruits.forEach(function(fruit){
//                 console.log(fruit.name);
//             });
//         }
//     });

//     Person.deleteMany({name: 'John'}, function(err){
//         if (err) {
//             console.log(err);
//         } else {
//             console.log('succesfully deleted all the document');
//         }
//     });

// node app.js



// 340 Relationships
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Please check your data entry, no name specified!']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit ({
    rating: 10,
    review: 'Peaches are so yummy!'
});

// fruit.save();

    const personSchema = new mongoose.Schema ({
        name: String,
        age: Number,
        favouriteFruit: fruitSchema
    });

    const Person = mongoose.model('Person', personSchema);

    const pineapple = new Fruit({
        name: 'Mango',
        score: 6,
        review: 'Decent fruit.'
    });

   mongo.save();

    Person.updateOne({name: 'John'}, {favouriteFruit: mango}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log('succesfully updated the document');
        }
    });

    // const person = new Person({
    //     name: 'Aida',
    //     age: 23,
    //     favouriteFruit: pineapple
    // });

    // person.save();

    Fruit.find(function(err, fruits){
        if (err) {
            console.log(err);
        } else {

            mongoose.connection.close()
            
            fruits.forEach(function(fruit){
                console.log(fruit.name);
            });
        }
    });

    Person.deleteMany({name: 'John'}, function(err){
        if (err) {
            console.log(err);
        } else {
            console.log('succesfully deleted all the document');
        }
    });

// node app.js