


class AbzService {
    _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1/users';

      getResource = async (url) => {
          let res = await fetch(url); 
          if (!res.ok) {
              throw new Error(`could not fetch ${url}, status: ${res.status}`);
          }
          return await res.json();
      }

      getAllHumans =  () => {
        return this.getResource(`${this._apiBase}?page=1&count=6`);
           
      }

      getHuman = (id) => {
        return this.getResource(`${this._apiBase}/${id}`);
    }
      
}

export default AbzService;