import { ApolloServer, gql } from "apollo-server"

const typeDefs = gql`
    type Query {
        text:String # GET /text
        hello:String # GET /hello
    }
`

const server = new ApolloServer({ typeDefs })

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`)
})