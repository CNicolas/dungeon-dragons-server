package com.cnicolas.rpg.dungeondragonsserver.database.collections

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "players")
data class Player(var name: String = "", @Id val id: String? = null)
