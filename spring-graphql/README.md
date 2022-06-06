# Spring for GraphQL

> http://localhost:8080/graphiql?path=/graphql

- mutation example
```graphql
mutation {
    postTweet(text: "foobar", userId: 1001) {
        text
    }
}
```

- query example
```graphql
query {
    allUsers {
        fullName
        allTweets {
            text
        }
    }
}
```
