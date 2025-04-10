let playResultsAsHTML = [];

for (let i = 0; i < 5; i++) {
	try {
		const response = await fetch('https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=' + i)
		const html = await response.text()
		playResultsAsHTML.push(html);
	} catch (error) {
		console.error('Error fetching the HTML:', error)
	}
}

resList = {}

for (let i = 0; i < 5; i++) {
	doc = document.createElement('html')
	doc.innerHTML = playResultsAsHTML[i]
	playResults = doc.getElementsByClassName('w_450 m_15 p_r f_0')
	for (let j = 0; j < playResults.length; j++)
	{	
		title = playResults[j].getElementsByClassName('music_name_block')[0].innerHTML
		chartType = (playResults[j].getElementsByClassName('music_kind_icon')[0].src).substring(49, 51)
		scores = playResults[j].getElementsByClassName('music_score_block')
		// scores
		if (scores.length != 0)
		{
			achv = playResults[j].getElementsByClassName('music_score_block')[0].innerHTML
			dxs = playResults[j].getElementsByClassName('music_score_block')[1].textContent.trim()
		}
		else
			achv = dxs = '-1'
		// lamps
		lamps = playResults[j].getElementsByClassName('h_30 f_r')
		lp = []
		if (lamps.length != 0)
			for (let kkk = 0; kkk < 2; kkk++)	{
				srcStr = lamps[kkk].src
				lp.push(srcStr.substring(54, srcStr.substring(54).indexOf('.') + 54))
			}
		if (!(title + '_' + chartType in resList))
			resList[title + '_' + chartType] = []
		resList[title + '_' + chartType].push([achv, dxs, lp])
	}
}

const url = new Blob([JSON.stringify(resList)], {type: 'application/json'})
const a = document.createElement('a')
a.href = URL.createObjectURL(url)
a.download = 'playResults.json'
document.body.appendChild(a)

a.click()
document.body.removeChild(a)
URL.revokeObjectURL(url)