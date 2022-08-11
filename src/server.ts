import {ApolloServer, gql} from 'apollo-server';
import typeDefs from './schema/schema';
import resolvers from "./Resolvers/resolvers";
import StarsWarsPeopleAPI from './data.source/stars.wars';

const server = new ApolloServer({
    cache: 'bounded',
    csrfPrevention:false,
    typeDefs,
    resolvers,
    dataSources: () => {
     return {
         STAR_WARS_API: new StarsWarsPeopleAPI()
     }
    }
})

//console.log('env', process.env.NODE_ENV);

server.listen().then((url) => console.log('server is running on port '));