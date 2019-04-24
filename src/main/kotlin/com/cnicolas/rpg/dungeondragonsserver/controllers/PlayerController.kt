package com.cnicolas.rpg.dungeondragonsserver.controllers

import com.cnicolas.rpg.dungeondragonsserver.database.entities.Player
import com.cnicolas.rpg.dungeondragonsserver.database.repositories.PlayerRepository
import com.cnicolas.rpg.dungeondragonsserver.utils.player.valid
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.validation.Valid

@RestController
class PlayerController(@Autowired private val playerRepository: PlayerRepository) {
    @GetMapping(Endpoints.PLAYERS)
    fun getPlayers(): List<Player> {
        return playerRepository.findAll()
    }

    @GetMapping(Endpoints.PLAYER)
    fun getPlayer(@PathVariable playerId: Long): Optional<Player> {
        return playerRepository.findById(playerId)
    }

    @PostMapping(Endpoints.PLAYERS)
    fun createPlayer(@Valid @RequestBody player: Player): ResponseEntity<Player> {
        if (player.valid) {
            return ResponseEntity.ok(playerRepository.save(player))
        }

        return ResponseEntity.status(HttpStatus.PRECONDITION_FAILED)
            .body(null)
    }

    @DeleteMapping(Endpoints.PLAYERS)
    fun deletePlayers() {
        return playerRepository.deleteAll()
    }

    @DeleteMapping(Endpoints.PLAYER)
    fun deletePlayers(@PathVariable playerId: Long) {
        return playerRepository.deleteById(playerId)
    }
}
