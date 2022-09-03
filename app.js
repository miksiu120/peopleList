const { urlencoded } = require('express')
const express = require('express')
const createUser = require('./sendToDatabase')
const fetchUser = require('./getFromDatabase')
const fetchUsers = fetchUser()
const app = express()
app.use(express.static('./public'))

app.use(urlencoded({ extended: false }))

app.post('/api/people', (req, res) => {
	const name = JSON.parse(JSON.stringify(req.body)).name
	console.log(name)
	if (!name) {
		return res.status(400).json({ success: false, msg: 'please provide name value' })
	}
	createUser(name)
	// console.log('blad tutaj!')
	// res.sendFile(__dirname + '/public/index.html/')
	console.log('chyba nie')
})

app.get('/api/people', (req, res) => {
	fetchUsers.then(item => {
		res.status(200).json({ fetchUsers: item })
	})
})

// app.get('', (req, res) => {
// 	fetchUsers.then(item => {
// 		res.status(200).json({ fetchUsers: item })
// 	})
// })

app.listen(5000, () => {
	console.log('Server was connected')
})
