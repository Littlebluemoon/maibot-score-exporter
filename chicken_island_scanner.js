javascript:(async()=>{chickenChihoURLPrefix = "https://maimaidx-eng.com/maimai-mobile/record/musicDetail/?idx="

chickenChihoDate = new Date("2025-09-26T00:00:00+09:00")

chickenChihoURLS = [
"95d68e0634edf210ff8dc353063ec25a8e93ca75fcf9c2a02f299245fd2dedd3840338514a3d48ade961c62e01e57152a915b4845f730485e3f1b513085e0c2aTy%2FOU5BhUrsjxZLawbaWgQv5DtXE%2BNLFr50JqquvB7Q%3D",
"8e8cf95e4c3916248834cc40af47bf17c1461655bfadac7aa609484954ea0f76e2a628c0d54040a84e06e45c4fe3218f2f932787eafe76dcf0582d04a6a8e995lF34qy9Vx4kTxmQwwHXYKJSzH6vekJaVC56yY1QQBb0%3D",
"428ea5c89b4091d4a27ff1a6c8d0c69b0d1e3c3a8a1ec023d81d0445ab924fe5da5848d2603523fded59f611b86eb9c9972d1b931ce33553adaf91af8265c6dcxQfe%2Ft2vPvaMwoTWgAMnZt0IK3WiB5GwWUECrxB3sUM%3D",
"87997c0a7e7441576e864b22072c586fe6a199cda150700c54642a35e2f7fed56b7a56e49588b1067ca1aac8939f2a094a4872ae9ee2e1c0761cec94f81c9c919G7YG0xP24iA98KPzxRNqjNtArKdYe2KYV%2Bee%2FhL%2BYk%3D",
"8a8b304ba9d0fa4d619b89d41879fec9c9f9fd794797c729e0ce8e2830ae1dd3c41f1c371014f2d4efc8d989dbe5ff4794742bb2961ce5479dfb8d54c89c42a5pI0ehjL0h5D%2FvPC2t8dMY%2BQ4CoVQwVCnSUrNOQNHDpI%3D",
"8ed2a7da8139f6da99c231ce19778eb9ae3cce9f1de196786213ed77fcdc9dadd158dd3212b73e1544d89381f88c48bf4517b2c99630c8ffef9723a11a87114d1m%2FeMaqwCElAZoYwMzM2iMN9h8KgZ8DFxoEvcQrr84s%3D",
"a40b8746c709073541352edb40a1a4005f3c0a88bc5aed7449c0c930c66af80ef40914a224c81a776984a7e2d8023e600aeff03ce25046139ca47f0785548aadICBO8ezbBT3%2FcGkp4kB5TWYj7LWjjUzqq6Fe6SYge20%3D",
"31e41a7a1be3cea40102f7047f958d686ae09d814441adb59d06cad85f7a4f0ad09f1134d1705d703c62ddf6f6373a2f50c54a41ea49d423a5a9e8664f9574b2YKgyzPFR2MGMtEc4Ur5eBLXRUhlOoypPiFokjAGIL7g%3D",
"ee341344969723722774be1148dce0817b4dad77506940b6a7ae43be38d009eca7998e0bafbd537e334f14ceb0150b5724b1f4ab83c99b24f54dae6f302061d1%2F2iNPFcQUeHPzU59kil3jxrQDBFxWxEpPHNkYt0mT3w%3D	",
"f1bd478c20ab4e1334f50de8e4540dc2b01d4ccd03c71bdd6026ca4f2199a76b5b1e1f46083c35f93d4fcd9f7489b77df599f69895c7cc8edbea869493f4cc02mKRqzZOFOgvl5nhQxrH3XUYooeEVvnKevpR4%2BhUf%2F7M%3D",
]

chickenChihoSongTitle = [
"ドラゴンエネルギー", "DRAGONLADY", "Garden Of The Dragon", "Brand-new Japanesque", "Outlaw's Lullaby",
"鼓動", "神室雪月花", "KONNANじゃないっ！", "ばかみたい【Taxi Driver Edition】", "好きな惣菜発表ドラゴン",
]

var songs = 10

htmlContent = []

for (let i=0; i<songs; i++)
{
	try {
		await new Promise(r => setTimeout(r, 500));
		const response = await fetch(chickenChihoURLPrefix + chickenChihoURLS[i])
		const html = await response.text()
		console.log("Getting song " + i)
		htmlContent.push(html)
	} catch (error) {
		console.error('Error fetching the HTML:', error)
	}
}

const parser = new DOMParser();

var lastPlayed = []

for (let i=0; i<songs; i++)	{
	const doc = parser.parseFromString(htmlContent[i], 'text/html');
	var playDates = doc.getElementsByClassName('collapse f_11')
	if (playDates.length == 0)
		lastPlayed.push(new Date(0));
	else{
		maxLastPlay = new Date(playDates[0].rows[0].cells[1].textContent.trim());
		for (let j=1; j<playDates.length; j++)	{
			dateString = playDates[j].rows[0].cells[1].textContent.trim().replace(' ', 'T').replace(/\//g, "-") + ':00+09:00'
			if (new Date(dateString) >= maxLastPlay)
				maxLastPlay = new Date(dateString);
		}
		lastPlayed.push(maxLastPlay)
	}
}

const playTable = document.implementation.createHTMLDocument("My Blank Document");
const tbl = playTable.createElement('table');
tbl.style.border = '1px solid black';
// Headers
const thead = playTable.createElement('thead');
const headRow = playTable.createElement('tr');
const th1 = playTable.createElement("th");
th1.textContent = "Song to play";
headRow.appendChild(th1);
const th2 = playTable.createElement("th");
th2.textContent = "Last Played";
headRow.appendChild(th2);

thead.appendChild(headRow);
tbl.appendChild(thead);
const tbody = playTable.createElement('tbody');

for (let i=0; i<songs; i++)	{
	if (lastPlayed[i] >= chickenChihoDate)
		continue;
	else	{
		let row = document.createElement('tr');
		let cell1 = document.createElement('td');
		cell1.textContent = chickenChihoSongTitle[i];
		let cell2 = document.createElement('td');
		if (lastPlayed[i] == new Date(0))
			cell2.textContent = "Not Played";
		else
			cell2.textContent = lastPlayed[i];
		row.appendChild(cell1);
		row.appendChild(cell2);
		tbody.appendChild(row);
	}
}

tbl.appendChild(tbody);

const style = playTable.createElement('style');
style.textContent = `
  body { font-family: sans-serif; padding: 10px; }
  table { border-collapse: collapse; width: 100%; }
  th, td { border: 1px solid black; padding: 6px; }
`;
playTable.head.appendChild(style);
playTable.body.appendChild(tbl);

const htmlTableContent = '<!DOCTYPE html>\n' + playTable.documentElement.outerHTML;
const blob = new Blob([htmlTableContent], { type: 'text/html' });

const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'playlist_table.html'; // filename
a.click();
})();
