export const teamTypeDefs = `#graphql
    type Team {
        id: ID!
        name: String!
        role: String!
        imageUrl: String!
    }

    type Query {
        getTeams: [Team]
    }

    type Mutation {
        addTeam(name: String!, role: String!, imageUrl: String!): Team
        updateTeam(name: String!, role: String!, imageUrl: String!): Team
        deleteTeam(id: ID!): Team
    }
`;