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
      getho();
    });

    function getLists() {
      var subId = $('#sub').val();
      $.ajax({
        type: "GET",
        url: "/stnNames.ajax",
        data: { subwayId: subId },
        success: function (result) {
          $('#list').empty();
          for (var i = 0; i < result.length; i++) {
            $('#list').append(
              '<li>' +
              '<a href="../' + subId + '/' + result[i] + '">' +
              '<h3>' + result[i] + '</h3>' +
              '</a>' +
              '</li>'
            )
          }
          $('#list').append()
        }
      })
    }

    function getho() {
      $.ajax({
        type: "GET",
        url: "/names.ajax",
        success: function (result) {
          $('#hoList').empty();
          for (var i = 0; i < Object.keys(result).length; i++) {
            $('#hoList').append(
              '<li><a href="/' + Object.keys(result)[i] + '"><span class="txt">'
              + result[Object.keys(result)[i]]
              + '</span></a></li>'
            )
          }
        }
      })
    }


  </script>
</head>

<body>
  <input type="hidden" id="sub" value="${subId}">
  <div class="header">
  </div>
  <div class="wrap">

    <div class="content">
      <h1 class="h1"><a href="/">서울교통공사</a></h1>
      <div class="cont_wrap">
        <ul id="hoList" class="tab_menu type_02">

        </ul>
        <div class="layout type_01">
          <div class="cell type_02">
            <div class="box">
              <ul id="list" class="side_menu">

              </ul>
            </div>
          </div>

          <div class="cell">
            <div class="box">
              <div class="table type_03 detail" style="height: 715px; ">
                <table>
                  <tbody>
                    <tr >
                      <td>
                        <table class="td_value" >
                          <tr>
                            <td >
                              <span class="label" >
                                <h2 >세대 수</h2>
                              </span>
                            </td>
                          </tr>
                        </table>
                    <tr>
                      <th>
                        <span>
                          <h2>${subwayUp[0].statnNm}</h2>
                        </span>
                      </th>
                      <td>
                        <div class="thead">
                          <table>
                            <thead>
                              <tr>
                                <th scope="col" class="tac">
                                  <h2>열차 번호</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>열차 종류</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>열차 종착지</h2>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div class="tbody">
                          <table>
                            <tbody>
                              <tr>
                                <td class="tac">
                                  <h2>${subwayUp[0].btrainNo} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayUp[0].trainLineNm} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayUp[0].bstatnNm} </h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <br />
                        <br />
                        <div class="thead">
                          <table>
                            <thead>
                              <tr>
                                <th scope="col" class="tac">
                                  <h2>이전 역</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>다음 역</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>열차 상태</h2>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div class="tbody">
                          <table>
                            <tbody>
                              <tr>
                                <td class="tac">
                                  <h2>${subwayUp[0].statnFid} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayUp[0].statnTid} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayUp[0].arvlCd} </h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <br />
                        <br />
                        <div class="thead">
                          <table>
                            <thead>
                              <tr>
                                <th scope="col" class="tac">
                                  <h2>열차 도착정보 1</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>열차 도착정보 2</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>등록외국인 여자</h2>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div class="tbody">
                          <table>
                            <tbody>
                              <tr>
                                <td class="tac">
                                  <h2>${subwayUp[0].arvlMsg2} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayUp[0].arvlMsg3} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayUp[0].barvlDt} 초</h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <br />
                        <br />
                        <div class="thead">
                          <table>
                            <thead>
                              <tr>
                                <th scope="col" class="tac">
                                  <h2>세대당 인구</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>65세 이상 고령자</h2>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div class="tbody">
                          <table>
                            <tbody>
                              <tr>
                                <td class="tac">
                                  <h2></h2>
                                </td>
                                <td class="tac">
                                  <h2></h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>

                      <th>
                        <span>
                          <h2>${subwayDn[0].statnNm}</h2>
                        </span>
                      </th>
                      <td>
                        <div class="thead">
                          <table>
                            <thead>
                              <tr>
                                <th scope="col" class="tac">
                                  <h2>열차 번호</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>열차 종류</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>열차 종착지</h2>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div class="tbody">
                          <table>
                            <tbody>
                              <tr>
                                <td class="tac">
                                  <h2>${subwayDn[0].btrainNo} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayDn[0].trainLineNm} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayDn[0].bstatnNm} </h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <br />
                        <br />
                        <div class="thead">
                          <table>
                            <thead>
                              <tr>
                                <th scope="col" class="tac">
                                  <h2>이전 역</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>다음 역</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>열차 상태</h2>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div class="tbody">
                          <table>
                            <tbody>
                              <tr>
                                <td class="tac">
                                  <h2>${subwayDn[0].statnFid} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayDn[0].statnTid} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayDn[0].arvlCd} </h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <br />
                        <br />
                        <div class="thead">
                          <table>
                            <thead>
                              <tr>
                                <th scope="col" class="tac">
                                  <h2>열차 도착정보 1</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>열차 도착정보 2</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>등록외국인 여자</h2>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div class="tbody">
                          <table>
                            <tbody>
                              <tr>
                                <td class="tac">
                                  <h2>${subwayDn[0].arvlMsg2} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayDn[0].arvlMsg3} </h2>
                                </td>
                                <td class="tac">
                                  <h2>${subwayDn[0].barvlDt} 초</h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <br />
                        <br />
                        <div class="thead">
                          <table>
                            <thead>
                              <tr>
                                <th scope="col" class="tac">
                                  <h2>세대당 인구</h2>
                                </th>
                                <th scope="col" class="tac">
                                  <h2>65세 이상 고령자</h2>
                                </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div class="tbody">
                          <table>
                            <tbody>
                              <tr>
                                <td class="tac">
                                  <h2></h2>
                                </td>
                                <td class="tac">
                                  <h2></h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</body>

</html>