chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		replaceHtml();
	}
});

const replaceHtml = () => {
	document.querySelector('#main > div.forecastCity > table > tbody > tr > td:nth-child(1) > div > p.pict').innerHTML = '快晴';

	document.querySelector('#main > div.forecastCity > table > tbody > tr > td:nth-child(2) > div > p.pict').innerHTML = '快晴';

	document.querySelector('#yjw_week > table > tbody > tr:nth-child(2) > td:nth-child(2)').innerHTML = '快晴';

	document.querySelector('#yjw_week > table > tbody > tr:nth-child(2) > td:nth-child(3)').innerHTML = '快晴';

	document.querySelector('#yjw_week > table > tbody > tr:nth-child(2) > td:nth-child(4)').innerHTML = '快晴';

	document.querySelector('#yjw_week > table > tbody > tr:nth-child(2) > td:nth-child(5)').innerHTML = '快晴';

	document.querySelector('#yjw_week > table > tbody > tr:nth-child(2) > td:nth-child(6)').innerHTML = '快晴';

	document.querySelector('#yjw_week > table > tbody > tr:nth-child(2) > td:nth-child(7)').innerHTML = '快晴';

}
