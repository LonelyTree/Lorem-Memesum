const smol = {
	whatIs: `I'm not answering the question, but I need help. I've looked this up on several occasions and I still can't quite figure out what copypasta is. As near as I can tell, story-length memes? Is it just some elite-level inside joke that TL;DR people will never get? I just don't get it. I mean, do people laugh about these?`,
	semphis: `i think its hilarious u kids talking shit about semphis. u wouldnt say this shit to him at lan, hes jacked. not only that but he wears the freshest clothes, eats at the chillest restaurants and hangs out with the hottest dudes. Y'all are pathetic lol`,
	darth: `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It’s not a story the Jedi would tell you. It’s a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did.  Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.`,
	liftBro: `Like I said...You have the lower body and you have no upper body, you got a problem building...wait a minute. You have the upper body, and you have no legs, you got a problem building your legs. You have the upper...you have the lower body and you don't have the upper body, the upper body, it is easier to build. So if you have the lower body and you don't have the upper body, it is easier to build the upper body. You have the upper body and you don't have the legs, you got a problem building the lower body... No, you don't understand. You have the upper body, but you don't have the lower body, you got a problem building downstairs. You got the up- legs on the bottom, it is easier to build on the top, so you don't have much as a problem. Yeah.`,
	wolo: `Bring your chin down to protect your neck while continuing to stare in his eyes. Bring up your hands and say "I don't want no trouble ya hear". Flex your traps and core. Slightly bend your knees. Here comes the important part. In a low voice begin to say "wolowolowolowolowolo" slowly increasing in volume. He should be surprised by now. Begin to sway side to side and loosen all facial muscles and your anal sphincter and your kegal muscle. By now you should be pretty loud and your opponent will have stepped back and appear visibly shaken. Begin to soil yourself and let your eyes roll to the back of your head. By now, you're chanting "WOLOWOLOWOLOWOLO" at the top of your lungs. He will run away. Everyone within a one mile radius will feel a terrifying presence within their soul. Marvel as you ascend into your planar form.`,
	tiffany: `What is my perfect crime? I break into Tiffany's at midnight. Do I go for the vault? No, I go for the chandelier. It's priceless. As I'm taking it down, a woman catches me. She tells me to stop. It's her father's business. She's Tiffany. I say no. We make love all night. In the morning, the cops come and I escape in one of their uniforms. I tell her to meet me in Mexico, but I go to Canada. I don't trust her. Besides, I like the cold. Thirty years later, I get a postcard. I have a son and he's the chief of police. This is where the story gets interesting. I tell Tiffany to meet me in Paris by the Trocadero. She's been waiting for me all these years. She's never taken another lover. I don't care. I don't show up. I go to Berlin. That's where I stashed the chandelier.`,
}
const randomSmol = () => {
	smolArr = [
		smol.darth,
		smol.liftBro,
		smol.semphis,
		smol.tiffany,
		smol.whatIs,
		smol.wolo,
	]
	return smolArr[Math.floor(Math.random() * smolArr.length)]
}

module.exports = { randomSmol, smol }
