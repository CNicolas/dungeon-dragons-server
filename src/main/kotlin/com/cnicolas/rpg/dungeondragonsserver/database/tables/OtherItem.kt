package com.cnicolas.rpg.dungeondragonsserver.database.tables

import javax.persistence.*

@Entity
@Table
data class OtherItem(val name: String,
                     val special: String,
                     @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
