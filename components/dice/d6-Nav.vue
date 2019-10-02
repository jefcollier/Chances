<template>
    <nav>
        <ul>
            <li><a href="#1">1</a></li>
            <li><a href="#2">2</a></li>
            <li><a href="#3">3</a></li>
            <li><a href="#4">4</a></li>
            <li><a href="#5">5</a></li>
            <li><a href="#6">6</a></li>
        </ul>
    </nav>
</template>

<script>
// https://codepen.io/redclov3r/pen/qleun
// put the clicked side on top
$('nav a').click(function(e) {
    e.preventDefault();
    $('#dice').removeClass(); 
    var newSide = $(this).attr('href').substr(1)
    $('#dice').addClass('up-' + newSide);
    return false;
});
</script>