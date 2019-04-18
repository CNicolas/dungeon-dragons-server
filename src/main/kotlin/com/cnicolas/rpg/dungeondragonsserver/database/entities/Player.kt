package com.cnicolas.rpg.dungeondragonsserver.database.entities

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Player(
    var name: String = "",
    @Id @GeneratedValue val id: Long? = null
)
