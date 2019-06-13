/* BEST VIEW IN FULL SCREEN MODE CTRL + SHIFT + 0 */


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.fixed-action-btn').floatingActionButton();
});