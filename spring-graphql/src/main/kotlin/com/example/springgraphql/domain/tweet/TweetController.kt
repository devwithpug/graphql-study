package com.example.springgraphql.domain.tweet

import com.example.springgraphql.domain.user.UserRepository
import org.springframework.data.repository.findByIdOrNull
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import org.springframework.transaction.annotation.Transactional

@Controller
class TweetController(
    private val tweetRepository: TweetRepository,
    private val userRepository: UserRepository
) {
    @QueryMapping
    fun ping() = "pong!"

    @QueryMapping
    fun tweet(@Argument id: Long) = tweetRepository.findByIdOrNull(id)

    @QueryMapping
    fun allTweets() = tweetRepository.findAll()

    @Transactional
    @MutationMapping
    fun postTweet(
        @Argument text: String,
        @Argument userId: Long
    ): Tweet {
        val user = userRepository.findByIdOrNull(userId)
        requireNotNull(user)

        val newTweet = Tweet(text = text, author = user)
        return tweetRepository.save(newTweet)
    }

    @Transactional
    @MutationMapping
    fun deleteTweet(@Argument id: Long) =
        if (tweetRepository.existsById(id)) {
            tweetRepository.deleteById(id)
            true
        } else {
            false
        }
}
