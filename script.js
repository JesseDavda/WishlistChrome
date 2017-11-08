function getCurrentTabUrl(callback) {

    var queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, tabs => {

        var tab = tabs[0];

        var tabInfo= {
            url: tab.url,
            favicon_url: tab.faviconUrl,
            title: tab.title
        }

        console.assert(typeof url == 'string', 'tab.url should be a string!');

        callback(tabInfo);
    });

}

getCurrentTabUrl(tabInfo  => {
    var url = tabInfo.url, favicon_url = tabInfo.favicon_url, title = tabInfo.title;

    document.getElementById("text").innerHTML = title;

    axios.get(`185.177.21.13:3000/addSite?url=${url}&favicon_url=${favicon_url}&title=${title}`, (err) => {
        if(err != undefined)
            console.log(err);
    });
});
