import StarsWarsPeopleAPI from '../data.source/stars.wars'

// @ts-ignore
const resolvers = {
    Query: {
        People: (parent:any, args:any, context:any) => context.dataSources.STAR_WARS_API.getPeople(),
        Person:(parent:any, {search}:string, context:any) => context.dataSources.STAR_WARS_API.getPerson(search)
    },
};

export default resolvers;