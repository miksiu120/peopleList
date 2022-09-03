const mongoose = require('mongoose')
const User = require('./router-user')
const url = 'mongodb://127.0.0.1:27017/userData'

const fetchData = async () => {
	const data = await User.find({})
	console.log('length:', data.length)
	return data
}

module.exports = fetchData

// const mongo = require('mongodb')
// const mongoClient = mongo.MongoClient
// const ObjectID = mongo.ObjectID

// const url = 'mongodb://127.0.0.1:27017'
// const dbname = 'userData'

// mongoClient.connect(url, {}, (error, client) => {
// 	try {
// 		console.log('Database is connected ')

// 		const db = client.db(dbname)

// 		let result
// 		db.collection('users')
// 			.find({})
// 			.toArray((error, results) => {
// 				console.log(results)
// 				return result
// 			})
// 	} catch (error) {
// 		console.log(error)
// 	}
// })
