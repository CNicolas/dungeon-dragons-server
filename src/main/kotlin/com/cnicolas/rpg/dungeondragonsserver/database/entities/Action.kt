package com.cnicolas.rpg.dungeondragonsserver.database.entities

import javax.persistence.*

@Entity
@Table
data class Action(val name: String,
                  val type: String,
                  val level: Int,
                  val cooldown: Int,
                  val effect: String,
                  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
