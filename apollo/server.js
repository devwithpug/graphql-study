import { ApolloServer, gql } from "apollo-server"

let tweets = [
    {
        id: "1",
        text: "foo",
        userId: "2",
    },
    {
        id: "2",
        text: "bar",
        userId: "1",
    },
    {
        id: "3",
        text: "hello",
        userId: "2",
    },
    {
        id: "4",
        text: "world",
        userId: "1",
    },
]

let users = [
    {
        id: "1",
        firstName: "pug",
        lastName: "gg"
    },
    {
        id: "2",
        firstName: "Jungyu",
        lastName: "Choi"
    },
]

const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        firstName: String!
        lastName: String!
        """
        Is the sum of firstName and lastName
        """
        fullName: String!
        allTweets: [Tweet!]!
    }
    """
    Tweet object represents a resource for a Tweet
    """
    type Tweet {
        id: ID!
        text: String!
        author: User
    }
    type Query {
        """
        Documenting our schema
        """
        ping: String!
        # GET /api/v1/tweets
        allTweets: [Tweet!]!
        # GET /api/v1/tweet/:id
        tweet(id: ID!): Tweet
        allUsers: [User!]!
    }
    type Mutation {
        # POST /api/v1/tweets
        postTweet(text: String!, userId: ID!): Tweet!
        # DELETE /api/v1/tweet/:id
        """
        Deletes a Tweet if found, else return false
        """
        deleteTweet(id: ID!): Boolean!
    }
`

const resolvers = {
    Query: {
        ping() {
            return "pong!"
        },
        allTweets() {
            return tweets
        },
        tweet(_, { id }) {
            return tweets.find(tweet => tweet.id === id)
        },
        allUsers() {
            return users
        }
    },
    Mutation: {
        postTweet(_, { text, userId }) {
            const newTweet = {
                id: tweets.length + 1,
                text,
            }
            tweets.push(newTweet)
            return newTweet
        },
        deleteTweet(_, { id }) {
            const tweet = tweets.find(tweet => tweet.id === id)
            if (!tweet) return false
            tweets = tweets.filter(tweet => tweet.id !== id)
            return true
        }
    },
    User: {
        fullName({ firstName, lastName }) {
            return `${firstName} ${lastName}`
        },
        allTweets({ id }) {
            return tweets.filter(tweet => tweet.userId === id)
        }
    },
    Tweet: {
        author({ userId }) {
            return users.find(user => user.id === userId)
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Running on ${url}`)
})