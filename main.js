
// Display of loading screen and adjustment of body elements with respect to navigation bar, while loading the page in browser.
$(window).on("load", function () {
  $("body").css("padding-top", $("#navmenu").outerHeight());
  $("#outerNavbar ul li a").click(function (e) {
    e.preventDefault();
    let navigationHeight = $("#navmenu").outerHeight();
    let myHref = $(this).attr("href");
    let newPos = $(myHref).offset().top;
    window.scroll(0, newPos - navigationHeight);
  });
});

// Selection of active navlink in navigation bar, while scrolling through the webpage.
$(window)
  .scroll(function () {
    let navigationHeight = $("#navmenu").outerHeight();
    let scrollDistance = $(window).scrollTop();
    $(".navsection").each(function (i) {
      if ($(this).offset().top - navigationHeight <= scrollDistance) {
        $(".navbar-nav").find("li.active").removeClass("active");
        $(".navbar-nav li").eq(i).addClass("active");
      }
    });
  })
  .scroll();

// Adjustment of body elements with respect to navigation bar, while resizing browser window.
$(window).resize(function () {
  $("body").css("padding-top", $("#navmenu").outerHeight());
});

// Opening (and activating) of the relevant Skillset tab and closing all other Skillset tabs.
function openSkill(evt, skillName) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  let tabContentElement = document.getElementById(skillName);
  if (tabContentElement) {
    tabContentElement.style.display = "block";
    evt.currentTarget.className += " active";
  }
}
openSkill(event, 'Prog');
