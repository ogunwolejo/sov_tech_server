"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class StarsWarsPeopleAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://swapi.dev/api/';
    }
    getPeople(search) {
        return __awaiter(this, void 0, void 0, function* () {
            let page = '1';
            if (search) {
                page = search;
            }
            const data = yield this.get(`people/?page=${page}`);
            if (data) {
                const { results } = data;
                return results;
            }
        });
    }
    getPerson(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.get(`people/?search=${name}`);
            if (data) {
                const { results } = data;
                return results;
            }
        });
    }
}
exports.default = StarsWarsPeopleAPI;
