function doNavigation (fn) {
    let page = '../' + fn.substring(1) + '.html';
    console.log ('doNavigation fn='+fn+' page='+page);
    $('#mainContent').load(page);
}

$(window).on('hashchange', function(){
    console.log( "hash change! " + window.location.hash);
    doNavigation(window.location.hash);
});
$(document).ready(function() {  
    let url = window.location.pathname;
    let fn = url.slice(url.lastIndexOf("/")+1);
    fn = fn ? fn : "#home"
    doNavigation(fn)
});  
  