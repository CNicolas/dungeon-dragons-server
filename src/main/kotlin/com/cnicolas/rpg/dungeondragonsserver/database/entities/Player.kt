package com.cnicolas.rpg.dungeondragonsserver.database.entities

import com.cnicolas.rpg.dungeondragonsserver.database.enums.Race
import javax.persistence.*

@Entity
@Table
data class Player(
    val name: String = "",
    val race: Race,
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long
)
