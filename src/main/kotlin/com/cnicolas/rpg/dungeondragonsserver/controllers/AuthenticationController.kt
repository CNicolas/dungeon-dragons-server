package com.cnicolas.rpg.dungeondragonsserver.controllers

import org.springframework.http.ResponseEntity
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class AuthenticationController {
    @GetMapping(Endpoints.ME)
    fun login(currentUser: OAuth2AuthenticationToken): ResponseEntity<OAuth2AuthenticationToken> {
        return ResponseEntity.ok(currentUser)
    }
}
