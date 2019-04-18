package com.cnicolas.rpg.dungeondragonsserver.database.repositories

import com.cnicolas.rpg.dungeondragonsserver.database.collections.Player
import org.springframework.data.mongodb.repository.MongoRepository

interface PlayerRepository : MongoRepository<Player, String>
