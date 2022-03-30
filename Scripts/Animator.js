var Animator = {
    _speed:       1000,
    _delaySpeed:  850,
    _offset:      300,
    _zigZagSpeed: 200,
    _snakeSpeedDown: 125,
    _snakeSpeedUp: 250,
    _scrollSpeed: 2000,
    moveFromLeft: function (parent, runAfter) {
        $('.' + parent + ' .moveFromLeft')
            .css('opacity', 0)
            .css('position', 'relative')
            .css('left', -this._offset)
            .animate({ 'opacity': 1, 'left': 0 }, this._speed);
        if (runAfter) setTimeout(function () { runAfter(); }, this._delaySpeed);
    },
    moveFromRight: function (parent, runAfter) {
        $('.' + parent + ' .moveFromRight')
            .css('opacity', 0)
            .css('position', 'relative')
            .css('left', this._offset)
            .animate({ 'opacity': 1, 'left': 0 }, this._speed);
        if (runAfter) setTimeout(function () { runAfter(); }, this._delaySpeed);
    },
    moveFromTop: function (parent, runAfter) {
        $('.' + parent + ' .moveFromTop')
            .css('opacity', 0)
            .css('position', 'relative')
            .css('top', -this._offset)
            .animate({ 'opacity': 1, 'top': 0 }, this._speed);
        if (runAfter) setTimeout(function () { runAfter(); }, this._delaySpeed);
    },
    moveFromBottom: function (parent, runAfter) {
        $('.' + parent + ' .moveFromBottom')
            .css('opacity', 0)
            .css('position', 'relative')
            .css('top', this._offset)
            .animate({ 'opacity': 1, 'top': 0 }, this._speed);
        if (runAfter) setTimeout(function () { runAfter(); }, this._delaySpeed);
    },
    fadeIn: function (parent, runAfter) {
        $('.' + parent + ' .fadeIn')
            .css('opacity', 0)
            .animate({ 'opacity': 1 }, this._speed);
        if (runAfter) setTimeout(function () { runAfter(); }, this._delaySpeed);
    },
    storyTelling: function (parent, runAfter) {
        var interval = 0;
        $.each($('.' + parent + ' .story'), function () {
            interval += 450;
            $(this).animate({ 'opacity': 1 }, interval);
        });
        if (runAfter) setTimeout(function () { runAfter(); }, interval);
    },
    typeOut: function (parent, runAfter) {
        var interval = 0;
        $.each($('.' + parent + ' .typeOut'), function () {
            interval += 50;
            $(this).animate({ 'opacity': 1 }, interval);
        });
        if (runAfter) setTimeout(function () { runAfter(); }, interval);
    },
    zigZag: function (parent, runAfter) {
        var interval = 100;
        $.each($('.' + parent + ' .zig'), function () {
            interval += Animator._zigZagSpeed;
            $(this).css('opacity', 0).css('position', 'relative').css('left', $(document).width() / 4).animate({ 'opacity': 1, 'left': 0 }, interval);
        });
        interval = 0;
        $.each($('.' + parent + ' .zag'), function () {
            interval += Animator._zigZagSpeed;
            $(this).css('opacity', 0).css('position', 'relative').css('left', -$(document).width() / 4).animate({ 'opacity': 1, 'left': 0 }, interval);
        });
        if (runAfter) setTimeout(function () { runAfter(); }, interval);
    },
    snakeDown: function (parent, runAfter) {
        var elements = $('.' + parent + ' .snakeDown').toArray();
        var speed = 250;
        for (var i = 0; i < elements.length; i++) {
            $(elements[i]).css('opacity', 0)
                .css('position', 'relative')
                .css('top', -$(document).height() / 3)
                .animate({ 'opacity': 1, 'top': 0 }, speed);
            speed += Animator._snakeSpeedDown;
        }
        if (runAfter) setTimeout(function () { runAfter(); }, speed / 5 * 4);
    },
    snakeUp: function (parent, runAfter) {
        var elements = $('.' + parent + ' .snakeUp').toArray();
        var speed = 500;
        for (var i = 0; i < elements.length; i++) {
            $(elements[i]).css('opacity', 0)
                .css('position', 'relative')
                .css('top', $(document).height() / 3)
                .animate({ 'opacity': 1, 'top': 0 }, speed);
            speed += Animator._snakeSpeedUp;
        }
        if (runAfter) setTimeout(function () { runAfter(); }, speed / 5 * 4);
    },
    scrollTo: function (id, runAfter) {
        $("#" + id).show(100, function () {

            $('html, body').animate({
                scrollTop: $("#" + id).offset().top
            }, this._scrollSpeed);
            if (runAfter) setTimeout(function () { runAfter(); }, this._scrollSpeed);
        });
    },
    spin: function (parent, runAfter) {
        $('.' + parent + ' .spin').css('opacity', 0).animate({ 'opacity': 1, borderSpacing: -360 * 10 }, {
            step: function (now, fx) {
                $(this).css('transform', 'rotate(' + now + 'deg)');
            },
            duration: this._speed
        }, 'linear');
        if (runAfter) setTimeout(function () { runAfter(); }, this._delaySpeed);
    },
    spinY: function (parent, runAfter) {
        $('.' + parent + ' .spinY').css('opacity', 0).animate({ 'opacity': 1, borderSpacing: -360 * 10 }, {
            step: function (now, fx) {
                $(this).css('transform', 'rotateY(' + now + 'deg)');
            },
            duration: this._speed
        }, 'linear');
        if (runAfter) setTimeout(function () { runAfter(); }, this._delaySpeed);
    },
    pause: function(seconds, runAfter) {
        setTimeout(function () { if (runAfter) runAfter(); }, seconds * 1000);
    }
}