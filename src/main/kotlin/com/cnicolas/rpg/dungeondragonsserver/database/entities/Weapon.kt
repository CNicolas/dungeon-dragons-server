package com.cnicolas.rpg.dungeondragonsserver.database.entities

import com.cnicolas.rpg.dungeondragonsserver.database.enums.WeaponRange
import javax.persistence.*

@Entity
@Table
data class Weapon(val name: String,
                  val range: WeaponRange,
                  val touch: Int,
                  val damage: Int,
                  val special: String,
                  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
