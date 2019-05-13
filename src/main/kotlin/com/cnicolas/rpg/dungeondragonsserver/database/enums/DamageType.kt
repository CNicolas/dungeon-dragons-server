package com.cnicolas.rpg.dungeondragonsserver.database.enums

import com.cnicolas.rpg.dungeondragonsserver.database.enums.DamageCategory.MAGICAL
import com.cnicolas.rpg.dungeondragonsserver.database.enums.DamageCategory.PHYSICAL

enum class DamageType(category: DamageCategory) {
    ACID(MAGICAL),
    BLUDGEONING(PHYSICAL),
    COLD(MAGICAL),
    FIRE(MAGICAL),
    FORCE(MAGICAL),
    LIGHTNING(MAGICAL),
    NECROTIC(MAGICAL),
    PIERCING(PHYSICAL),
    POISON(MAGICAL),
    PSYCHIC(MAGICAL),
    LIGHT(MAGICAL),
    SLASHING(PHYSICAL),
    SOUND(MAGICAL)
}
