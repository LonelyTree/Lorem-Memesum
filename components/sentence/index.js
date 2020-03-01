const sentence = {
	pasta: `I make my own pasta, thanks.`,
	shia: `The shia labeouf one is my personal favourite..`,
	dontPretend: `Don't👏 pretend👏 to 👏be 👏entitled👏 to👏 financial👏 compensation👏 if 👏you 👏or👏 a👏 loved 👏one 👏hasn't👏 even 👏been 👏diagnosed👏 with 👏mesothelioma`,
	orderUP: `I'll have 2 number nines, a number nine large, a number six with extra dip, a number seven, 2 number forty-fives, one with cheese, and a large soda.`,
	tacoBell: `I went to Taco Bell and tried to spend a $2 bill, and the cashier had no idea what it was and called the cops.`,
	girlfriend: `My girlfriend tells me that size doesn't matter but I still wish she didn't have a penis.`,
	foot: `so my foot's totally stuck in there right, i'm freaking out, the dog's having a seizure and i still got half a pie left`,
	buffalo: `Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo.`,
	everest: `If Earth were the size of a golf ball, the largest known star, VY Canis Majoris, would be the size of Mt. Everest.`,
	lobster: `Lobsters are mermaids to scorpions.`,
	newton: `Students generally learn calculus at about the same age as when Isaac Newton invented it.`,
	walk: `Oh wait. I just remembered. You're boring and my legs work.`,
}
const randomSentence = () => {
	let sentArr = [
		sentence.pasta,
		sentence.dontPretend,
		sentence.orderUP,
		sentence.shia,
		sentence.tacoBell,
		sentence.buffalo,
		sentence.everest,
		sentence.foot,
		sentence.girlfriend,
		sentence.lobster,
		sentence.newton,
		sentence.walk,
	]
	return sentArr[Math.floor(Math.random() * sentArr.length)]
}

module.exports = { randomSentence, sentence }
