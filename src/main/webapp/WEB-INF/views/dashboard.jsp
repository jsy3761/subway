<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="../assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    지하철 알리미
  </title>
  <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
    name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- CSS Files -->
  <link href="../assets/css/material-dashboard.css?v=2.1.0" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="../assets/demo/demo.css" rel="stylesheet" />
  <script>
    $(document).ready(function () {
      getLists();
      getStns();

      
    });
   

    function getStns() {
      var subId = $('#sub').val();
      $.ajax({
        type: "GET",
        url: "/stnNames.ajax",
        data: { subwayId: subId },
        success: function (result) {
          $('#stn').empty();
          for (var i = 0; i < result.length; i++) {
            $('#stn').append(
              '<a href="../' + subId + '/' + result[i] + '" class="btn btn-primary btn-round">' +
              '<h4>' + result[i] + '</h4>' +
              '</a>'
            )
          }
        }
      })
    }
    function getLists() {
      $.ajax({
        type: "GET",
        url: "/names.ajax",
        success: function (result) {
          $('#hoseon').empty();
          for (var i = 0; i < Object.keys(result).length; i++) {
            $('#hoseon').append(
              '<li>' +
              '<a class="nav-link" href="/' + Object.keys(result)[i] + '">' +
              '<i class="material-icons">train</i>' +
              '<p><h4>' +
              result[Object.keys(result)[i]] +
              '</h4></p>' +
              '</a>' +
              '</li>'
            )
          }
        }
      })
    }
  </script>
</head>
<input type="hidden" id="sub" value="${subId}">
<input type="hidden" id="stName" value="${subwayUp[0].statnNm}">
<input type="hidden" id="uptln1" value="${subwayUp[0].trainLineNm}">
<input type="hidden" id="upbn1" value="${subwayUp[0].btrainNo}">
<input type="hidden" id="upmsg1" value="${subwayUp[0].arvlMsg2}">
<input type="hidden" id="uptime1" value="${subwayUp[0].barvlDt}">
<input type="hidden" id="uptime2" value="${subwayUp[1].barvlDt}">
<input type="hidden" id="dntime1" value="${subwayDn[0].barvlDt}">
<input type="hidden" id="dnmsg1" value="${subwayDn[0].arvlMsg2}">
<input type="hidden" id="dntime2" value="${subwayDn[1].barvlDt}">


<body class="dark-edition">
  <div class="wrapper ">
    <div class="sidebar" data-color="purple" data-background-color="black" data-image="../assets/img/sidebar-2.jpg">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
      <div class="logo">
        <a href="/" class="simple-text logo-normal">
          <h3><span class="tim-note">서울 지하철 노선</span></h3>
        </a>
      </div>
      <div class="sidebar-wrapper">
        <ul class="nav" id="hoseon">
          <!-- 지하철 노선 정보 표시 -->
        </ul>
      </div>
    </div>

    <div class="main-panel">
      <!-- Navbar -->
      <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top " id="navigation-example">
        <div class="container-fluid">
          <div class="navbar-wrapper">
            <a class="navbar-brand" href="javascript:void(0)">
              <h3><span class="tim-note">도착 정보</span></h3>
            </a>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index"
            aria-expanded="false" aria-label="Toggle navigation" data-target="#navigation-example">
            <span class="sr-only">Toggle navigation</span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
            <span class="navbar-toggler-icon icon-bar"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end">
            <form class="navbar-form" action="../${subId}/">
              <div class="input-group no-border">
                <input type="hidden" name="hoseon" value="${subId}">
                <input type="text" id="stnName" class="form-control" placeholder="Search...">
                <button type="submit" class="btn btn-default btn-round btn-just-icon">
                  <i class="material-icons">search</i>
                  <div class="ripple-container"></div>
                </button>
              </div>
            </form>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  <i class="material-icons">dashboard</i>
                  <p class="d-lg-none d-md-block">
                    Stats
                  </p>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link" href="javscript:void(0)" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="material-icons">notifications</i>
                  <span class="notification">237</span>
                  <p class="d-lg-none d-md-block">
                    Some Actions
                  </p>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="javascript:void(0)">Mike John responded to your email</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  <i class="material-icons">person</i>
                  <p class="d-lg-none d-md-block">
                    Account
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- End Navbar -->
      <div class="content">
        <div class="container-fluid">
          <div class="row" id="stn">
            <!-- 지하철역 버튼 생성 -->
          </div>

          <div class="row">
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="card card-plain">
                <div class="card-header card-header-primary">
                  <h2 style="text-align: center;" class="card-title mt-0" id="prev">
                    <a href="../${subId}/${subwayUp[0].statnFid}">${subwayUp[0].statnFid}역</a>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="card card-plain">
                <div class="card-header card-header-primary">
                  <h2 style="text-align: center;" class="card-title mt-0" id="on">
                    <a href="../${subId}/${subwayUp[0].statnNm}">${subwayUp[0].statnNm}역</a>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div class="card card-plain">
                <div class="card-header card-header-primary">
                  <h2 style="text-align: center;" class="card-title mt-0" id="next">
                    <a href="../${subId}/${subwayUp[0].statnTid}">${subwayUp[0].statnTid}역</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div class="row">

            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon" id="upResult">
                  <div class="card-icon">
                    <i class="material-icons">subway</i>
                  </div>
                  <p class="card-category">
                    <h2 style="text-align: left; color: #ffffff;" class="card-title">이번 열차</h2>
                  </p><br>
                  <h2 style="text-align: center; color: #ffffff;" class="card-title"id="uptrainLineNm1">
                  </h2><br>
                  <h1 style="text-align: center; color: #ffffff;" class="card-title" id="upbtrainNo1">
                  </h1>
                  <h2 style="text-align: right; color: #ffffff;" class="card-title" id="uparvlMsg1">
                  </h2><br>

                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon" id="upResult">
                  <div class="card-icon">
                    <i class="material-icons">subway</i>
                  </div>
                  <p class="card-category">
                    <h2 style="text-align: left; color: #ffffff;" class="card-title">이번 열차</h2>
                  </p><br>
                  <h2 style="text-align: center; color: #ffffff;" class="card-title">${subwayDn[0].trainLineNm}
                  </h2><br>
                  <h1 style="text-align: center; color: #ffffff;" class="card-title">${subwayDn[0].btrainNo}
                  </h1>
                  <h2 style="text-align: right; color: #ffffff;" class="card-title" id="dninfo1">${subwayDn[0].arvlMsg2}
                  </h2><br>

                </div>
              </div>
            </div>

          </div>

          <div class="row">

            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon" id="upResult">
                  <div class="card-icon">
                    <i class="material-icons">subway</i>
                  </div>
                  <p class="card-category">
                    <h3 style="text-align: left; color: #ffffff;" class="card-title">다음 열차</h3>
                  </p><br>
                  <h3 style="text-align: center; color: #ffffff;" class="card-title">${subwayUp[1].trainLineNm}</h3>
                  <h2 style="text-align: center; color: #ffffff;" class="card-title">${subwayUp[1].btrainNo}
                  </h2>
                  <h3 style="text-align: right; color: #ffffff;" class="card-title" id="upinfo2">${subwayUp[1].arvlMsg2}
                  </h3><br>

                </div>
              </div>
            </div>

            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <div class="card card-stats">
                <div class="card-header card-header-success card-header-icon" id="upResult">
                  <div class="card-icon">
                    <i class="material-icons">subway</i>
                  </div>
                  <p class="card-category">
                    <h3 style="text-align: left; color: #ffffff;" class="card-title">다음 열차</h3>
                  </p><br>
                  <h3 style="text-align: center; color: #ffffff;" class="card-title">${subwayDn[1].trainLineNm}</h3>
                  <h2 style="text-align: center; color: #ffffff;" class="card-title">${subwayDn[1].btrainNo}
                  </h2>
                  <h3 style="text-align: right; color: #ffffff;" class="card-title" id="dninfo2">${subwayDn[1].arvlMsg2}
                  </h3><br>

                </div>
              </div>
            </div>

          </div>

          <footer class="footer">
            <div class="container-fluid">
              <div class="copyright float-right" id="date">
                , made with <i class="material-icons">favorite</i> by
                <a href="/" target="_blank">syjeon@ntels.com</a>
              </div>
            </div>
          </footer>

          <script>
            const x = new Date().getFullYear();
            let date = document.getElementById('date');
            date.innerHTML = '&copy; ' + x + date.innerHTML;
          </script>

        </div>

        <!--   Core JS Files   -->
        <script src="../assets/js/core/jquery.min.js"></script>
        <script src="../assets/js/core/popper.min.js"></script>
        <script src="../assets/js/core/bootstrap-material-design.min.js"></script>
        <script src="https://unpkg.com/default-passive-events"></script>
        <script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
        <!-- Place this tag in your head or just before your close body tag. -->
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <!--  Google Maps Plugin    -->
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
        <!-- Chartist JS -->
        <script src="../assets/js/plugins/chartist.min.js"></script>
        <!--  Notifications Plugin    -->
        <script src="../assets/js/plugins/bootstrap-notify.js"></script>
        <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
        <script src="../assets/js/material-dashboard.js?v=2.1.0"></script>
        <!-- Material Dashboard DEMO methods, don't include it in your project! -->
        <script src="../assets/demo/demo.js"></script>
        <script>
          $(document).ready(function () {
            $().ready(function () {
              $sidebar = $('.sidebar');

              $sidebar_img_container = $sidebar.find('.sidebar-background');

              $full_page = $('.full-page');

              $sidebar_responsive = $('body > .navbar-collapse');

              window_width = $(window).width();

              $('.fixed-plugin a').click(function (event) {
                // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
                if ($(this).hasClass('switch-trigger')) {
                  if (event.stopPropagation) {
                    event.stopPropagation();
                  } else if (window.event) {
                    window.event.cancelBubble = true;
                  }
                }
              });

              $('.fixed-plugin .active-color span').click(function () {
                $full_page_background = $('.full-page-background');

                $(this).siblings().removeClass('active');
                $(this).addClass('active');

                var new_color = $(this).data('color');

                if ($sidebar.length != 0) {
                  $sidebar.attr('data-color', new_color);
                }

                if ($full_page.length != 0) {
                  $full_page.attr('filter-color', new_color);
                }

                if ($sidebar_responsive.length != 0) {
                  $sidebar_responsive.attr('data-color', new_color);
                }
              });

              $('.fixed-plugin .background-color .badge').click(function () {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');

                var new_color = $(this).data('background-color');

                if ($sidebar.length != 0) {
                  $sidebar.attr('data-background-color', new_color);
                }
              });

              $('.fixed-plugin .img-holder').click(function () {
                $full_page_background = $('.full-page-background');

                $(this).parent('li').siblings().removeClass('active');
                $(this).parent('li').addClass('active');


                var new_image = $(this).find("img").attr('src');

                if ($sidebar_img_container.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                  $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                  });
                }

                if ($full_page_background.length != 0 && $('.switch-sidebar-image input:checked').length != 0) {
                  var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                  $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                    $full_page_background.fadeIn('fast');
                  });
                }

                if ($('.switch-sidebar-image input:checked').length == 0) {
                  var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
                  var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');

                  $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                  $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                }

                if ($sidebar_responsive.length != 0) {
                  $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
                }
              });

              $('.switch-sidebar-image input').change(function () {
                $full_page_background = $('.full-page-background');

                $input = $(this);

                if ($input.is(':checked')) {
                  if ($sidebar_img_container.length != 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                  }

                  if ($full_page_background.length != 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                  }

                  background_image = true;
                } else {
                  if ($sidebar_img_container.length != 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                  }

                  if ($full_page_background.length != 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                  }

                  background_image = false;
                }
              });

              $('.switch-sidebar-mini input').change(function () {
                $body = $('body');

                $input = $(this);

                if (md.misc.sidebar_mini_active == true) {
                  $('body').removeClass('sidebar-mini');
                  md.misc.sidebar_mini_active = false;

                  $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();

                } else {

                  $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar('destroy');

                  setTimeout(function () {
                    $('body').addClass('sidebar-mini');

                    md.misc.sidebar_mini_active = true;
                  }, 300);
                }

                // we simulate the window Resize so the charts will get updated in realtime.
                var simulateWindowResize = setInterval(function () {
                  window.dispatchEvent(new Event('resize'));
                }, 180);

                // we stop the simulation of Window Resize after the animations are completed
                setTimeout(function () {
                  clearInterval(simulateWindowResize);
                }, 1000);

              });
            });
          });
        </script>
</body>

</html>