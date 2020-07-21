<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>GRA - Monitoring</title>
    <script src="../../scripts/atom/jquery.1.11.2.min.js"></script>
    <!-- datetime, date, time -->
    <script src="../../scripts/atom/datetimepicker.moment.js"></script>
    <script src="../../scripts/atom/datetimepicker.js"></script>
    <!-- amcharts -->
    <script src="../../scripts/atom/amcharts_3.21.2/amcharts/amcharts.js"></script>
    <script src="../../scripts/atom/amcharts_3.21.2/amcharts/serial.js"></script>
    <script src="../../scripts/atom/amcharts_3.21.2/amcharts/pie.js"></script>
    <script src="../../scripts/atom/amcharts_run_dashboard.js"></script>
    <script src="../../scripts/atom/amcharts_run_monitoring.js"></script>
    <!-- pie chart -->
    <!--
    <script src="../../scripts/atom/jquery.easing.min.js"></script>
    <script src="../../scripts/atom/jquery.easypiechart.js"></script>
    -->
    <script src="../../scripts/atom/easypiechart.js"></script>
    <!-- gauge -->
    <script src="../../scripts/atom/gauge/gauge-2.1.4.min.js"></script>
    <script src="../../scripts/atom/gauge/gauge.js"></script>
    <!-- multiselect -->
    <script src="../../scripts/atom/bootstrap-multiselect.js"></script>
    <!-- monitoring : jstree -->
    <script src="../../scripts/atom/tree/jstree.min.js"></script>
    <link rel="stylesheet" href="../../scripts/atom/tree/themes/default/style.min.css">
    <!-- 공통작성 -->
    <script src="../../scripts/atom/ui_common.js"></script>
    <link rel="shortcut icon" type="image/x-icon" href="../../images/atom/favicon.ico">
    <link rel="stylesheet" href="../../styles/atom/style.css">
    <link rel="stylesheet" href="../../styles/atom/monitoring.css">
    <link rel="stylesheet" href="../../styles/gra/gra.css">
    <script>
    /* gauge */
    var g1, g2, g3, g4;

    window.onload = function(){
      var g1 = new JustGage({
        id: "g1",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        hideInnerShadow: true,
        gaugeColor:"#ffffff",
        labelFontColor:"#a0a3a9",
        levelColors: [
          "#00a8eb",
          "#f9c802",
          "#f24949"
        ],
        customSectors: [{
          color: '#00a8eb',
          lo: 0,
          hi: 40
        }]
      });

      var g2 = new JustGage({
        id: "g2",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        hideInnerShadow: true,
        gaugeColor:"#ffffff",
        labelFontColor:"#a0a3a9",
        levelColors: [
          "#00a8eb",
          "#f9c802",
          "#f24949"
        ],
        customSectors: [{
          color: '#00a8eb',
          lo: 0,
          hi: 40
        }]
      });

      var g3 = new JustGage({
        id: "g3",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        hideInnerShadow: true,
        gaugeColor:"#ffffff",
        labelFontColor:"#a0a3a9",
        levelColors: [
          "#00a8eb",
          "#f9c802",
          "#f24949"
        ],
        customSectors: [{
          color: '#00a8eb',
          lo: 0,
          hi: 40
        }]
      });

      var g4 = new JustGage({
        id: "g4",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        hideInnerShadow: true,
        gaugeColor:"#ffffff",
        labelFontColor:"#a0a3a9",
        levelColors: [
          "#00a8eb",
          "#f9c802",
          "#f24949"
        ],
        customSectors: [{
          color: '#00a8eb',
          lo: 0,
          hi: 40
        }]
      });

      setInterval(function() {
        g1.refresh(getRandomInt(50, 100));
        g2.refresh(getRandomInt(50, 100));
        g3.refresh(getRandomInt(0, 50));
        g4.refresh(getRandomInt(0, 50));
      }, 2500);
    };

    /* pie */
    document.addEventListener('DOMContentLoaded', function() {
      var tarDiv = ['.devchart1','.devchart2','.devchart3','.devchart4'];
      for(idx =0 ; idx<tarDiv.length ; idx++){
        if($(tarDiv[idx]).length>0){
          var chart = window.chart = new EasyPieChart(document.querySelector(tarDiv[idx]), {
            easing: 'easeOutElastic',
            delay: 3000,
            barColor: '#00a8eb',
            trackColor: '#e3e4e6',
            scaleColor: false,
            lineWidth: 16,
            trackWidth: 16,
            lineCap: 'butt',
            onStep: function(from, to, percent) {
              this.el.children[0].innerHTML = Math.round(percent);
            }
          });
        }
      }
    });

    /* alarm list :hover */
    $(document).ready(function(){
      var $tbl = $('.table.hover_event');
      var $tbl_tr = $tbl.find('tbody tr');
        for (var i = 0; i < $tbl_tr.length; i++) {
          $tbl_tr.eq(i).hover(function(){
            $(this).addClass('hover');
            if($(this).filter('.sev')){
              $get_lv_class = $(this).find('.sev').attr('class');
              $(this).addClass($get_lv_class).removeClass('sev')
            }
          },function(){
            $(this).removeClass();
        })
      }
    });
  </script>
</head>

<body>
<div class="monitoring"><!--9/1수정 : 클래스명 수정-->
    <div class="m_header">
        <div class="m_logo">GRA Monitoring</div>
        <ul class="m_tabmenu"><!--9/1수정 : 탭메뉴 추가-->
            <li class=""><a href="#none">Node View</a></li>
            <li class="active"><a href="#none">Hardware View</a></li>
        </ul>
        <div class="m_submenu"><!-- 서브 탭메뉴 등장하려면 on 클래스 추가-->
            <div class="default search_area location">
                <button type="button" class="back" title="Back">Back</button>
                <div class="select type_05 auto"><!--9/1수정 : select 수정-->
                    <select>
                        <option value="1">OFCS01</option>
                        <option value="2">vDPI_Node_#001</option>
                    </select>
                </div>
            </div>
            <div class="tab"><!--9/1수정 : 탭 추가-->
                <ul>
                    <!-- tab1 ~ 8 까지 클릭하면 해당하는 div가 보이도록 구현 / 현재 선택된 탭에는 on 클래스 추가 / 상태별 클래스는 3단계 critical major minor-->
                    <li><a href="#" class="tab9">Summary</a></li>
                    <li><a href="#" class="tab10">Realtime Graph</a></li>
                    <li><a href="#" class="tab1 on">Process Flow</a></li>
                    <li><a href="#" class="tab3 critical">CPU</a></li>
                    <li><a href="#" class="tab5 minor">Memory</a></li>
                    <li><a href="#" class="tab4 major">Disk</a></li>
                    <li><a href="#" class="tab2">Temperature</a></li>
                    <li><a href="#" class="tab6">Queue</a></li>
                    <li><a href="#" class="tab7">Tablespace</a></li>
                    <li><a href="#" class="tab8 major">NIC</a></li>
                    <li><a href="#" class="tab11">H/W Detailed</a></li>
                    <li><a href="#" class="tab12">Pelican</a></li>
                    <li><a href="#" class="tab13">MariaDB</a></li>
                </ul>
            </div>
        </div>
        <!--// m_submenu -->

        <ul class="m_util">
            <li class="util1 dropdown">
                <a href="#" title="ATOM Info"><span>ATOM Info</span></a>
                <ul class="dropdown_content">
                    <h6>ATOM System Information</h6>
                    <li>
                        <div class="pie_graph">
                            <span class="pie devchart1" data-percent="01"><span class="percent"></span></span>
                            <p>CPU<span>1.22GHz</span></p>
                        </div>
                    </li>
                    <li>
                        <div class="pie_graph">
                            <span class="pie devchart2" data-percent="100"><span class="percent"></span></span>
                            <p>Memory<span>4.0 / 7.9GB</span></p>
                        </div>
                    </li>
                    <li>
                        <div class="pie_graph">
                            <span class="pie devchart3" data-percent="96"><span class="percent"></span></span>
                            <p>Disk<span>16,134 / 76.537MB</span></p>
                        </div>
                    </li>
                    <li>
                        <div class="pie_graph">
                            <span class="pie devchart4" data-percent="30"><span class="percent"></span></span>
                            <p>Tablespace<span>34.04 / 34.80G</span></p>
                        </div>
                    </li>
                    <li>
                        <div class="status_info">
                            <span class="status_type1 normal">Network</span> <!--class : normal,abnormal-->
                            <p>Network<span class="nor">Normal</span></p> <!--class : nor,abnor-->
                        </div>
                    </li>
                    <li>
                        <div class="status_info">
                            <span class="status_type2 running">Process</span> <!--class : running,suspend,scale,stopped,abnormal,unknown-->
                            <p>Process<span class="running">Running</span></p> <!--class : running,suspend,scale,stopped,abnormal,unknown-->
                            <!-- <p>Process<span class="suspend">Suspend</span></p> -->
                            <!-- <p>Process<span class="scale">Scale</span></p> -->
                            <!-- <p>Process<span class="stopped">Stopped</span></p> -->
                            <!-- <p>Process<span class="abnormal">Abnormal</span></p> -->
                            <!-- <p>Process<span class="unknown">Unknown</span></p> -->
                        </div>
                    </li>
                </ul>
            </li>
            <li class="util2 dropdown">
                <a href="#" title="Resources"><span>Resources</span></a>
                <ul class="dropdown_content">
                    <h6>Resources Usage TOP5</h6>
                    <li>CPU
                        <ol>
                            <li>node name 01</li>
                            <li>node name name name name 02</li>
                            <li>node03</li>
                            <li>nodenamename04</li>
                            <li>node name 05</li>
                        </ol>
                        <div id="chart_colum1"></div>
                    </li>
                    <li>Memory
                        <ol>
                            <li>node name 01</li>
                            <li>node name 02</li>
                            <li>node03</li>
                            <li>node name 04</li>
                            <li>node name 05</li>
                        </ol>
                        <div id="chart_colum2"></div>
                    </li>
                    <li>Disk
                        <ol>
                            <li>node name 01</li>
                            <li>node name 02</li>
                            <li>node03</li>
                            <li>node name 04</li>
                            <li>node name 05</li>
                        </ol>
                        <div id="chart_colum3"></div>
                    </li>
                    <li>Tablespace
                        <ol>
                            <li>node name 01</li>
                            <li>node name 02</li>
                            <li>node03</li>
                            <li>node name 04</li>
                            <li>node name 05</li>
                        </ol>
                        <div id="chart_colum4"></div>
                    </li>
                </ul>
            </li>
            <li class="util3"><a href="#" title="Batch"><span>Batch</span></a></li> <!--클릭하면 on 클래스 추가 -->
            <!-- <li class="util4"><a href="#" title="Refresh"><span>Refresh</span></a></li> 삭제됨 -->
        </ul>
        <div class="legend"><a href="#"><span>Legend</span></a> <!-- dropdown 클래스 추가하면 접혔다 펼쳤다-->
            <div class="dropdown_content">
                <ul class="node">
                    <li>Scale</li>
                    <li>Abnormal</li>
                    <li>Stopped</li>
                    <li>Hang up</li>
                    <li>Suspend</li>
                    <li>Unknown</li>
                    <li>Running</li>
                </ul>
                <ul class="line">
                    <li>Connect</li>
                    <li>Disconnect</li>
                    <li>Transper</li>
                    <li>Unknown</li>
                </ul>
            </div>
        </div>
    </div>
    <!--// header -->
    <div class="sub_body full"><!--9/1수정 : addclass - 알람 최소일때 full -->
        <div class="tree_wrap"><!-- on클래스 추가하면 접혔다 펼쳤다-->
            <div class="filter">
                <div class="common">
                    <p class="search">
                        <input type="text" name="txtbox" placeholder="Search"/>
                        <button type="button" title="Search" class="srh">Search</button>
                    </p>
                </div>
            </div>
            <!--// filter -->
            <div class="tree_area">
                <div id="jstree" class="tree">
                    <ul>
                        <li data-jstree='{ "opened" : true }'>ATOM tree test
                            <ul>
                                <li data-jstree='{ "selected" : true }'>ATOM 2depth</li>
                                <li>LinkedNode01</li>
                                <li>LinkedNode02</li>
                                <li>LinkedNode03</li>
                                <li>LinkedNode04LinkedNode04LinkedNode04</li>
                                <li>LinkedNode05</li>
                            </ul>
                        </li>
                        <li data-jstree='{ "opened" : true }'>PACKAGENAME01PACKAGENAME01
                            <ul>
                                <li>NODE NAME 01</li>
                                <li>NODE NAME 02</li>
                                <li>NODE NAME 03</li>
                                <li>NODE NAME 04</li>
                                <li>NODE NAME 05</li>
                                <li>NODE NAME 06</li>
                                <li>NODE NAME 07NODE NAME 07NODE NAME 07NODE NAME 07NODE NAME 07</li>
                            </ul>
                        </li>
                        <li data-jstree='{ "opened" : true }'>PACK02
                            <ul>
                                <li>NODE NAME 01</li>
                                <li>NODE NAME 02</li>
                            </ul>
                        </li>
                        <li data-jstree='{ "opened" : true }'>PACKAGE NAME 03
                            <ul>
                                <li>NODE NAME 01</li>
                                <li>NODE NAME 02</li>
                                <li>NODE NAME 03</li>
                                <li>NODE NAME 04</li>
                                <li>NODE NAME 05</li>
                                <li>NODE NAME 06</li>
                                <li>NODE NAME 07</li>
                                <li>NODE NAME 08</li>
                                <li>NODE NAME 09</li>
                                <li>NODE NAME 10</li>
                            </ul>
                        </li>
                        <li data-jstree='{ "opened" : true }'>PACK04
                            <ul>
                                <li>NODE NAME 01</li>
                                <li>NODE NAME 02</li>
                                <li>NODE NAME 03</li>
                                <li>NODE NAME 04</li>
                                <li>NODE NAME 05</li>
                                <li>NODE NAME 06</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <button type="button" class="folding" title="Tree">Tree</button><!-- folding 클릭시 tree_wrap 에 on 추가됨-->
            </div>
            <!--// tree -->
        </div>
        <!--// tree_wrap -->

        <div class="sub_content change">
            <div class="draw type2"><!-- 탭메뉴(m_tabmenu) 선택하면 on 클래스 추가 -->
                <div class="tools"><!-- 아이콘 선택 및 드래그시 on 클래스 추가 -->
                    <div class="hide"><!-- Batch 클릭하면 표시되는 내용 -->
                        <div class="select type_01 auto">
                            <select>
                                <option value="1">ATOM</option>
                                <option value="2">option_01</option>
                                <option value="3">option_02</option>
                            </select>
                        </div>
                        <div class="select type_01 auto">
                            <select>
                                <option value="1">Last Monty Test</option>
                                <option value="2">option_01</option>
                                <option value="3">option_02</option>
                            </select>
                        </div>
                    </div>
                    <p>
              <span>
                <button type="button" title="Zoom In" class="tool_zoomin">Zoom In</button>
                <button type="button" title="Zoom Out" class="tool_zoomout">Zoom Out</button>
                <button type="button" title="Fit" class="tool_fitsize">fit</button>
                <button type="button" title="Minimap" class="tool_minimap on">Minimap</button><!-- 미니맵이 켜지면 on 클래스 추가 -->
              </span>
                    </p>
                </div>
                <div class="main_content">
                    <img src="../../images/atom/sample_node.png"/>
                </div>
            </div>
            <!-- 메인 모니터링-->

            <!-- Hardware View -->
            <div class="hw_wrap on"><!-- 탭메뉴(m_tabmenu) 선택하면 on 클래스 추가 -->
                <div class="hw gra">
                    <div class="rack_group">
                        <div class="rack_area">
                            <p class="rack_name">RACK01-1</p>
                            <ul class="server_area">
                                <li><!-- 42U -->
                                    <a href="#none" class="server none" title="None"></a><!--status : none, off, normal, abnormal -->
                                </li>
                                <li><!-- 41U -->
                                    <a href="#none" class="server model_01 u01 normal" title="PGW-01 [Normal]"></a><!--status : none, off, unknown, normal, abnormal -->
                                </li>
                                <li><!-- 40U -->
                                    <a href="#none" class="server model_01 u01 abnormal" title="PGW-01 [Abormal]"></a>
                                </li>
                                <li><!-- 39U -->
                                    <a href="#none" class="server model_01 u01 off" title="PGW-01 [Off]"></a>
                                </li>
                                <li><!-- 38U -->
                                    <a href="#none" class="server model_01 u01 unknown" title="PGW-01 [Unknown]"></a>
                                </li>
                                <li><!-- 37U -->
                                    <a href="#none" class="server model_02 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 36U -->
                                    <a href="#none" class="server model_02 u01 abnormal" title="PGW-01 [Abormal]"></a>
                                </li>
                                <li><!-- 35U -->
                                    <a href="#none" class="server model_02 u01 off" title="PGW-01 [Off]"></a>
                                </li>
                                <li><!-- 34U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 33U -->
                                    <a href="#none" class="server model_03 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 32U -->
                                    <a href="#none" class="server model_03 u01 abnormal" title="PGW-01 [Abormal]"></a>
                                </li>
                                <li><!-- 31U -->
                                    <a href="#none" class="server model_03 u01 off" title="PGW-01 [Off]"></a>
                                </li>
                                <li><!-- 30U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 29U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 27U -->
                                    <a href="#none" class="server model_04 u02 abnormal" title="PGW-01 [Abormal]"></a>
                                </li>
                                <li><!-- 25U -->
                                    <a href="#none" class="server model_04 u02 off" title="PGW-01 [Off]"></a>
                                </li>
                                <li><!-- 23U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 22U -->
                                    <a href="#none" class="server model_05 u04 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 18U -->
                                    <a href="#none" class="server model_05 u04 abnormal" title="PGW-01 [Abormal]"></a>
                                </li>
                                <li><!-- 14U -->
                                    <a href="#none" class="server model_05 u04 off" title="PGW-01 [Off]"></a>
                                </li>
                                <li><!-- 10U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 09U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 08U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 07U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 06U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 05U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 04U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 03U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 02U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 01U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                            </ul>
                        </div>
                        <div class="rack_area">
                            <p class="rack_name">RACK01-2</p>
                            <ul class="server_area">
                                <li><!-- 42U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 41U -->
                                    <a href="#none" class="server model_01 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 40U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 39U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 38U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 37U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 36U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 35U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 34U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 33U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 32U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 31U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 30U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 29U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 27U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 26U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 25U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 24U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 23U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 22U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 21U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 20U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 19U -->
                                    <a href="#none" class="server model_02 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 18U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 17U -->
                                    <a href="#none" class="server model_03 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 16U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 14U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 13U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 11U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 10U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 08U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 07U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 06U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 05U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 04U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 03U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 02U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 01U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="rack_group">
                        <div class="rack_area">
                            <p class="rack_name">RACK02-1</p>
                            <ul class="server_area">
                                <li><!-- 42U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 41U -->
                                    <a href="#none" class="server model_01 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 40U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 39U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 38U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 37U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 36U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 35U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 34U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 33U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 32U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 31U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 30U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 29U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 27U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 26U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 25U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 24U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 23U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 22U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 21U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 20U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 19U -->
                                    <a href="#none" class="server model_02 u01 abnormal" title="PGW-01 [Abormal]"></a>
                                </li>
                                <li><!-- 18U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 17U -->
                                    <a href="#none" class="server model_03 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 16U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 14U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 13U -->
                                    <a href="#none" class="server model_04 u02 off" title="PGW-01 [Off]"></a>
                                </li>
                                <li><!-- 11U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 10U -->
                                    <a href="#none" class="server model_04 u02 abnormal" title="PGW-01 [Abnormal]"></a>
                                </li>
                                <li><!-- 08U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 07U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 06U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 05U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 04U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 03U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 02U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 01U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                            </ul>
                        </div>
                        <div class="rack_area">
                            <p class="rack_name">RACK02-2</p>
                            <ul class="server_area">
                                <li><!-- 42U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 41U -->
                                    <a href="#none" class="server model_01 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 40U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 39U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 38U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 37U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 36U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 35U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 34U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 33U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 32U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 31U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 30U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 29U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 27U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 26U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 25U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 24U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 23U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 22U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 21U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 20U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 19U -->
                                    <a href="#none" class="server model_02 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 18U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 17U -->
                                    <a href="#none" class="server model_03 u01 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 16U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 14U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 13U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 11U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 10U -->
                                    <a href="#none" class="server model_04 u02 normal" title="PGW-01 [Normal]"></a>
                                </li>
                                <li><!-- 08U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 07U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 06U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 05U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 04U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 03U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 02U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                                <li><!-- 01U -->
                                    <a href="#none" class="server none" title="None"></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> <!--// hw_wrap -->

            <div class="sub_type">

                <!--9/1수정 : 추가되는 tab에 들어갈 예정
                <div class="total_chart">
                  <div><h5>Average CPU(%)</h5><div id="g1"></div></div>
                  <div><h5>Top CPU Temperature(℃)</h5><div id="g2"></div></div>
                  <div><h5>Top Disk(%)</h5><div id="g3"></div></div>
                  <div><h5>Total Memory(%)</h5><div id="g4"></div></div>
                </div>
                -->

                <!-- tab:Process Flow -->
                <div class="sect type1">
                    <div class="process_flow">
                        <img src="../../images/atom/sample1.png" width="1088px" height="524px"/>
                    </div>
                    <dl class="sect_info">
                        <dt>Total</dt><dd>190</dd>
                        <dt>Running</dt><dd class="running">100</dd>
                        <dt>Suspend</dt><dd class="suspend">40</dd>
                        <dt>Scale</dt><dd class="scale">10</dd>
                        <dt>Stopped</dt><dd class="stopped">10</dd>
                        <dt>Hang up</dt><dd class="hangup">10</dd>
                        <dt>Abnormal</dt><dd class="abnormal">10</dd>
                        <dt>Unknown</dt><dd class="unknown">10</dd>
                    </dl>
                </div><!--// sect type1 -->

                <!-- tab:Temperature -->
                <div class="sect type2 page2">
                    <div><span>Date:2016-02-01 10:30:30</span><h4>Temperature Usage TOP10</h4><div id="chart_bar_01"></div></div>
                    <div class="data">
                        <table class="tbl_list">
                            <colgroup>
                                <col width="8%"/>
                                <col width="15%"/>
                                <col width="*"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="10px"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th class="t_c">No</th>
                                <th>Mount Name</th>
                                <th>File System Name</th>
                                <th class="t_r">Disk Usage<br/>(%)</th>
                                <th class="t_r">Total Space<br/>(MB)</th>
                                <th class="t_r">Used Space<br/>(MB)</th>
                                <th class="t_r">Free Space<br/>(MB)</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                        <div class="scroll">
                            <table class="tbl_list">
                                <colgroup>
                                    <col width="8%"/>
                                    <col width="15%"/>
                                    <col width="*"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r suspend">76,534</td>
                                    <td class="t_r suspend">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r running">86.43</td>
                                    <td class="t_r stopped">76,537</td>
                                    <td class="t_r unknown">76,534</td>
                                    <td class="t_r abnormal">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--// data -->
                </div><!--// sect type2 -->

                <!-- tab:CPU -->
                <div class="sect type2 page3">
                    <div>
                        <span>Date:2016-02-01 10:30:30</span>
                        <h4>CPU Usage TOP10</h4>
                        <div id="chart_pie_01"></div>
                    </div>
                    <div class="data">
                        <table class="tbl_list">
                            <colgroup>
                                <col width="8%"/>
                                <col width="15%"/>
                                <col width="*"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="10px"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th class="t_c">No</th>
                                <th>Mount Name</th>
                                <th>File System Name</th>
                                <th class="t_r">Disk Usage<br/>(%)</th>
                                <th class="t_r">Total Space<br/>(MB)</th>
                                <th class="t_r">Used Space<br/>(MB)</th>
                                <th class="t_r">Free Space<br/>(MB)</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                        <div class="scroll">
                            <table class="tbl_list">
                                <colgroup>
                                    <col width="8%"/>
                                    <col width="15%"/>
                                    <col width="*"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r suspend">76,534</td>
                                    <td class="t_r suspend">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r running">86.43</td>
                                    <td class="t_r stopped">76,537</td>
                                    <td class="t_r unknown">76,534</td>
                                    <td class="t_r abnormal">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--// data -->
                </div><!--// sect type3 -->

                <!-- tab:Disk -->
                <div class="sect type2 page4">
                    <div><span>Date:2016-02-01 10:30:30</span><h4>Disk Usage TOP10</h4><div id="chart_bar_02"></div></div>
                    <div class="data">
                        <table class="tbl_list">
                            <colgroup>
                                <col width="8%"/>
                                <col width="15%"/>
                                <col width="*"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="10px"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th class="t_c">No</th>
                                <th>Mount Name</th>
                                <th>File System Name</th>
                                <th class="t_r">Disk Usage<br/>(%)</th>
                                <th class="t_r">Total Space<br/>(MB)</th>
                                <th class="t_r">Used Space<br/>(MB)</th>
                                <th class="t_r">Free Space<br/>(MB)</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                        <div class="scroll">
                            <table class="tbl_list">
                                <colgroup>
                                    <col width="8%"/>
                                    <col width="15%"/>
                                    <col width="*"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r suspend">76,534</td>
                                    <td class="t_r suspend">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r running">86.43</td>
                                    <td class="t_r stopped">76,537</td>
                                    <td class="t_r unknown">76,534</td>
                                    <td class="t_r abnormal">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--// data -->
                </div><!--// sect type4 -->

                <!-- tab:Memory -->
                <div class="sect type2 page5">
                    <div><span>Date:2016-02-01 10:30:30</span><h4>Memory Usage TOP10</h4><div id="chart_pie_02"></div></div>
                    <div class="data">
                        <table class="tbl_list">
                            <colgroup>
                                <col width="8%"/>
                                <col width="15%"/>
                                <col width="*"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="10px"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th class="t_c">No</th>
                                <th>Mount Name</th>
                                <th>File System Name</th>
                                <th class="t_r">Disk Usage<br/>(%)</th>
                                <th class="t_r">Total Space<br/>(MB)</th>
                                <th class="t_r">Used Space<br/>(MB)</th>
                                <th class="t_r">Free Space<br/>(MB)</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                        <div class="scroll">
                            <table class="tbl_list">
                                <colgroup>
                                    <col width="8%"/>
                                    <col width="15%"/>
                                    <col width="*"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r suspend">76,534</td>
                                    <td class="t_r suspend">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r running">86.43</td>
                                    <td class="t_r stopped">76,537</td>
                                    <td class="t_r unknown">76,534</td>
                                    <td class="t_r abnormal">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--// data -->
                </div><!--// sect type5 -->

                <!-- tab:Queue -->
                <div class="sect type2 page6">
                    <div><span>Date:2016-02-01 10:30:30</span><h4>Queue Usage TOP10</h4><div id="chart_bar_03"></div></div>
                    <div class="data">
                        <table class="tbl_list">
                            <colgroup>
                                <col width="8%"/>
                                <col width="15%"/>
                                <col width="*"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="10px"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th class="t_c">No</th>
                                <th>Mount Name</th>
                                <th>File System Name</th>
                                <th class="t_r">Disk Usage<br/>(%)</th>
                                <th class="t_r">Total Space<br/>(MB)</th>
                                <th class="t_r">Used Space<br/>(MB)</th>
                                <th class="t_r">Free Space<br/>(MB)</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                        <div class="scroll">
                            <table class="tbl_list">
                                <colgroup>
                                    <col width="8%"/>
                                    <col width="15%"/>
                                    <col width="*"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r suspend">76,534</td>
                                    <td class="t_r suspend">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r running">86.43</td>
                                    <td class="t_r stopped">76,537</td>
                                    <td class="t_r unknown">76,534</td>
                                    <td class="t_r abnormal">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--// data -->
                </div><!--// sect type6 -->

                <!-- tab:Tablespace -->
                <div class="sect type2 page7">
                    <div><span>Date:2016-02-01 10:30:30</span><h4>Tablespace Usage TOP10</h4><div id="chart_pie_03"></div></div>
                    <div class="data">
                        <table class="tbl_list">
                            <colgroup>
                                <col width="8%"/>
                                <col width="15%"/>
                                <col width="*"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="10px"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th class="t_c">No</th>
                                <th>Mount Name</th>
                                <th>File System Name</th>
                                <th class="t_r">Disk Usage<br/>(%)</th>
                                <th class="t_r">Total Space<br/>(MB)</th>
                                <th class="t_r">Used Space<br/>(MB)</th>
                                <th class="t_r">Free Space<br/>(MB)</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                        <div class="scroll">
                            <table class="tbl_list">
                                <colgroup>
                                    <col width="8%"/>
                                    <col width="15%"/>
                                    <col width="*"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r suspend">76,534</td>
                                    <td class="t_r suspend">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r running">86.43</td>
                                    <td class="t_r stopped">76,537</td>
                                    <td class="t_r unknown">76,534</td>
                                    <td class="t_r abnormal">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--// data -->
                </div><!--// sect type7 -->

                <!-- tab:NIC -->
                <div class="sect type2 page8">
                    <div><span>Date:2016-02-01 10:30:30</span><h4>NIC Usage TOP10</h4><div id="chart_cluster_01"></div></div>
                    <div class="data">
                        <table class="tbl_list">
                            <colgroup>
                                <col width="8%"/>
                                <col width="15%"/>
                                <col width="*"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="13%"/>
                                <col width="10px"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th class="t_c">No</th>
                                <th>Mount Name</th>
                                <th>File System Name</th>
                                <th class="t_r">Disk Usage<br/>(%)</th>
                                <th class="t_r">Total Space<br/>(MB)</th>
                                <th class="t_r">Used Space<br/>(MB)</th>
                                <th class="t_r">Free Space<br/>(MB)</th>
                                <th></th>
                            </tr>
                            </thead>
                        </table>
                        <div class="scroll">
                            <table class="tbl_list">
                                <colgroup>
                                    <col width="8%"/>
                                    <col width="15%"/>
                                    <col width="*"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                    <col width="13%"/>
                                </colgroup>
                                <tbody>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r suspend">76,534</td>
                                    <td class="t_r suspend">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r running">86.43</td>
                                    <td class="t_r stopped">76,537</td>
                                    <td class="t_r unknown">76,534</td>
                                    <td class="t_r abnormal">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                <tr>
                                    <td class="t_c">1</td>
                                    <td>/MYSQL_DATA</td>
                                    <td>/dev/cciss/c0d0p2</td>
                                    <td class="t_r">86.43</td>
                                    <td class="t_r">76,537</td>
                                    <td class="t_r">76,534</td>
                                    <td class="t_r">76,534</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!--// data -->
                </div><!--// sect type8 -->

            </div><!--// sub_type -->

        </div><!--// sub_content -->
    </div><!--// sub_body-->

    <div class="sub_bottom mini"> <!--9/1수정 : addclass - 창확대 on , 최소 mini -->
        <div class="alarm_adjustment">
            <div class="select type_06 xs"><!--9/1수정 : select 수정-->
                <select>
                    <option value="1">Severity</option>
                    <option value="2">Code</option>
                </select>
            </div>
            <div class="common">
                <p class="search">
                    <input type="text" name="txtbox" placeholder="Search"/>
                    <button type="button" title="Search" class="srh">Search</button>
                    <!-- <button type="button" title="Reset" class="reset">Reset</button> -->
                </p>
            </div>
            <div class="table_info_group1">
                <div class="paging">
                    <ul>
                        <li><a href="#none" class="first"><span class="hidden">First</span></a></li><!--hidden 처리-->
                        <li><a href="#none" class="before"><span class="hidden">Before</span></a></li>
                        <li><span>22</span> / <span>9,999</span></li>
                        <li><a href="#none" class="next"><span class="hidden">Next</span></a></li>
                        <li><a href="#none" class="last"><span class="hidden">Last</span></a></li>
                    </ul>
                </div>
                <div class="count">
                    <span>Total Count: <em>9,999</em></span><p class="count1">43</p><p class="count2">3</p><p class="count3">2</p><p class="count4">122</p>
                </div>
                <div class="button">
                    <button type="button" title="Ack">Ack</button>
                    <button type="button" title="Ack">Unack</button>
                    <button type="button" title="Clear">Clear</button>
                </div>
            </div>
            <div class="table_info_group2">
                <!-- <button type="button" title="가청 알람" class="icon1 act">가청 알람</button> 버튼 삭제 -->
                <button type="button" title="가시 알람" class="icon2 act">가시 알람</button>
                <button type="button" title="소리" class="icon3 act">소리</button><!-- 기능 눌렸을 때 "act" class 추가 -->
                <button type="button" title="정지" class="icon4 act">정지</button>
                <button type="button" title="Recurring" class="icon7">Recurring</button>
            </div>
            <div class="table_info_group3">
                <button type="button" title="Excel" class="icon5">Excel</button>
                <!--9/1 수정 : icon6삭제, icon8,9 추가 -->
                <button type="button" title="Large Window" class="icon8">Large Window</button><!-- 클릭하면 "on" toggle -->
                <button type="button" title="Small Window" class="icon9">Small Window</button><!-- 클릭하면 "on" toggle -->
            </div>
        </div><!--// alarm adjustment -->
        <div class="data checkbox_all"><!--9/1수정 : 클래스명 수정-->
            <table class="tbl_list type2">
                <colgroup>
                    <col />
                    <col width="74px"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="10%"/>
                    <col width="*"/>
                    <col width="*"/>
                    <col width="13%"/>
                    <col width="13%"/>
                    <col width="10px">
                </colgroup>
                <thead>
                <tr>
                    <th class="chk">
                        <!--9/1수정 : checkbox 수정-->
                        <div class="checkbox type_02">
                            <input type="checkbox" id="temp_01" class="all">
                            <label for="temp_01"></label>
                        </div>
                    </th>
                    <th class="ok">Ack</th>
                    <th class="sort">Severity</th>
                    <th class="sort up">Code</th>
                    <th>Group</th>
                    <th>Location</th>
                    <th>Probable Cause</th>
                    <th class="date sort down">Date</th>
                    <th>Additional Text</th>
                    <th></th>
                </tr>
                </thead>
            </table>
            <div class="scroll table hover_event scroll-type3">
                <table class="tbl_list type2">
                    <colgroup>
                        <col />
                        <col width="74px"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="10%"/>
                        <col width="*"/>
                        <col width="*"/>
                        <col width="13%"/>
                        <col width="13%"/>
                    </colgroup>
                    <tbody>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_02">
                                <label for="temp_02"></label>
                            </div>
                        </td>
                        <td></td>
                        <td class="sev cr">Critical</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_03">
                                <label for="temp_03"></label>
                            </div>
                        </td>
                        <td class="ok">Ack</td>
                        <td class="sev ma">Major</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_04">
                                <label for="temp_04"></label>
                            </div>
                        </td>
                        <td class="ok">Ack</td>
                        <td class="sev mi">Minor</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_05">
                                <label for="temp_05"></label>
                            </div>
                        </td>
                        <td></td>
                        <td class="sev wa">Warning</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_06">
                                <label for="temp_06"></label>
                            </div>
                        </td>
                        <td></td>
                        <td class="sev cl">Cleared</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_07">
                                <label for="temp_07"></label>
                            </div>
                        </td>
                        <td></td>
                        <td class="sev nor">Fault</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_08">
                                <label for="temp_08"></label>
                            </div>
                        </td>
                        <td></td>
                        <td class="sev noti">Notice</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_09">
                                <label for="temp_09"></label>
                            </div>
                        </td>
                        <td></td>
                        <td class="sev ind">Interminate</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_10">
                                <label for="temp_10"></label>
                            </div>
                        </td>
                        <td></td>
                        <td class="sev cr">Critical</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    <tr>
                        <td class="chk">
                            <div class="checkbox type_02">
                                <input type="checkbox" id="temp_11">
                                <label for="temp_11"></label>
                            </div>
                        </td>
                        <td></td>
                        <td class="sev cr">Critical</td> <!--severity addclass: ind, cr, ma, mi, wa, st, nor-->
                        <td>90200101</td>
                        <td >Processing error</td>
                        <td>ATOM/ATOM/RSA/PING/Test_Node04</td>
                        <td>PING_STATUS_CHANGE</td>
                        <td class="date">03-02-2016 14:32:00</td>
                        <td>RUNNING</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div><!--// sub_bottom-->

</div><!--// monitoring -->
<script>
  /* sub page - html 확인용 임시사용 스크립트 */
  $(".m_logo, button.back").click(function(){ /*.m_logo를 노드 클릭으로 변경해야 합니다.*/
      $(".m_submenu").toggleClass("on");/* sub menu */
      $(".sub_type").toggleClass("on");
      $(".sub_type .sect.type1").toggleClass("on");
  });

  /* tab - html 확인용 임시사용 스크립트*/
  $(".tab2").click(function(){ /*.tab 클릭시 sect type2의 page2~8 까지 호출*/
      $(".sect.type2.page2").toggleClass("on");
  });
  $(".tab3").click(function(){
      $(".sect.type2.page3").toggleClass("on");
  });
  $(".tab4").click(function(){
      $(".sect.type2.page4").toggleClass("on");
  });
  $(".tab5").click(function(){
      $(".sect.type2.page5").toggleClass("on");
  });
  $(".tab6").click(function(){
      $(".sect.type2.page6").toggleClass("on");
  });
  $(".tab7").click(function(){
      $(".sect.type2.page7").toggleClass("on");
  });
  $(".tab8").click(function(){
      $(".sect.type2.page8").toggleClass("on");
  });

  /* tree */
  $(document).ready(function(){
      $(".tree_wrap").addClass("on");
  });
  $(".folding").click(function(){ /*.folding 버튼 클릭시 트리메뉴 왼쪽으로 들어가고, ub_content 레이아웃도 같이 움직임*/
   $(".tree_wrap").toggleClass("on");

   if($('.tree_wrap').hasClass('on')){
     $('.sub_content').addClass('change');
   }
   else{
    $('.sub_content').removeClass('change');
  }
  });

  // jstree
  $('#jstree').jstree();

  /* Large/Small Window */
  $(".icon8").click(function(){
      $(".sub_bottom").toggleClass("on");
      $(this).toggleClass("on");
      $(".sub_bottom").removeClass("mini");
      $(".icon9").removeClass("on");
      $(".sub_body").removeClass("full");
  });
  $(".icon9").click(function(){
      $(".sub_bottom").toggleClass("mini");
      $(this).toggleClass("on");
      $(".sub_bottom").removeClass("on");
      $(".icon8").removeClass("on");
      $(".sub_body").toggleClass("full");
  });
</script>
</body>
</html>
