
$.fn.Accordion=function(){
  $('.accordion').click(function(ev){
    var item = ev.target;
    if (item.nextElementSibling.style.display == 'block') {
        item.nextElementSibling.style.display = 'none';
        console.log(item.nextElementSibling)
    } else {
        for (var i = 0; i < $('.accordion').childElementCount; i++) {
            $('.accordion').each().eq(1).css('display','none');
     }
        item.nextElementSibling.style.display = 'block';
    }
})
}

$(document).ready(function(){
$('.accordion').Accordion();
})