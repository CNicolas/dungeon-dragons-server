package com.cnicolas.rpg.dungeondragonsserver.database.tables

import com.cnicolas.rpg.dungeondragonsserver.database.enums.Characteristic
import com.cnicolas.rpg.dungeondragonsserver.database.enums.DamageCategory
import com.cnicolas.rpg.dungeondragonsserver.database.enums.DamageType
import com.cnicolas.rpg.dungeondragonsserver.database.enums.WeaponRange
import javax.persistence.*

@Entity
@Table
data class Weapon(val name: String,
                  val range: WeaponRange,
                  val touch: Int,
                  val damage: Int,
                  val characteristic: Characteristic,
                  val special: String,
                  val damageType: DamageType,
                  val damageCategory: DamageCategory?,
                  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
