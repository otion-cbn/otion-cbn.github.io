
function toggleChevron(e) {
    $(e.target)
        
        .find("span.glyphicon")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('.list-group-item').on('hidden.bs.collapse', toggleChevron);
$('.list-group-item').on('shown.bs.collapse', toggleChevron);