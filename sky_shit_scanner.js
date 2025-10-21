skyStreetURLPrefix = "https://maimaidx-eng.com/maimai-mobile/record/musicDetail/?idx="

skyStreetDate = new Date("2025-01-16T00:00:00+08:00")

skyStreetURLS = [
"74e6c63f6886ac162c1c051716a0fb6faf844cc9fe3fc0b80b2d11efd23857cb8a75df02a65fa5e653f9c999177aa60065f168d2ef71e1a6257fd6e401679f3a4ubucS0Yrev7%2FlX75AZrssBuGHLIMyj%2FGvvFfih8Aeo%3D",
"98c40402543781074a2ef621af201bb8bf2723e4ab51b59a214961ccc3a19f25a904a9bbe725db44e5ffe6fddbd0c3cace431952f2f5689ab292bda9b792afcc6f718HINmycWAGNyRjsKUWuiyQuZs5vmG3BvcteOBIQ%3D",
"7f0963a31335efb571f22993ff32c60723c9f8becc54cb9f5853fab7dfa1998214fae97e4a8475d4a34ff9e5c1d2b78fb4e72bdc7defdc5271211e3c7ff1d4f7YXsZPTjCmNJs03kN%2FNb7y97nKGSMhf6BBDNbUS211dE%3D",
"c38852fe91cde5092cc9f70f2e2460b50dfcc566869badf0bcce0495542765ae0fdf112760f219b2dad537a0965e4e5c7046ff8784fc2d1ccb896e579fa5d2d8rPJpYlHVhMCQzbFJ287XV4yUXWO1O7AfDfy%2FONd0D5o%3D",
"7280a5c6adb52ce5253c2897a4bf1b8b1c29d1e73892d409020c91132c7a9afe1b96a562b5a3066a59f21cdf83885cf0d1ce9bb32394f25b1b745072a531126dn09n0j6Ncz4MYqo92WNm5dTPGsOKvZFL9If1DJQL%2FV0%3D",
"449c93db7539fca0c100ab7dc1bcfc44559b82eb74709bbc42c64a3601aa12eab0a4b88e34249224dd8af5f7d5575e73b4823e3005f642e3b2b437514179375aozs1VRV8lYoGUUSzptdfKRGjqkntmEfrxD9gF2zNujI%3D",
"2c40d95a82ce39ca493ec0bcbefdd7028a679145c8e1b065934ee0a3cdc2841300f6d3f401cafcc3072c32c03fa3450dee08956143830037ba35da113f0f3092XgGklFHuwGGlE5uJ%2BZB7SO%2BjoDdXLoSTe%2BJyu4oSOzY%3D",
"052ddde1a9ce2c8497e90c8b552e246a2363e9482ae740d3ca37c900a52f8c1e368a64a362f88c8383e3136ba09d46011375fc12ae572c4d918b306b0db0c7d7W4k2lV1uf6bq5IU3m19k6ftCK4THfhEQhKfILlZMTIY%3D",
"972a8dcee829f5629ec0bd0075aaa949495d2a6e1ec3e49360d34e075a298dbc4c79ef3036e491008d86cfe79c5cc8dade73d5b37f7a59cab42e9452762ed201d7lJx7ohIIlhVuQyjnF95FPsTHFiDJDM53LcuucUQwY%3D",
"a1f3d4b91499d2c7d3761b00d80f607fe00b5bbb0dcf2f96da084eed8912b2d09a5276b10f040cb306f2cf652b054971dfa0adeb9a8c99a941ee809ea8ca97911JzTBqzOKqVDq%2BoPhk2EVxavKIRwBtEQj%2B%2F9vdlvd2U%3D",
"beccb7a03c5987034fc0f34000dd64ce4f7452f50497fd4d7a9317c4a6f22e066ee90ef477da716031607ad67068af4082bef1d531690154d54ce5a4cec44138mfn6EOnUkGcm5x1pMwA9OP0Bi%2BLMHru%2BJmmvq9LCMfA%3D",
"088c84a421a8f3f641464e28f6e7d847e0e32b47ad48ab66289ed09c350ab7330cb9da8bef7ea03dbb716cb4715be83ae43dca088ae93041c16f4b365e984a676N8iHytBStBpXus6ADcILK02Me5WmDKAeNqHv3FIk%2Bs%3D",
"3b2c277480f4676e5436f076f760b7b4746dcccac2b0d40bab60fa1f0e2b8e21e654818eff94f6c883ccd4b9536d18f3a80d17629344a16bf99d3b6c037fd591QCwCeWgiNRSl5WLCr8cNdPiP91jjhsRtyn093VfQt%2BE%3D",
"248d695490aa64441ac42dad6f84b9c5c8f8af74a361ab788b30d711bf253ab3517813487e2a21f344a0cf05c878853d06d67238cfe973289a73da228503729c4T%2BvaWNmhkWpglKjq5PuGtFQAojD2fvj3Ozo6LI3yJM%3D",
"b1d5ddcfa250312d2aa370b7a80c3b6c71bebd589f0ab95726e6fe61a9902f9d405ca9e131cb63499ec131a50061f755b2301d579450ab53deea5494290fb9970WCDd0reOf6xrHjeTCfwvIT4mNVA0D613m6AzQVkv3Q%3D",
"08157d92745191825677186a9122a4307fcff9635aa263f36cc302fd9b701d0f03132ce055122c1fa0a15465584d42615363d315271ebc02b9ac8055b9e86b1fJDW4zSJIol%2F%2FVc2Z2MU5tI%2BoecUINt3oEHXJ3ibWsR4%3D",
"c8697a35052661693d390e3070c2d22954eac1da3df61c525ac26986df89be83747cc1967be7efc91d6a41c1cedf4c15997f4e891edd36f06276d762e80ae4b31ZgFmB2hh6prRSzxGTDX%2FFHrVTqGfV%2BIgxJVdcrGNck%3D",
"2784367c8b49328966bace4ffec370c331942c501806c9342ee2760d7a46ae55661e8aa2df385b3814f89b720d4a648a5e4f262e0a447498506ad434d9e538dagf9T1zUpl5lHG9XwG%2BlaS%2FlCuXeC%2FukMNEP5yy2qyvM%3D",
"3bf7890bfb107899c6ca5680e446c033d885dcf9089ba2e1e9e494f09339ebf54ceb33a4472a7370a86024e9b25f6979622c07b733b7211efa92eae832a985c8SEAaaYLYn8eNqxf7BbVWwxP9PZFCqe%2BKUYXv%2FF3QdBg%3D",
"3622156b6a10e2d294912dbad1b2b2a7aef0e54dee050b9db6c514ac76e24dcde2d256a27a3356e05492be676368df55dd2837bdafa17295160f33edbfbf59b3N4f3IFEr%2BmgQxfGgbxB%2FHdJ3EkY%2BWkyf%2BPdKH6A%2B%2BMY%3D",
"a49770f83723dfc172ea30e26bdf7e0ca38d304cad0d15f80179f5d1c1ee9ee05cd112a35fdc63100ece08609785a2a123674e57fee3d9b44e2170088763f063Qi0RN3cRty6obdSo18hPwbZkGjvGaUd79oFxPDk5QMQ%3D",
"90b088c8100a6ecf7180675c6a691d4b472473a223777146021446ac370f20b7a5c2980dc4ff5f77bc735b1ce651eecdb08026abee7c99e74d747b4577f8c5bdjek%2BjeQf09OU7MnSx%2Fk5kljMXszkn09MyrVacnTelfY%3D",
"6590075c7d3990d1a6c0786beff7ca28ed422d00881271e2697d4c406f3f084dd543e640aae8d811a726a73fdc6727f961a105c12e9bb32c6c470b737106a43fy%2FkHzAWGnWYxFzwKVWR57n%2Fh%2Bd6kNtviOT8jW3LfXuQ%3D",
"5501a6758481e5a428f9737cd4d9860bcb0735e5b3ec38260c1582abf2c34e7efc9123551a84d069c8bc6c2899967382d90f43867ae491b20d3c5ff855f3c12fkGx259EXDoMSdDDPQxmY%2BQpyOTEeat%2FV8NOyLx6LwUk%3D",
"bf2b6bda1363883fa47dd78ad74e41e9536a34040cb2321801a14e2fa2caa139181d92299abfa3e6da062998df47106b589f09a73a0aeb64081ace6ab32ca27c6SgcJItM6otTJjN3srvt0ulBAz7SNzkD7VsgL2EMPG4%3D",
"f0f32a3a283c499a5ab6b33bd08e113710f9d41bcff2d80aa4e15170ec143aa86d8853b2877fb9e3a976b5e1eeffe4440451ee009b24e883f9a7df8271ae31eauUhEibXXdR%2Bfje10R1WkaPzdazSvpIkMDcgdW9qwvzs%3D",
"f79cbf6bd2158d6c105874273152184007a3ebdeb9811283d506740fade1c34100e3f74474b04e7021727084ea9f86fd3b04bbfa2a1037612078df8bf8945f0f1kszbg2MtPmU5Iv%2BZa1UQlE6DKaWsXg3TfOe%2FjgRmkc%3D",
"d2a769ebd2c8b960c138ade712d1bc8dd4d26a06297bd6eb1398794c5d7d88b6f96290200ab165764944be4374f7d44c8d56f6725b675b5db62d7d6d63ff5a0aT0DnNSFhejrSylgx%2BRuEHYnxFkq39%2FPTNAr1FZHfXgM%3D",
"108774e291da79a89f25055aa7d52cd65b1777f261ba7999935dbd615bcedfe53ebbac138d301cf9bb9b00e00ab2f70a18caf34413df02cfbdac4006464b5c9eRG7i%2BQuygTgUR8iqaBpUXfyzvJYgyuGHuGdYRN8QdDY%3D"
]

skyStreetSongTitle = [
"STEREOSCAPE", "Crazy Circle", "シエルブルーマルシェ", "ブレインジャックシンドローム", "共鳴", "Ututu", "REAL VOICE", "ユメヒバナ", "オリフィス", "星めぐり、果ての君へ。", "スローアライズ", 
"生命不詳", "RIFFRAIN", "Falling", "ピリオドサイン", "アンバークロニクル", "リフヴェイン", "宵の鳥", "フェイクフェイス・フェイルセイフ", "シックスプラン", "フタタビ", "パラドクスイヴ", "YKWTD", "パラボラ",
"チエルカ／エソテリカ", "群青シグナル", "Kairos", "ふらふらふら、", "184億回のマルチトニック"
]

var songs = 29

htmlContent = []

for (let i=0; i<29; i++)
{
	try {
		await new Promise(r => setTimeout(r, 500));
		const response = await fetch(skyStreetURLPrefix + skyStreetURLS[i])
		const html = await response.text()
		console.log("Getting song " + i)
		htmlContent.push(html)
	} catch (error) {
		console.error('Error fetching the HTML:', error)
	}
}

const parser = new DOMParser();

var lastPlayed = []

for (let i=0; i<29; i++)	{
	const doc = parser.parseFromString(htmlContent[i], 'text/html');
	var playDates = doc.getElementsByClassName('collapse f_11')
	if (playDates.length == 0)
		lastPlayed.push(new Date(0));
	else{
		maxLastPlay = new Date(playDates[0].rows[0].cells[1].textContent.trim());
		for (let j=1; j<playDates.length; j++)	{
			dateString = playDates[j].rows[0].cells[1].textContent.trim().replace(' ', 'T').replace(/\//g, "-") + ':00+08:00'
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

for (let i=0; i<29; i++)	{
	if (lastPlayed[i] >= skyStreetDate)
		continue;
	else	{
		let row = tbody.createElement('tr');
		let cell1 = row.createElement('td');
		cell1.textContent = skyStreetSongTitle[i];
		let cell2 = row.createElement('td');
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
const htmlTableContent = '<!DOCTYPE html>\n' + playTable.documentElement.outerHTML;
const blob = new Blob([htmlTableContent], { type: 'text/html' });

const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'playlist_table.html'; // filename
a.click();