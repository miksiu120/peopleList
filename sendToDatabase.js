const mongoose = require('mongoose')
const User = require('./router-user')
//const url = 'mongodb://127.0.0.1:27017/userData'
const url = 'mongodb+srv://miksiu120:<654321miKO>@peoplelistcluster.ehudov6.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(url)

const createUser = async data => {
	data = {
		name: data,
	}
	try {
		const user = new User(data)
		await user.save()
	} catch (error) {
		console.log(error)
	}
}

module.exports = createUser
