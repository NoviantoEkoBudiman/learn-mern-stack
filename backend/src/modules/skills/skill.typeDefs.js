export const skillTypeDefs = `#graphql
    type Skill {
        id: ID!
        icon: String!
        title: String!
        text: String!
    }
    
    type Query {
        getSkills: [Skill]
    }
    
    type Mutation {
        addSkill(icon: String!, title: String!, text: String!): Skill
        updateSkill(id: ID!, icon: String!, title: String!, text: String!): Skill
        deleteSkill(id: ID!): Skill
    }
`;