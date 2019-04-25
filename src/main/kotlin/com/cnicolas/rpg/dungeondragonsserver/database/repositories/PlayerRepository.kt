package com.cnicolas.rpg.dungeondragonsserver.database.repositories

import com.cnicolas.rpg.dungeondragonsserver.database.entities.Player
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface PlayerRepository : CrudRepository<Player, Long> {
    override fun findAll(): List<Player> = findAll()
}
