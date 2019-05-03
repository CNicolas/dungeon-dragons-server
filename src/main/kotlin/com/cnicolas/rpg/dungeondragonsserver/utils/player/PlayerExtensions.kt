package com.cnicolas.rpg.dungeondragonsserver.utils.player

import com.cnicolas.rpg.dungeondragonsserver.database.tables.Player

val Player.valid: Boolean
    get() = this.name.trim() != ""
