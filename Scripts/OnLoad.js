$('.skillList').empty();
$.each(Config.skills, function (key, group) {
    $('.skillList').append('<p class="snakeDown text-center" style="margin-bottom: 0px;">' + group.name + '</p>');
    $.each(group.items, function (index, value) {
        var percentage = value.rank * 20;
        var bgColor = '';
        switch (value.rank) {
        case 1: bgColor = 'bg-danger'; break;
        case 2: bgColor = 'bg-warning'; break;
        case 3: bgColor = 'bg-info'; break;
        case 4: bgColor = 'bg-success'; break;
        default: bgColor = ''; break;
        }

        $('.skillList').append('<div class="progress snakeDown"><div class="progress-bar ' + bgColor + ' text-left font-weight-normal" role="progressbar" aria-valuenow="' + percentage + '" aria-valuemin="0" aria-valuemax="100" style="width: ' + percentage + '%; padding-left: 5px;">' + value.name + '</div></div>');
    });
});

$('.qualificationsList').empty();
var position = 0;
$.each(Config.qualifications, function (key, group) {
    $('.qualificationsList').append('<p class="text-center" style="margin-bottom: 0px; opacity: 1;">&nbsp;</p>');
    $.each(group.items, function (index, value) {
        var bgColor = group.name == 'cert' ? 'alert-primary' : 'alert-info';
        var bgIcon = group.name == 'cert' ? 'oi-badge' : 'oi-check';
        var zigorZag = position == 0 ? 'zig' : 'zag'
        $('.qualificationsList').append('<div class="alert ' + bgColor + ' ' + zigorZag + '" role="alert"><span class="oi ' + bgIcon + '" aria-hidden="true"></span>&nbsp;' + value.name + '</div>');
        position = position == 0 ? 1 : 0;
    });
});