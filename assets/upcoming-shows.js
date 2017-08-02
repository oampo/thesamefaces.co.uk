function mod(n, m) {
    return (n % m + m) % m;
}

$('.show-date').toArray().forEach(function($date) {
    $date = $($date);
    var date;
    if ($date.data('data')) {
        date = moment($date.data('data'));
        // TODO
    } else {
        var day = $date.data('day');
        var dayInt = mod(moment().day(day).day() - 1, 7);
        var week = $date.data('week');
        var rule = new RRule({
            freq: RRule.MONTHLY,
            bysetpos: week,
            byweekday: dayInt
        });
        var now = moment();
        var start = moment($date.data('start'));
        if (now.isAfter(start)) {
            start = now;
        }

        date = moment(rule.after(start.toDate()));
        $date.attr('data-date', date.format('YYYY-MM-DD'));
        $date.text(date.format('dddd, D MMMM YYYY'));
    }
    $date.attr('data-date', date.format('YYYY-MM-DD'));
    $date.text(date.format('dddd, D MMMM YYYY'));
});

$('.upcoming-show-list').toArray().forEach(function($location) {
    $location = $($location);
    $location
        .children('.upcoming-show')
        .sort(function($a, $b) {
            $a = $($a);
            $b = $($b);
            var dateA = $a.children('.show-date').data('date');
            var dateB = $b.children('.show-date').data('date');
            dateA = moment(dateA).valueOf();
            dateB = moment(dateB).valueOf();
            return dateA - dateB;
        })
        .appendTo($location);
});
