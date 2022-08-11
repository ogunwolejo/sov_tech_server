import {RESTDataSource, RequestOptions} from "apollo-datasource-rest";

class StarsWarsPeopleAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }

    async getPeople(search:string) {
        let page:string = '1';
        if(search) {
            page = search;
        }
        const data = await this.get(`people/?page=${page}`);
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