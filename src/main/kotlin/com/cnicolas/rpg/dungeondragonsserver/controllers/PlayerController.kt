package com.cnicolas.rpg.dungeondragonsserver.controllers

import com.cnicolas.rpg.dungeondragonsserver.database.entities.Player
import com.cnicolas.rpg.dungeondragonsserver.database.repositories.PlayerRepository
import com.cnicolas.rpg.dungeondragonsserver.utils.player.valid
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
class PlayerController(@Autowired private val playerRepository: PlayerRepository) {
    @GetMapping(Endpoints.PLAYER)
    fun getPlayers(): List<Player> {
        return playerRepository.findAll()
    }

    @PostMapping(Endpoints.PLAYER)
    fun createPlayer(@Valid @RequestBody player: Player): ResponseEntity<Player> {
        if (player.valid) {
            return ResponseEntity.ok(playerRepository.save(player))
        }

        return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED)
            .body(null)
    }

    @DeleteMapping(Endpoints.PLAYER)
    fun removePlayers() {
        return playerRepository.deleteAll()
    }
}
