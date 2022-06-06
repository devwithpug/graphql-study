package com.example.springgraphql.domain.user

import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.graphql.data.method.annotation.SchemaMapping
import org.springframework.stereotype.Controller

@Controller
class UserController(
    private val userRepository: UserRepository
) {
    @QueryMapping
    fun allUsers() = userRepository.findAll()

    @SchemaMapping
    fun fullName(user: User) = "${user.firstName} ${user.lastName}"

    @SchemaMapping
    fun allTweets(user: User) = user.tweets
}
