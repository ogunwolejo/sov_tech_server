"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
    type Query {
        People(search:String): [People!]!
        Person(search:String!): [People]!
    }
    
    
    type People {
        name:String!
        height:String!
        mass:String!
        gender:String!
        homeworld:String!
        
    }
    
    type Person {
        name:String!
        height:String!
        mass:String!
        gender:String!
        homeworld:String!
    }
    
    input PersonInput {
        name:String!
    }
    
`;
exports.default = typeDefs;
