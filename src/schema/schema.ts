import {gql} from 'apollo-server';

const typeDefs = gql`
    type Query {
        People: [People!]!
        Person(search:String!): [People]
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


export default typeDefs;