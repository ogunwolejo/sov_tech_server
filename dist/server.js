"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema_1 = __importDefault(require("./schema/schema"));
const resolvers_1 = __importDefault(require("./Resolvers/resolvers"));
const stars_wars_1 = __importDefault(require("./data.source/stars.wars"));
const server = new apollo_server_1.ApolloServer({
    cache: 'bounded',
    csrfPrevention: false,
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    dataSources: () => {
        return {
            STAR_WARS_API: new stars_wars_1.default()
        };
    }
});
//console.log('env', process.env.NODE_ENV);
server.listen().then((url) => console.log('server is running on port '));
