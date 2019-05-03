package com.cnicolas.rpg.dungeondragonsserver.database.tables

import javax.persistence.*

@Entity
@Table
data class Expandable(val name: String,
                     val count: Int,
                     val special: String,
                     @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
