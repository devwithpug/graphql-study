package com.example.springgraphql.domain.user

import org.springframework.data.repository.CrudRepository

interface UserRepository : CrudRepository<User, Long> {
}
