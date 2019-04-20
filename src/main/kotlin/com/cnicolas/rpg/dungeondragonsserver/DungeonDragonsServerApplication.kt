package com.cnicolas.rpg.dungeondragonsserver

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
open class DungeonDragonsServerApplication

fun main(args: Array<String>) {
	runApplication<DungeonDragonsServerApplication>(*args)
}
