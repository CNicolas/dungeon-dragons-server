package com.cnicolas.rpg.dungeondragonsserver.database.entities

import com.cnicolas.rpg.dungeondragonsserver.database.enums.Race
import javax.persistence.*

@Entity
@Table
data class Player(@Column(unique = true) val name: String,
                  val race: Race,
                  @OneToMany(cascade = [CascadeType.ALL]) val weapons: List<Weapon> = listOf(),
                  @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
