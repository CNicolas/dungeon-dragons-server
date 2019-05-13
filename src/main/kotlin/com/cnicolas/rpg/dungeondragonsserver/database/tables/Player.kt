package com.cnicolas.rpg.dungeondragonsserver.database.tables

import com.cnicolas.rpg.dungeondragonsserver.database.enums.Race
import javax.persistence.*

@Entity
@Table
data class Player(@Column(unique = true) val name: String,
                  val race: Race,
                  val level: Int,
                  val bonus: Int,
                  val physicalDamage: Int,
                  val magicalDamage: Int,
                  @OneToOne(cascade = [CascadeType.ALL]) val characteristics: PlayerCharacteristics,
                  @OneToMany(cascade = [CascadeType.ALL]) val weapons: List<Weapon> = listOf(),
                  @OneToMany(cascade = [CascadeType.ALL]) val equipments: List<Equipment> = listOf(),
                  @OneToMany(cascade = [CascadeType.ALL]) val expandables: List<Expandable> = listOf(),
                  @OneToMany(cascade = [CascadeType.ALL]) val otherItems: List<OtherItem> = listOf(),
                  @OneToMany(cascade = [CascadeType.ALL]) val actions: List<Action> = listOf(),
                  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
