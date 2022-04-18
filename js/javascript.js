function jumpToAnchor(anchor) {
    if (anchor) {
        window.location = String(window.location).replace(/\#.*$/, "")+`#${anchor}`;
    } else {
        window.location = String(window.location).replace(/\#.*$/, "")+``;
    }
}

window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.btn-to-top').style.display = 'flex';
    } else {
        document.querySelector('.btn-to-top').style.display = 'none';
    }
}

function topFunction(target = 0) {
    document.body.scrollTop = target;
    document.documentElement.scrollTop = target;
}

function processUser(){
    if (location.href.includes('fr')) {
        currentLang = 'fr';
    } else {
        currentLang = 'en';
    }
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    chosenLang = temp[1];
}

window.onload = function(){
    var userLang = navigator.language || navigator.userLanguage;
    processUser();
    if (!chosenLang || chosenLang == undefined) {
        if (userLang == 'fr' && currentLang != 'fr') {
            window.location.href = '/fr/';
        }
        else if(userLang == 'en' && currentLang != 'en'){
            window.location.href = '../';
        }
        
    }
}