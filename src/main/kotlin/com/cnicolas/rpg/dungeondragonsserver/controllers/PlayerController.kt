package com.cnicolas.rpg.dungeondragonsserver.controllers

import com.cnicolas.rpg.dungeondragonsserver.database.repositories.PlayerRepository
import com.cnicolas.rpg.dungeondragonsserver.database.entities.Player
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class PlayerController(@Autowired private val playerRepository: PlayerRepository) {
    @GetMapping("/player")
    fun getPlayers(): List<Player> {
        return playerRepository.findAll()
    }

    @PostMapping("/player")
    fun createPlayer(@Valid @RequestBody player: Player): Player {
        return playerRepository.save(player)
    }

    @DeleteMapping("/player")
    fun removePlayers() {
        return playerRepository.deleteAll()
    }
}
