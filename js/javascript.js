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