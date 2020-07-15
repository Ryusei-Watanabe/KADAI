$(function(){
  $('table').hide(); //アコーディオン(ddタグ)を閉じる
  $('#h1').delay(1000).queue(function(){
    $('table').slideDown(1000)
  });
  $('#h1').on('click', function(){
    $('table').slideToggle('slow');
  });
});
