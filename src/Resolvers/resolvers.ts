import StarsWarsPeopleAPI from '../data.source/stars.wars'

// @ts-ignore
const resolvers = {
    Query: {
        People: (parent:any, {search}:string, context:any) => context.dataSources.STAR_WARS_API.getPeople(search),
        Person:(parent:any, {search}:string, context:any) => context.dataSources.STAR_WARS_API.getPerson(search)
    },
};

export default resolvers;