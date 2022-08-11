import {ApolloServer, gql} from 'apollo-server';
import typeDefs from './schema/schema';
import resolvers from "./Resolvers/resolvers";
import StarsWarsPeopleAPI from './data.source/stars.wars';

const server = new ApolloServer({
    cache: 'bounded',
    csrfPrevention:true,
    typeDefs,
    resolvers,
    cors: {
        origin:process.env.ORGIN_URL,
        credentials: true,
        methods:'*',
        preflightContinue:true,

    },
    dataSources: () => {
     return {
         STAR_WARS_API: new StarsWarsPeopleAPI()
     }
    }
})

//console.log('env', process.env.NODE_ENV);
const port:any | number = process.env.PORT || 4000;

server.listen().then(({port}) => console.log('server is running on port '));