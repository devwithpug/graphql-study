package com.example.springgraphql.domain.tweet

import org.springframework.data.repository.CrudRepository

interface TweetRepository : CrudRepository<Tweet, Long> {
}
