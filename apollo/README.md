```
$ npm run dev

http://localhost:4000/
```

- mutation example
```graphql
mutation {
    postTweet(text: "foobar", userId: 1) {
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
