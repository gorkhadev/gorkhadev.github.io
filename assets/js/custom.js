/*Custom JavaScript*/
$(function(){
  // Smooth-scroll initialization
  var scroll = new SmoothScroll('a[href*="#"]', { speed: 700, speedAsDuration: true });

  $(document).scroll(function () {
    var $nav = $(".navbar");
    if ($(this).scrollTop() > $nav.height() + 100 ) {
      $('#toTop').css('display', 'block');
    } else {
      $('#toTop').css('display', '');
    }
  });

  // copy code button
  // Find all pre elements containing code elements
  var pres = document.querySelectorAll(".highlight pre");
  pres.forEach(function(pre) {
    // Insert the copy button before the pre element
    var button = createCopyButton(pre);
    pre.parentNode.insertBefore(button, pre);
  });


  $('.level-bar-inner').css('width', '0');
  $(window).on('load', function() {
    $('.level-bar-inner').each(function() {
      var itemWidth = $(this).data('level');
        
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  });
 
});

// Function to create a copy button
function createCopyButton(pre) {
  var button = document.createElement("button");
  button.classList.add("copy-code")
  button.innerHTML = '📝 Copy Code';
  button.addEventListener("click", function() {
      var code = pre.querySelector("code").innerText;
      navigator.clipboard.writeText(code).then(function() {
          button.innerText = "Copied!";
          button.classList.add("copied");
          setTimeout(()=>{
              button.classList.remove("copied");
              button.innerHTML = '📝 Copy Code';
          }, 2000);
      }, function(err) {
          console.error("Could not copy text: ", err);
      });
  });
  return button;
}
