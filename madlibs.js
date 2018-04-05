function setup()
{
	createCanvas(window.innerWidth, window.innerHeight);

	var disallowedWords = createStringDict("ass", "noun");
	disallowedWords.create("Nate", "noun");
	disallowedWords.create("fought", "verb");
	disallowedWords.create("pooped", "verb");
	disallowedWords.create("fast", "adjective");
	disallowedWords.create("quick", "adjective");

	var replacementWords = createStringDict("noun", "butt");
	replacementWords.create("verb", "tussled");
	replacementWords.create("adjective", "slow");
	var wordDict = createStringDict();
	for (var i = 0; i < 10; i++)
	{
		var wordType = "";
		switch (i % 3)
		{
			case 0 : wordType = "n adjective";
			break;
			case 1 : wordType = " verb (past tense)";
			break;
			default:
			case 2 : wordType = " noun (plural)";
			break;
		}
		var input = prompt("Enter a" + wordType + " friendo:");
		if (disallowedWords.hasKey(input))
		{
			wordDict.create(i, replacementWords.get(disallowedWords.get(input)));
		}
		else
		{
			wordDict.create(i, input);
		}
		console.log(wordDict);
	}
	textSize(24);
	text("Cryptozoology is the " + wordDict.get(0) + " study of creatures whose existence has yet to be - or else cannot entirely be - " + wordDict.get(1) +  " or disproved by science. These " + wordDict.get(2) + ", known collectively as cryptids, include " + wordDict.get(3) + " examples like the Loch Ness Monster, Bigfoot, and The " + wordDict.get(5).replace(/\b\w/g, l => l.toUpperCase()) + ", yet these " + wordDict.get(6) +  " cases are by no means the only ones " + wordDict.get(4) + ". In fact, practically all " + wordDict.get(8) + " and every corner of the globe have their own " + wordDict.get(9) + " monster or mystery creature that supposedly " + wordDict.get(7) + " there, from giant bats in Java to enormous water hounds in Ireland.", 0, 0, width, height);


}
function draw()
{

}

/*
Cryptozoology is the study of creatures whose existence has yet to be—or else cannot entirely be—proved or disproved by science. These creatures, known collectively as cryptids, include examples like the Loch Ness Monster, Bigfoot, and the Himalayan Yeti, yet these famous cases are by no means the only ones on record. In fact, practically every country and corner of the globe has its own legendary monster or mystery creature that supposedly dwells there, from giant bats in Java to enormous water hounds in Ireland.

Source: http://mentalfloss.com/article/58943/16-cryptids-might-or-might-not-exist

Also used this a little https://stackoverflow.com/questions/2332811/capitalize-words-in-string
*/