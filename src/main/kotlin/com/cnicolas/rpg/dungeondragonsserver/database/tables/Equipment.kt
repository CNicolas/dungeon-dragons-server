package com.cnicolas.rpg.dungeondragonsserver.database.tables

import javax.persistence.*

@Entity
@Table
data class Equipment(val name: String,
                     val armor: Int,
                     val special: String,
                     @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
