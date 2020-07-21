<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>서울 지하철 도착정보</title>
  <script src="../../scripts/atom/jquery.1.11.2.min.js"></script>
  <!-- datetime, date, time -->
  <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
  <script src="../../scripts/atom/datetimepicker.moment.js"></script>
  <script src="../../scripts/atom/datetimepicker.js"></script>
  <!-- multiselect -->
  <script src="../../scripts/atom/bootstrap-multiselect.js"></script>
  <!-- 공통작성 -->
  <script src="../../scripts/atom/ui_common.js"></script>
  <link rel="shortcut icon" type="image/x-icon" href="../../images/atom/favicon.ico">
  <link rel="stylesheet" href="../../styles/atom/style.css">
  <link rel="stylesheet" href="../../styles/thingplug/thingplug.css">
  <script>
    $(document).ready(function () {
      getLists();
    });

    function getLists() {
      $.ajax({
        type: "GET",
        url: "/names.ajax",
        success: function (result) {
          $('#hoseon').empty();
          for (var i = 0; i < Object.keys(result).length; i++) {
            $('#hoseon').append(
              '<button style="width: 250px; height: 200px;" class="btn type_02 primary" onclick="location.href='
              + Object.keys(result)[i]
              + '">'
              + '<h1>'
              + result[Object.keys(result)[i]]
              + '</h1>'
              + '</button>'
            )
          }
        }
      })
    }
  </script>
</head>

<body>
  <div class="header">
  <div class="wrap">
    <div class="content">
      
      <div class="cont_wrap">
        <div class="cell">
          <div class="box">
            <div class="table type_03 detail" >
              <table>
                <tbody>
                  <table class="td_value">
                    <tr>
                      <td id="hoseon" style="text-align: center; height: 700px; vertical-align: middle;">

                      </td>
                    </tr>
                  </table>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</body>

</html>