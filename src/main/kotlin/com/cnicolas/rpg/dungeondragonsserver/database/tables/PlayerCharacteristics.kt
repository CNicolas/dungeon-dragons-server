package com.cnicolas.rpg.dungeondragonsserver.database.tables

import javax.persistence.*

@Entity
@Table
data class PlayerCharacteristics(@OneToOne(cascade = [CascadeType.ALL]) val strength: PlayerCharacteristic,
                                 @OneToOne(cascade = [CascadeType.ALL]) val dexterity: PlayerCharacteristic,
                                 @OneToOne(cascade = [CascadeType.ALL]) val constitution: PlayerCharacteristic,
                                 @OneToOne(cascade = [CascadeType.ALL]) val intelligence: PlayerCharacteristic,
                                 @OneToOne(cascade = [CascadeType.ALL]) val wisdom: PlayerCharacteristic,
                                 @OneToOne(cascade = [CascadeType.ALL]) val charisma: PlayerCharacteristic,
                                 @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
