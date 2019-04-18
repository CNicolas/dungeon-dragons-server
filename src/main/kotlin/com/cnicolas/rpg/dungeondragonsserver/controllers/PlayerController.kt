package com.cnicolas.rpg.dungeondragonsserver.controllers

import com.cnicolas.rpg.dungeondragonsserver.database.collections.Player
import com.cnicolas.rpg.dungeondragonsserver.database.repositories.PlayerRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
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
}
