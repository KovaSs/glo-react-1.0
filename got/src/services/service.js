class GotService {
	constructor() {
		this._apiBase = 'https://www.anapioficeandfire.com/api'
	}

	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}` + 
			`, recived ${res.status}`);
		}
		return await res.json();
	}

	getAllCharacters = async () => {
		const res = await this.getResource(`/characters?page=5&pageSize=10`);
		return res.map(this._transformCharacter)
	}

	getCharacter = async (id) => {
		const res = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(res);
	}

	getAllBooks = async () => {
		const res = await this.getResource(`/books/`);
		return res.map(this._transformHBook)
	}
	getBook = async (id) => {
		const book = await this.getResource(`/books/${id}`);
		return this._transformHBook(book);
	}
	getAllHouses = async () => {
		const res = await this.getResource(`/houses/`);
		return res.map(this._transformHouse)
	}
	getHouse = async (id) => {
		const house = await this.getResource(`/houses/${id}`);
		return this._transformHouse(house)
	}
	_transformCharacter = (char) => {
		return {
			name: char.name,
			gender: char.gender,
			born: char.born,
			died: char.died,
			culture: char.culture,
			url: char.url,
			id: char.url.replace(/\D+/, '')
		}
	}
	_transformHouse = (house) => {
		return {
			name: house.name,
			region: house.region,
			words: house.words,
			titles: house.titles,
			overlord: house.overlord,
			coatOfArms: house.coatOfArms,
			id: house.overlord.replace(/\D+/, '')
		}
	}

	_transformHBook = (book) => {
		return {
			name: book.name,
			numberofPages: book.numberOfPages,
			publisher: book.publisher,
			released: book.released,
			id: book.url.replace(/\D+/, '')
		}
	}
}

export const got = new GotService();

export default GotService;