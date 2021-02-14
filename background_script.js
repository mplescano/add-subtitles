var nmSpcBrowser = typeof browser !== 'undefined'? browser : chrome;
nmSpcBrowser.browserAction.onClicked.addListener((tab) => {
    if (tab.active && nmSpcBrowser.tabs.TAB_ID_NONE != tab.id) {
        var resultJszip = nmSpcBrowser.tabs.executeScript({
            file: "/content_scripts/jszip.min.js"
        });
        Promise.resolve(resultJszip).then(resolvedJszip =>
            nmSpcBrowser.tabs.executeScript({
                file: "/content_scripts/add_subtitles.js"
            })
        );
    }
});