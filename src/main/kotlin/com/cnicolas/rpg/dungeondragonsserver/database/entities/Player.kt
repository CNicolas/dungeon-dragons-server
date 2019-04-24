package com.cnicolas.rpg.dungeondragonsserver.database.entities

import javax.persistence.*

@Entity
@Table
data class Player(
    var name: String = "",
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long
)
