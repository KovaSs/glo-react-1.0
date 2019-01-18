class GotService {
  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api/characters';
  }

  async getResource(url){
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json();
  }

  getAllCharacters() {
    return this.getResource('?page=5&pageSize=10')
  }
  getCharacter(id) {
    return this.getResource(`/${id}`)
  }
}

const got = new GotService();
got.getAllCharacters()
  .then(res => console.log(res))
got.getCharacter(130)
  .then(res => console.log(res))


func = ( param1 = true, param2 = 10, param3 = 'text', ...anouther) => {
  const obj = {
    param1,
    param2,
    param3,
    next: anouther[25]
  }
  console.log(obj)
}
let a = [];
a[26] = 234;
func(...[,,], ...a);