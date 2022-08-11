import {ApolloServer, gql} from 'apollo-server';
import typeDefs from './schema/schema';
import resolvers from "./Resolvers/resolvers";
import StarsWarsPeopleAPI from './data.source/stars.wars';
import {
    ApolloServerPluginCacheControl,
    ApolloServerPluginLandingPageLocalDefault,
} from "apollo-server-core";
import cors from 'cors'

const corsConfig = {
    origin:'*',
    preflightContinue:false,
    credentials:false,
    methods:'*'
};

const server = new ApolloServer({
    cache: 'bounded',
    typeDefs,
    resolvers,
    csrfPrevention:true,
    cors:corsConfig,
    dataSources: () => {
     return {
         STAR_WARS_API: new StarsWarsPeopleAPI()
     }
    },
    plugins: [
        ApolloServerPluginCacheControl({
            // Cache everything for 100 second by default.
            defaultMaxAge: 60 * 5,
            // Don't send the `cache-control` response header.
            calculateHttpHeaders: true,
        }),
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
})




//console.log('env', process.env.NODE_ENV);
const port:any = process.env.PORT || 63806;
server.listen(port).then((url) => console.log('server is running on port ', url));