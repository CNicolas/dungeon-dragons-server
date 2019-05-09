package com.cnicolas.rpg.dungeondragonsserver.database.tables

import com.cnicolas.rpg.dungeondragonsserver.database.enums.Characteristic
import javax.persistence.*

@Entity
@Table
data class PlayerCharacteristic(val characteristic: Characteristic,
                                val value: Int,
                                val savingThrow: Boolean,
                                @Id @GeneratedValue(strategy = GenerationType.IDENTITY) val id: Long)
