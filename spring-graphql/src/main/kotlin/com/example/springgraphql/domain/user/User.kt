package com.example.springgraphql.domain.user

import com.example.springgraphql.domain.tweet.Tweet
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.OneToMany
import javax.persistence.Table

@Entity
@Table(name = "users")
data class User(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    val username: String,
    val firstName: String,
    val lastName: String,
    @OneToMany(mappedBy = "author")
    val tweets: MutableList<Tweet> = mutableListOf()
)
