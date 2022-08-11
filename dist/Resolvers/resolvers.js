"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const resolvers = {
    Query: {
        People: (parent, { search }, context) => context.dataSources.STAR_WARS_API.getPeople(search),
        Person: (parent, { search }, context) => context.dataSources.STAR_WARS_API.getPerson(search)
    },
};
exports.default = resolvers;
