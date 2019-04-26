package com.cnicolas.rpg.dungeondragonsserver.database.entities

import com.cnicolas.rpg.dungeondragonsserver.database.enums.Race
import javax.persistence.*

@Entity
@Table
data class Player(@Column(unique = true) val name: String,
                  val race: Race,
                  @OneToMany(cascade = [CascadeType.ALL]) val weapons: List<Weapon> = listOf(),
                  @OneToMany(cascade = [CascadeType.ALL]) val equipments: List<Equipment> = listOf(),
                  @OneToMany(cascade = [CascadeType.ALL]) val expandables: List<Expandable> = listOf(),
                  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
