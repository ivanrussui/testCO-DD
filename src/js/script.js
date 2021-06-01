$(document).ready(function () {
  // плавность перехода по всем ссылкам на сайте
  $("a[href^='#']").click(function () {
    const _href = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
    return false;
  });
});
