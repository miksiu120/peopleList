const people = document.querySelector('.box__people')
const input = document.querySelector('.box__form__input')
const button = document.querySelector('.box__form__button')
const refreshButton = document.querySelector('.box__refreshButton')
const fetchPeople = async () => {
	console.log('fetching')
	people.innerHTML = ''
	try {
		const { data } = await axios.get('/api/people')
		console.log(data)
		data.fetchUsers.forEach(item => {
			let element = document.createElement('p')
			element.textContent = item.name
			people.appendChild(element)
		})
	} catch (error) {
		console.log(error)
	}
}

const sendPerson = async dataToSend => {
	try {
		const { data } = await axios.post('/api/people', dataToSend, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
	} catch (error) {
		console.log('error:', error)
	}
}

fetchPeople()

button.addEventListener('click', async e => {
	e.preventDefault()
	const nameValue = input.value
	const dataToSend = `name=${nameValue}`
	sendPerson(dataToSend)
	console.log('wykonanie')
	let element = document.createElement('p')
	element.textContent = input.value
	people.appendChild(element)
	//input.value = ''
})
console.log(refreshButton)
refreshButton.addEventListener('click', () => fetchPeople())
