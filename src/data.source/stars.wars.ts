import {RESTDataSource, RequestOptions} from "apollo-datasource-rest";

class StarsWarsPeopleAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getPeople() {
        const data = await this.get('people/?page=1');
        if(data) {
            const {results} = data;
            return results;
        }
    }

    async getPerson(name:string) {
        const data = await this.get(`people/?search=${name}`)
        if(data) {
            const {results} = data;
            return results;
        }


    }

}

export default  StarsWarsPeopleAPI;