function doNavigation (fn) {
    let selection = fn.split('/');
    let page = '../' + selection[1] + ".html";

    if (selection.length > 2) {
        page += '#' + selection[2];
    }
    console.log('do nav - fn='+fn+' selection='+selection+' page='+page);
    $('#mainContent').load(page);
}
$(window).on('hashchange', function(){
    console.log( "hash change! " + window.location.hash);
    doNavigation(window.location.hash);
});
$(document).ready(function() {  
    let hash = window.location.hash;
    hash = hash ? hash : "#/home"
    doNavigation(hash)
});  
  