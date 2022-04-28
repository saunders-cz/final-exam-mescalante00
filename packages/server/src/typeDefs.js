import {gql} from "apollo-server";

export const typeDefs = gql`

    type User {
        id: ID!
        description: String!
        image: String!
        price: Float!
        categoryID: ID
        category: Category
    }   

    type Category{
        id: ID!
        title: String!
    }

    type Query{
        users: [User]
        user(id: ID!)
        categories: [Category]
    }

  







`;