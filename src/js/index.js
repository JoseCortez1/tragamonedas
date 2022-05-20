/**
 * /* format
 *
 * @format
 */

import Slot from "./Slot.js"

const config = {
	inverted: true, // true: reels spin from top to bottom; false: reels spin from bottom to top
	onSpinStart: (symbols) => {
		console.log("onSpinStart", symbols)
	},
	onSpinEnd: (symbols) => {
		console.log("onSpinEnd", symbols)
		console.log(
			"onSpinEnd 0",
			symbols[0],
			symbols[0][0] === symbols[0][1],
			symbols[0][0] === symbols[0][2]
		)
		console.log(
			"onSpinEnd 1",
			symbols[1],
			symbols[1][0] === symbols[1][1],
			symbols[1][0] === symbols[1][2]
		)
		console.log(
			"onSpinEnd 2",
			symbols[2],
			symbols[2][0] === symbols[2][1],
			symbols[2][0] === symbols[2][2],
			symbols[1][1] === symbols[1][0] && symbols[1][0] === symbols[2][1]
		)
		if (symbols[0][0] === symbols[1][0] && symbols[1][0] === symbols[2][0]) {
			console.log("You win!")
		} else {
			console.log("You lose!")
		}
	},
}

const slot = new Slot(document.getElementById("slot"), config)
