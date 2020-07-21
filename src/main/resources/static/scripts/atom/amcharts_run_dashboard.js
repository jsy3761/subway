/*ATOM Dashboard*/

/* -- theme_02 --*/
AmCharts.themes.theme_02 = {
  themeName: "theme_02",
  AmChart: {
    color: "rgba(85,85,85,0.6)", // x,y축 텍스트컬러
  },
  AmCoordinateChart: {
    colors: ["#13c28d", "#ffba66", "#8a77c9", "#24abe0", "#f67e7d", "#6a849e", "#9bc95b", "#d982bc", "#4487f3", "#adada8"] // graph color
  },
  AmSerialChart: {
    fontFamily:"segoe ui",
    autoMargins: false,
    autoMarginOffset: 0,
    marginTop: 22, 
    marginRight: -1, 
    marginLeft: 0, 
    marginBottom: 30, 
    startDuration: 0, //애니메이션 속도
    startEffect: "elastic", //애니메이션 스타일
    sequencedAnimation: false //애니메이션 없음
  },
  AxisBase: { //x축, y축, grid style
    fontSize: 11,
    axisColor: "rgba(211,211,211,0.88)", // x,y축 line color
    axisAlpha: 0,
    axisThickness: 0,
    gridColor: "#dedede", // line color
    gridAlpha: 1,
    inside: true, 
    labelOffset: 6,
    tickLength: 0,// label line 길이
    titleBold: false,
    titleColor: "#808080",
    titleFontSize: 12,
    markPeriodChange: false
  },
  CategoryAxis: { //x축
    //position: "top",
    inside: false, 
    autoWrap: true,//텍스트 행처리 auto
    startOnAxis: true,
    equalSpacing: true, // grid start 지점 지정
    parseDates: true, // x축 date-related에 의한 정의 줄임
    boldPeriodBeginning: false,
    minHorizontalGap: 30, // minimum cell width
    axisAlpha: 1,
    axisThickness: 1,
    labelOffset: -3,
    gridAlpha: 0,
    showFirstLabel: false,
    showLastLabel: false
    //tickPosition: "start" //colum 차트 tick 지정
  },
  ValueAxis: { //y축
    labelOffset: 2,
    dashLength: 3, // line dash
    minVerticalGap: 35,
    zeroGridAlpha: 0,
    showFirstLabel: false
    //showLastLabel: true
  },
  ChartScrollbar: {
    dragIcon: "dragIconRectBig", //드래그 아이콘 모양 변경 "dragIconRoundBig"//드래그 아이콘 모양 변경
    dragIconHeight: 25,
    dragIconWidth: 25,
    scrollbarHeight: 7,
    backgroundColor: "#e1e1e1"
  },
  ChartCursor: {
    cursorColor: "rgba(55,52,77,0.6)",//마우스 오버시 세로 라인&selection 컬러
    color: "#ffffff",
    cursorAlpha: 1, //세로 라인
    selectionAlpha: 0.15,
    valueLineEnabled: true, //가로 라인
    //valueLineBalloonEnabled: true, //Y축 balloon
    //avoidBalloonOverlapping: false,
    //balloonPointerOrientation: "vertical",
    categoryBalloonAlpha: 1,
    categoryBalloonColor: "#232229",
    categoryBalloonEnabled: false
  },
  AmBalloon: {
    color: "#111111",
    fillAlpha: 0.4,
    fillColor: "#ffffff",
    borderThickness: 1.7,
    fontSize: 12,
    pointerWidth: 5,
    shadowAlpha: 0,
    horizontalPadding: 6,
    verticalPadding: 2,
    textAlign: "left" 
  },
  AmLegend: {
    align: "right",
    position: "top",
    autoMargins: false, 
    marginTop: 5,
    marginBottom: 0,
    //backgroundAlpha: 1,
    //backgroundColor: "pink",
    color: "#777777",
    fontSize: 12,
    markerSize: 9,
    markerType: "square",
    markerLabelGap: 8,
    spacing: 35,
    equalWidths: false,
    verticalGap: -1,
    valueAlign: "left",
    valueText: ""
  },
  AmGraph: { //"graphs"속성 설정
    lineThickness: 1.5,  // line graph 두깨
    lineAlpha: 1  // line graph 투명도
  },
  AmPieChart: {
    fontFamily:"segoe ui",
    colors: ["#13c28d", "#f67e7d", "#24abe0", "#ffba66", "#8a77c9", "#9bc95b", "#6a849e", "#d982bc", "#4487f3", "#adada8"],
    marginTop: 10,
    marginBottom: 25,
    innerRadius: "85%",
    startDuration: 0,
    labelRadius: 18,
    minRadius: 85,
    labelTickColor: "#555555",
    color: "#777777",
    fontSize: 12,
    maxLabelWidth: 93,
    pullOutOnlyOne: true
  },
  AmAngularGauge: {
    fontFamily:"segoe ui",
    adjustSize: false,
    gaugeY: 150,// 전체 div height사이즈 대비 y 위치 지정
    color: "#808080",
    marginTop: 20 //전체 div에서 gauge 사이즈 줄이기
  },
  GaugeArrow: {
    color: "#2d344c",
    borderAlpha: 0,
    nailRadius: 10,
    radius: "55%", //바늘 길이
    startWidth: 19
  },
  GaugeAxis: {
    axisAlpha: 0,
    endAngle: 90,
    endValue: 112,
    fontSize: 10,
    inside: false, //텍스트 원 밖으로
    labelOffset: 8,
    labelsEnabled: false, //텍스트 숨기기
    minorTickLength: 72, //원두깨
    startAngle: -90,
    startValue: 10, //시작값이 0이 아닐때 값 지정
    tickAlpha: 0,
    tickThickness: 0
  },
  AmRectangularChart: {
    zoomOutButtonColor: "#e5e5e5",
    zoomOutButtonRollOverAlpha: 0.5,
    zoomOutButtonImageSize: 15
  },
  Label: {//기타 텍스트 정보를 삽입
    color: "rgba(0,0,0,0.55)", //텍스트컬러
    size: 11
  }
};

$(function() {

  /* vDPI Dashboard - Pie */
  var $chartType_pie01 = $('.amchart_dash_pie01');
  var $chartType_pie01_array = [];
  for (var i = 0; i < $chartType_pie01.length; i++) {
    $id = 'chartTempID_pie01_' + (i + 1);
    $chartType_pie01.eq(i).attr('id', $id);
    $chartType_pie01_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_pie01_array.length; i++) {
    AmCharts.makeChart($chartType_pie01_array[i],
      {
        "type": "pie",
        "theme":"theme_02",
        "balloonText": "<b>[[title]]<br><span style='font-size:14px'>[[value]]</span><br>([[percents]]%)</b>",
        "labelText": "[[title]]",
        "titleField": "category",
        "valueField": "column-1",
        "balloon": {
          "textAlign": "center"
        },
        "dataProvider": [
          {
            "category": "Category Name 001",
            "column-1": 500
          },
          {
            "category": "Category Name 002",
            "column-1": 250
          },
          {
            "category": "Category Name 003",
            "column-1": 200
          },
          {
            "category": "Name 004",
            "column-1": 150
          },
          {
            "category": "Name 005 test test",
            "column-1": 100
          }
        ]
      }
    );
  }

  /* vDPI Dashboard - Line */
  var $chartType_line01 = $('.amchart_dash_line01');
  var $chartType_line01_array = [];
  for (var i = 0; i < $chartType_line01.length; i++) {
    $id = 'chartTempID_line01_' + (i + 1);
    $chartType_line01.eq(i).attr('id', $id);
    $chartType_line01_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_line01_array.length; i++) {
    AmCharts.makeChart($chartType_line01_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "autoMargins":false,
        "marginBottom": 30, 
        "marginLeft": 0,
        "marginRight": -1, 
        "marginTop": 22, 
        "categoryAxis": {
          "minPeriod": "mm",
          "inside": false, 
          "labelOffset": -3
        },
        "chartCursor": {
          "oneBalloonOnly": true,
          "balloonPointerOrientation": "vertical",
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-1",
            "lineThickness": 1.5,
            "title": "Legend Name_01",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "lineThickness": 1.5,
            "title": "Legend 02",
            "valueField": "column-2"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-3",
            "lineThickness": 1.5,
            "title": "Legend Name_03",
            "valueField": "column-3"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-4",
            "lineThickness": 1.5,
            "title": "Legend Name_04",
            "valueField": "column-4"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-5",
            "lineThickness": 1.5,
            "title": "Legend Name_05",
            "valueField": "column-5"
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "bps", // 단위 같은 것을 기입
            "x": 6,
            "y": 6
          }
        ],
        "legend": {
          "enabled": true,
          "equalWidths": true,
          "spacing": 20,
          "align": "left"
        },
        "dataProvider": [
          {
            "column-1": 7000,
            "column-2": 5000,
            "column-3": 3500,
            "column-4": 2500,
            "column-5": 2000,
            "date": "2016-11-30 07:50"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "column-3": 0,
            "column-4": 0,
            "column-5": 0,
            "date": "2016-11-30 07:51"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "column-3": 0,
            "column-4": 0,
            "column-5": 0,
            "date": "2016-11-30 07:52"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "column-3": 0,
            "column-4": 0,
            "column-5": 0,
            "date": "2016-11-30 07:53"
          },
          {
            "column-1": 2000,
            "column-2": 1000,
            "column-3": 3500,
            "column-4": 2500,
            "column-5": 2000,
            "date": "2016-11-30 07:54"
          },
          {
            "column-1": 3000,
            "column-2": 4000,
            "column-3": 4500,
            "column-4": 3500,
            "column-5": 2000,
            "date": "2016-11-30 07:55"
          },
          {
            "column-1": 6000,
            "column-2": 3000,
            "column-3": 3500,
            "column-4": 2500,
            "column-5": 2000,
            "date": "2016-11-30 07:56"
          },
          {
            "column-1": 8200,
            "column-2": 7000,
            "column-3": 4500,
            "column-4": 3500,
            "column-5": 5000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 6000,
            "column-2": 3000,
            "column-3": 3500,
            "column-4": 2500,
            "column-5": 2000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 4000,
            "column-2": 5000,
            "column-3": 4500,
            "column-4": 0,
            "column-5": 4000,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 6000,
            "column-2": 3000,
            "column-3": 3500,
            "column-4": 2500,
            "column-5": 2000,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 3000,
            "column-2": 5000,
            "column-3": 4500,
            "column-4": 3500,
            "column-5": 2000,
            "date": "2016-11-30 08:01"
          }
        ]
      }
    );
  }

  /* vDPI Dashboard - line - style02(left value) */
  var $chartType_line02 = $('.amchart_dash_line02');
  var $chartType_line02_array = [];
  for (var i = 0; i < $chartType_line02.length; i++) {
    $id = 'chartTempID_line02_' + (i + 1);
    $chartType_line02.eq(i).attr('id', $id);
    $chartType_line02_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_line02_array.length; i++) {
    AmCharts.makeChart($chartType_line02_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 15, //Legend align-right 1 line
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-3",
            "lineThickness": 1.5,
            "title": "Subscriber",
            "valueField": "column-3"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-1",
            "lineThickness": 1.5,
            "title": "SIM Cards",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "lineThickness": 1.5,
            "title": "Devices",
            "valueField": "column-2"
          }
        ],
        "guides": [
          {
            "above": true,
            "id": "Guide-1",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max Input",
            "lineColor": "#f21835",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 100000
          },
          {
            "above": true,
            "id": "Guide-2",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max Output",
            "lineColor": "#0059bf",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 90000
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "count", // 단위 같은 것을 기입
            "x": 6,
            "y": 0
          }
        ],
        "legend": {
          "enabled": true,
          "reversedOrder": true
        },
        "dataProvider": [
          {
            "column-1": 50000,
            "column-2": 60000,
            "column-3": 110000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 100000,
            "column-2": 80000,
            "column-3": 180000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "column-3": 0,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "column-3": 0,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "column-3": 0,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 60000,
            "column-2": 50000,
            "column-3": 155000,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 50000,
            "column-2": 40000,
            "column-3": 140000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 90000,
            "column-2": 80000,
            "column-3": 170000,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 70000,
            "column-2": 40000,
            "column-3": 110000,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 60000,
            "column-2": 80000,
            "column-3": 140000,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "column-2": 80000,
            "column-3": 130000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "column-2": 90000,
            "column-3": 160000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }


  /* vDPI Dashboard - line - right legend list */
  var $chartType_line03 = $('.amchart_dash_line03');
  var $chartType_line03_array = [];
  for (var i = 0; i < $chartType_line03.length; i++) {
    $id = 'chartTempID_line03_' + (i + 1);
    $chartType_line03.eq(i).attr('id', $id);
    $chartType_line03_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_line03_array.length; i++) {
    AmCharts.makeChart($chartType_line03_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 7, // right legend list
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-1",
            "lineThickness": 1.5,
            "title": "01 graph text test text txt txt txt",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "lineThickness": 1.5,
            "title": "02 graph text",
            "valueField": "column-2"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-3",
            "lineThickness": 1.5,
            "title": "03 graph text",
            "valueField": "column-3"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-4",
            "lineThickness": 1.5,
            "title": "04 graph text",
            "valueField": "column-4"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-5",
            "lineThickness": 1.5,
            "title": "05 graph text",
            "valueField": "column-5"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-6",
            "lineThickness": 1.5,
            "title": "06 graph text",
            "valueField": "column-6"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-7",
            "lineThickness": 1.5,
            "title": "07 graph text",
            "valueField": "column-7"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-8",
            "lineThickness": 1.5,
            "title": "08 graph text",
            "valueField": "column-8"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-9",
            "lineThickness": 1.5,
            "title": "09 graph text",
            "valueField": "column-9"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-10",
            "lineThickness": 1.5,
            "title": "10 graph text",
            "valueField": "column-10"
          }
        ],
        "guides": [
          {
            "above": true,
            "id": "Guide-1",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max Input",
            "lineColor": "#f21835",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 100000
          },
          {
            "above": true,
            "id": "Guide-2",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max Output",
            "lineColor": "#0059bf",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 90000
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "count", // 단위 같은 것을 기입
            "x": 6,
            "y": 6
          }
        ],
        "legend": {
          "enabled": true,
          "periodValueText": "[[value.sum]]",
          // "align": "right",
          "position": "right",
          "autoMargins": false, 
          "marginTop": 6,
          "marginBottom": 12,
          "marginLeft": 30,
          "marginRight": 28,
          // "color": "#777777",
          // "fontSize": 12,
          // "markerSize": 9,
          // "markerType": "square",
          // "markerLabelGap": 8,
          // "spacing": 35,
          "labelWidth": 130,
          "equalWidths": true,
          "verticalGap": 5,
          "valueAlign": "right",
          "valueText": "[[value]]",
          "valueWidth": 40
        },
        "dataProvider": [
          {
            "column-1": 280,
            "column-2": 150,
            "column-3": 170,
            "column-4": 160,
            "column-5": 75,
            "column-6": 74,
            "column-7": 13,
            "column-8": 12,
            "column-9": 11,
            "column-10": 53,
            "date": "2016-11-30 07:40:00"
          },
          {
            "column-1": 160,
            "column-2": 170,
            "column-3": 150,
            "column-4": 140,
            "column-5": 75,
            "column-6": 74,
            "column-7": 13,
            "column-8": 12,
            "column-9": 11,
            "column-10": 53,
            "date": "2016-11-30 07:45:00"
          },
          {
            "column-1": 120,
            "column-2": 130,
            "column-3": 140,
            "column-4": 130,
            "column-5": 75,
            "column-6": 74,
            "column-7": 13,
            "column-8": 12,
            "column-9": 11,
            "column-10": 53,
            "date": "2016-11-30 07:50:00"
          },
          {
            "column-1": 110,
            "column-2": 130,
            "column-3": 150,
            "column-4": 160,
            "column-5": 75,
            "column-6": 74,
            "column-7": 13,
            "column-8": 12,
            "column-9": 11,
            "column-10": 53,
            "date": "2016-11-30 07:55:00"
          },
          {
            "column-1": 120,
            "column-2": 110,
            "column-3": 170,
            "column-4": 150,
            "column-5": 75,
            "column-6": 74,
            "column-7": 13,
            "column-8": 12,
            "column-9": 11,
            "column-10": 53,
            "date": "2016-11-30 08:00:00"
          },
          {
            "column-1": 130,
            "column-2": 120,
            "column-3": 150,
            "column-4": 140,
            "column-5": 75,
            "column-6": 74,
            "column-7": 13,
            "column-8": 12,
            "column-9": 11,
            "column-10": 53,
            "date": "2016-11-30 08:05:00"
          },
          {
            "column-1": 160,
            "column-2": 180,
            "column-3": 140,
            "column-4": 130,
            "column-5": 75,
            "column-6": 74,
            "column-7": 13,
            "column-8": 12,
            "column-9": 11,
            "column-10": 53,
            "date": "2016-11-30 08:10:00"
          }
        ]
      }
    );
  }

  /* vDPI Dashboard - Area */
  var $chartType_area01 = $('.amchart_dash_area01');
  var $chartType_area01_array = [];
  for (var i = 0; i < $chartType_area01.length; i++) {
    $id = 'chartTempID_area01_' + (i + 1);
    $chartType_area01.eq(i).attr('id', $id);
    $chartType_area01_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area01_array.length; i++) {
    AmCharts.makeChart($chartType_area01_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 70, //Legend align-right multi
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-1",
            "fillAlphas": 0.3,
            "fillColors": "#cccccc",
            "lineColor": "#cccccc",
            "title": "Historical",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "fillAlphas": 0.4,
            "fillColors": "#13c28d",
            "lineColor": "#13c28d",
            "title": "Current",
            "valueField": "column-2"
          }
        ],
        // "guides": [
        //  {
        //    "above": true,
        //    "id": "Guide-1",
        //    "inside": true,
        //    "position": "right",
        //    "color": "rgba(0,0,0,0.5)",
        //    "label": "Max bps",
        //    "lineColor": "#f21835",
        //    "lineAlpha": 0.4,
        //    "tickLength": 4,
        //    "value": 90000
        //  },
        //  {
        //    "above": true,
        //    "id": "Guide-2",
        //    "inside": true,
        //    "position": "right",
        //    "color": "rgba(0,0,0,0.5)",
        //    "label": "Min bps",
        //    "lineColor": "#0059bf",
        //    "lineAlpha": 0.4,
        //    "tickLength": 4,
        //    "value": 45000
        //  }
        // ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "bps", // 단위 같은 것을 기입
            "x": 8,
            "y": 55
          }
        ],
        "legend": {
          "enabled": true,
          "reversedOrder": true,
          "position": "absolute",
          "right": 20,
          "width": 98
        },
        "dataProvider": [
          {
            "column-1": 50000,
            "column-2": 60000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 89000,
            "column-2": 80000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 57000,
            "column-2": 60000,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 80000,
            "column-2": 70000,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 70000,
            "column-2": 80000,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 75000,
            "column-2": 80000,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 50000,
            "column-2": 90000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 90000,
            "column-2": 80000,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 70000,
            "column-2": 40000,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 60000,
            "column-2": 80000,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "column-2": 80000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "column-2": 90000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }

  /* vDPI Dashboard - Area */
  var $chartType_area02 = $('.amchart_dash_area02');
  var $chartType_area02_array = [];
  for (var i = 0; i < $chartType_area02.length; i++) {
    $id = 'chartTempID_area02_' + (i + 1);
    $chartType_area02.eq(i).attr('id', $id);
    $chartType_area02_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area02_array.length; i++) {
    AmCharts.makeChart($chartType_area02_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 70, //Legend align-right multi
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-1",
            "fillAlphas": 0.3,
            "fillColors": "#cccccc",
            "lineColor": "#cccccc",
            "title": "Historical",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "fillAlphas": 0.4,
            "fillColors": "#f67e7d",
            "lineColor": "#f67e7d",
            "title": "Current",
            "valueField": "column-2"
          }
        ],
        "guides": [
          {
            "above": true,
            "id": "Guide-1",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max bps",
            "lineColor": "#f21835",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 90000
          // },
          // {
          //  "above": true,
          //  "id": "Guide-2",
          //  "inside": true,
          //  "position": "right",
          //  "color": "rgba(0,0,0,0.5)",
          //  "label": "Min bps",
          //  "lineColor": "#0059bf",
          //  "lineAlpha": 0.4,
          //  "tickLength": 4,
          //  "value": 45000
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "bps", // 단위 같은 것을 기입
            "x": 6,
            "y": 55
          }
        ],
        "legend": {
          "enabled": true,
          "reversedOrder": true,
          "position": "absolute",
          "right": 20,
          "width": 98
        },
        "dataProvider": [
          {
            "column-1": 50000,
            "column-2": 60000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 89000,
            "column-2": 80000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 57000,
            "column-2": 60000,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 80000,
            "column-2": 70000,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 70000,
            "column-2": 80000,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 75000,
            "column-2": 80000,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 50000,
            "column-2": 90000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "column-2": 80000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "column-2": 90000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }

  /* vDPI Dashboard - Area */
  var $chartType_area03 = $('.amchart_dash_area03');
  var $chartType_area03_array = [];
  for (var i = 0; i < $chartType_area03.length; i++) {
    $id = 'chartTempID_area03_' + (i + 1);
    $chartType_area03.eq(i).attr('id', $id);
    $chartType_area03_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area03_array.length; i++) {
    AmCharts.makeChart($chartType_area03_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 70, //Legend align-right multi
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-1",
            "fillAlphas": 0.3,
            "fillColors": "#cccccc",
            "lineColor": "#cccccc",
            "title": "Historical",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "fillAlphas": 0.4,
            "fillColors": "#8a77c9",
            "lineColor": "#8a77c9",
            "title": "Current",
            "valueField": "column-2"
          }
        ],
        // "guides": [
        //  {
        //    "above": true,
        //    "id": "Guide-1",
        //    "inside": true,
        //    "position": "right",
        //    "color": "rgba(0,0,0,0.5)",
        //    "label": "Max bps",
        //    "lineColor": "#f21835",
        //    "lineAlpha": 0.4,
        //    "tickLength": 4,
        //    "value": 90000
        //  },
        //  {
        //    "above": true,
        //    "id": "Guide-2",
        //    "inside": true,
        //    "position": "right",
        //    "color": "rgba(0,0,0,0.5)",
        //    "label": "Min bps",
        //    "lineColor": "#0059bf",
        //    "lineAlpha": 0.4,
        //    "tickLength": 4,
        //    "value": 45000
        //  }
        // ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "bps", // 단위 같은 것을 기입
            "x": 6,
            "y": 55
          }
        ],
        "legend": {
          "enabled": true,
          "reversedOrder": true,
          "position": "absolute",
          "right": 20,
          "width": 98
        },
        "dataProvider": [
          {
            "column-1": 50000,
            "column-2": 60000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 89000,
            "column-2": 80000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 57000,
            "column-2": 60000,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 80000,
            "column-2": 70000,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 70000,
            "column-2": 80000,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 75000,
            "column-2": 80000,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 50000,
            "column-2": 90000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 90000,
            "column-2": 80000,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 70000,
            "column-2": 40000,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 60000,
            "column-2": 80000,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "column-2": 80000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "column-2": 90000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }

  /* vDPI Dashboard - Area */
  var $chartType_area04 = $('.amchart_dash_area04');
  var $chartType_area04_array = [];
  for (var i = 0; i < $chartType_area04.length; i++) {
    $id = 'chartTempID_area04_' + (i + 1);
    $chartType_area04.eq(i).attr('id', $id);
    $chartType_area04_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area04_array.length; i++) {
    AmCharts.makeChart($chartType_area04_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 70, //Legend align-right multi
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          // {
          //  "balloonText": "<b>[[title]]: [[value]]</b>",
          //  "id": "AmGraph-1",
          //  "fillAlphas": 0.3,
          //  "fillColors": "#cccccc",
          //  "lineColor": "#cccccc",
          //  "title": "Historical",
          //  "valueField": "column-1"
          // },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "fillAlphas": 0.4,
            "fillColors": "#ffba66",
            "lineColor": "#ffba66",
            "title": "Current",
            "valueField": "column-2"
          }
        ],
        // "guides": [
        //  {
        //    "above": true,
        //    "id": "Guide-1",
        //    "inside": true,
        //    "position": "right",
        //    "color": "rgba(0,0,0,0.5)",
        //    "label": "Max bps",
        //    "lineColor": "#f21835",
        //    "lineAlpha": 0.4,
        //    "tickLength": 4,
        //    "value": 90000
        //  },
        //  {
        //    "above": true,
        //    "id": "Guide-2",
        //    "inside": true,
        //    "position": "right",
        //    "color": "rgba(0,0,0,0.5)",
        //    "label": "Min bps",
        //    "lineColor": "#0059bf",
        //    "lineAlpha": 0.4,
        //    "tickLength": 4,
        //    "value": 45000
        //  }
        // ],
        "valueAxes": [
          {
            "id": "ValueAxis-1",
            "minVerticalGap": 10,//데이타가 값일 항상 일정하여 채워보이고 싶을때 추가
            "labelFrequency": 2,//데이타가 값일 항상 일정하여 채워보이고 싶을때 추가
            "minimum": 0 //데이타가 값일 항상 일정하여 채워보이고 싶을때 추가
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "bps", // 단위 같은 것을 기입
            "x": 6,
            "y": 55
          }
        ],
        "legend": {
          "enabled": false,
          "position": "absolute",
          "right": 20,
          "width": 98
        },
        "dataProvider": [
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 100,
            "column-2": 100,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }

  /* vDPI Dashboard - Area */
  var $chartType_area05 = $('.amchart_dash_area05');
  var $chartType_area05_array = [];
  for (var i = 0; i < $chartType_area05.length; i++) {
    $id = 'chartTempID_area05_' + (i + 1);
    $chartType_area05.eq(i).attr('id', $id);
    $chartType_area05_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area05_array.length; i++) {
    AmCharts.makeChart($chartType_area05_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 70, //Legend align-right multi
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-1",
            "fillAlphas": 0.3,
            "fillColors": "#cccccc",
            "lineColor": "#cccccc",
            "title": "Historical",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "fillAlphas": 0.4,
            "fillColors": "#24abe0",
            "lineColor": "#24abe0",
            "title": "Current",
            "valueField": "column-2"
          }
        ],
        "guides": [
          {
            "above": true,
            "id": "Guide-1",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max bps",
            "lineColor": "#f21835",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 90000
          // },
          // {
          //  "above": true,
          //  "id": "Guide-2",
          //  "inside": true,
          //  "position": "right",
          //  "color": "rgba(0,0,0,0.5)",
          //  "label": "Min bps",
          //  "lineColor": "#0059bf",
          //  "lineAlpha": 0.4,
          //  "tickLength": 4,
          //  "value": 45000
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "bps", // 단위 같은 것을 기입
            "x": 6,
            "y": 55
          }
        ],
        "legend": {
          "enabled": true,
          "reversedOrder": true,
          "position": "absolute",
          "right": 20,
          "width": 98
        },
        "dataProvider": [
          {
            "column-1": 50000,
            "column-2": 60000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 89000,
            "column-2": 80000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 57000,
            "column-2": 60000,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 80000,
            "column-2": 70000,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 70000,
            "column-2": 80000,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 75000,
            "column-2": 80000,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 50000,
            "column-2": 90000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 90000,
            "column-2": 80000,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 70000,
            "column-2": 40000,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 60000,
            "column-2": 80000,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "column-2": 80000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "column-2": 90000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }

  /* Thingplug Dashboard - Area (no legend) */
  var $chartType_area06 = $('.amchart_dash_area06');
  var $chartType_area06_array = [];
  for (var i = 0; i < $chartType_area06.length; i++) {
    $id = 'chartTempID_area06_' + (i + 1);
    $chartType_area06.eq(i).attr('id', $id);
    $chartType_area06_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area06_array.length; i++) {
    AmCharts.makeChart($chartType_area06_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 16, //no Legend
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true
        },
        "graphs": [
          {
            "balloonText": "[[date]]<br><b>[[value]]</b>",
            "id": "AmGraph-1",
            "fillAlphas": 0.4,
            "fillColors": "#24abe0",
            "lineColor": "#24abe0",
            "valueField": "column-1"
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "CPS", // 단위 같은 것을 기입
            "x": 6,
            "y": 2
          }
        ],
        "dataProvider": [
          {
            "column-1": 50000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 89000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 57000,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 80000,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 70000,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 75000,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 50000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 90000,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 70000,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 60000,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }

  /* Thingplug Dashboard - Area (Gradient) */
  var $chartType_area13 = $('.amchart_dash_area13');
  var $chartType_area13_array = [];
  for (var i = 0; i < $chartType_area13.length; i++) {
    $id = 'chartTempID_area13_' + (i + 1);
    $chartType_area13.eq(i).attr('id', $id);
    $chartType_area13_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area13_array.length; i++) {
    AmCharts.makeChart($chartType_area13_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 1,
        "marginRight": 0, 
        "marginLeft": 0, 
        "marginBottom": 0, 
        "categoryAxis": {
          "minPeriod": "mm",
          "axisAlpha": 0,
          "axisThickness": 0,
          "labelOffset": 0,
          "labelsEnabled": false
        },
        "chartCursor": {
          "enabled": true,
          "cursorAlpha": 0,
          "valueLineEnabled": false
        },
        "graphs": [
          {
            "balloonText": "[[date]]<br><b>[[value]]</b>",
            "id": "AmGraph-1",
            "fillAlphas": 0.12,
            "fillColors": "#13c28d",
            "lineColor": "#13c28d",
            "pattern":{"url":"../../../../images/atom/chart_pattern01.png", "width":4, "height":200},
            "valueField": "column-1"
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1",
            "labelOffset": 0,
            "gridAlpha": 0,
            "labelsEnabled": false
          }
        ],
        "dataProvider": [
          {
            "column-1": 50000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 89000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 57000,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 80000,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 70000,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 70500,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 55000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 90000,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 70000,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 60000,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }

  /* Thingplug Dashboard - Area (Gradient) */
  var $chartType_area14 = $('.amchart_dash_area14');
  var $chartType_area14_array = [];
  for (var i = 0; i < $chartType_area14.length; i++) {
    $id = 'chartTempID_area14_' + (i + 1);
    $chartType_area14.eq(i).attr('id', $id);
    $chartType_area14_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area14_array.length; i++) {
    AmCharts.makeChart($chartType_area14_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 1,
        "marginRight": 0, 
        "marginLeft": 0, 
        "marginBottom": 0, 
        "categoryAxis": {
          "minPeriod": "mm",
          "axisAlpha": 0,
          "axisThickness": 0,
          "labelOffset": 0,
          "labelsEnabled": false
        },
        "chartCursor": {
          "enabled": true,
          "cursorAlpha": 0,
          "valueLineEnabled": false
        },
        "graphs": [
          {
            "balloonText": "[[date]]<br><b>[[value]]</b>",
            "id": "AmGraph-1",
            "fillAlphas": 0.12,
            "fillColors": "#8a77c9",
            "lineColor": "#8a77c9",
            "pattern":{"url":"../../../../images/atom/chart_pattern02.png", "width":4, "height":200},
            "valueField": "column-1"
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1",
            "labelOffset": 0,
            "gridAlpha": 0,
            "labelsEnabled": false
          }
        ],
        "dataProvider": [
          {
            "column-1": 50000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 89000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 57000,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 80000,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 70000,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 70500,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 55000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 90000,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 70000,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 60000,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }

  /* vDPI Dashboard - Area Stacked - style01 */
  var $chartType_area11 = $('.amchart_dash_area11');
  var $chartType_area11_array = [];
  for (var i = 0; i < $chartType_area11.length; i++) {
    $id = 'chartTempID_area11_' + (i + 1);
    $chartType_area11.eq(i).attr('id', $id);
    $chartType_area11_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area11_array.length; i++) {
    AmCharts.makeChart($chartType_area11_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 70, //Legend align-right multi
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-1",
            "fillAlphas": 0.7,
            "fillColors": "#13c28d",
            "lineColor": "#13c28d",
            "title": "Output",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "fillAlphas": 0.7,
            "fillColors": "#ffba66",
            "lineColor": "#ffba66",
            "title": "Input",
            "valueField": "column-2"
          }
        ],
        "guides": [
          {
            "above": true,
            "id": "Guide-1",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max Input",
            "lineColor": "#f21835",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 170000
          },
          {
            "above": true,
            "id": "Guide-2",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max Output",
            "lineColor": "#0059bf",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 90000
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1",
            "stackType": "regular"
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "bps", // 단위 같은 것을 기입
            "x": 6,
            "y": 55
          }
        ],
        "legend": {
          "enabled": true,
          "reversedOrder": true,
          "position": "absolute",
          "right": 20,
          "width": 98
        },
        "dataProvider": [
          {
            "column-1": 50000,
            "column-2": 60000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 89000,
            "column-2": 80000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 57000,
            "column-2": 60000,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 80000,
            "column-2": 70000,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 70000,
            "column-2": 80000,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 75000,
            "column-2": 80000,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 50000,
            "column-2": 90000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 90000,
            "column-2": 80000,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 70000,
            "column-2": 40000,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 60000,
            "column-2": 80000,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "column-2": 80000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "column-2": 90000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }

  /* vDPI Dashboard - Area Stacked - style02*/
  var $chartType_area12 = $('.amchart_dash_area12');
  var $chartType_area12_array = [];
  for (var i = 0; i < $chartType_area12.length; i++) {
    $id = 'chartTempID_area12_' + (i + 1);
    $chartType_area12.eq(i).attr('id', $id);
    $chartType_area12_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_area12_array.length; i++) {
    AmCharts.makeChart($chartType_area12_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 15, //Legend align-right 1 line
        "categoryAxis": {
          "minPeriod": "mm"
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-3",
            "fillAlphas": 0.4,
            "fillColors": "#ffba66",
            "lineColor": "#ffba66",
            "title": "Total",
            "valueField": "column-3"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-1",
            "fillAlphas": 0.4,
            "fillColors": "#f67e7d",
            "lineColor": "#f67e7d",
            "title": "Output",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "fillAlphas": 0.4,
            "fillColors": "#13c28d",
            "lineColor": "#13c28d",
            "title": "Input",
            "valueField": "column-2"
          }
        ],
        "guides": [
          {
            "above": true,
            "id": "Guide-1",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max Input",
            "lineColor": "#f21835",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 100000
          },
          {
            "above": true,
            "id": "Guide-2",
            "inside": true,
            "position": "right",
            "color": "rgba(0,0,0,0.5)",
            "label": "Max Output",
            "lineColor": "#0059bf",
            "lineAlpha": 0.4,
            "tickLength": 4,
            "value": 90000
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
            //"stackType": "regular"  
          }
        ],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "bps", // 단위 같은 것을 기입
            "x": 6,
            "y": 0
          }
        ],
        "legend": {
          "enabled": true,
          "reversedOrder": true
        },
        "dataProvider": [
          {
            "column-1": 50000,
            "column-2": 60000,
            "column-3": 110000,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 100000,
            "column-2": 80000,
            "column-3": 180000,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "column-3": 0,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "column-3": 0,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 0,
            "column-2": 0,
            "column-3": 0,
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": 60000,
            "column-2": 50000,
            "column-3": 155000,
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": 50000,
            "column-2": 40000,
            "column-3": 140000,
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": 90000,
            "column-2": 80000,
            "column-3": 170000,
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": 70000,
            "column-2": 40000,
            "column-3": 110000,
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": 60000,
            "column-2": 80000,
            "column-3": 140000,
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": 50000,
            "column-2": 80000,
            "column-3": 130000,
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": 70000,
            "column-2": 90000,
            "column-3": 160000,
            "date": "2016-11-30 08:08"
          }
        ]
      }
    );
  }


  /* ATOM Dashboard - column(3D) */
  var $chartType_column01 = $('.amchart_dash_column01');
  var $chartType_column01_array = [];
  for (var i = 0; i < $chartType_column01.length; i++) {
    $id = 'chartTempID_column01_' + (i + 1);
    $chartType_column01.eq(i).attr('id', $id);
    $chartType_column01_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_column01_array.length; i++) {
    AmCharts.makeChart($chartType_column01_array[i],
      {
        "type": "serial",
        "theme":"theme_02",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "marginTop": 45, //Legend align-right multi
        "color": "rgba(85,85,85,0.75)",
        "angle": 0.1,
        "depth3D": 0,
        "columnWidth": 0.85,
        "startDuration": 0.3,
        "startEffect": "easeOutSine",
        "categoryAxis": {
          "minPeriod": "mm",
          //"gridPosition": "start",
          "startOnAxis": false
        },
        "chartCursor": {
          "enabled": true,
          "oneBalloonOnly": true,
          "balloonPointerOrientation": "vertical",
          "categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
          //"zoomable": false
        },
        "graphs": [
          {
            "balloonText": "<b>[[title]]<br>[[category]]<br>[[value]]</b>",
            "fillAlphas": 0.7,
            "fillColors": "#13c28d",
            "lineAlpha": 0.7,
            "lineColor": "#13c28d",
            "id": "AmGraph-1",
            "title": "Outgoing",
            "type": "column",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]<br>[[category]]<br>[[value]]</b>",
            "fillAlphas": 0.7,
            "fillColors": "#ffba66",
            "lineAlpha": 0.7,
            "lineColor": "#ffba66",
            "id": "AmGraph-2",
            "title": "Incoming",
            "type": "column",
            "valueField": "column-2"
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1",
            "minimum": 0,
            "maximum": 1500,
            "stackType": "3d",
            "gridAlpha": 0,
            "axisThickness": 0,
            "labelsEnabled": false,
            "tickLength": 0
          }
        ],
        "legend": {
          "enabled": true,
          //"reversedOrder": true,
          "position": "absolute",
          "right": 20,
          "width": 98
        },
        "dataProvider": [
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:01"
          },
          {
            "column-1": "1200",
            "column-2": "710",
            "date": "2016-11-30 08:02"
          },
          {
            "column-1": "1056",
            "column-2": "600",
            "date": "2016-11-30 08:03"
          },
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:04"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:05"
          },
          {
            "column-1": "650",
            "column-2": "500",
            "date": "2016-11-30 08:06"
          },
          {
            "column-1": "710",
            "column-2": "1200",
            "date": "2016-11-30 08:07"
          },
          {
            "column-1": "600",
            "column-2": "1056",
            "date": "2016-11-30 08:08"
          },
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:09"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:10"
          },
          {
            "column-1": "650",
            "column-2": "500",
            "date": "2016-11-30 08:11"
          },
          {
            "column-2": "1056",
            "column-1": "600",
            "date": "2016-11-30 08:12"
          },
          {
            "column-1": "710",
            "column-2": "1200",
            "date": "2016-11-30 08:13"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:14"
          },
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:15"
          },
          {
            "column-1": "650",
            "column-2": "500",
            "date": "2016-11-30 08:16"
          },
          {
            "column-1": "710",
            "column-2": "1200",
            "date": "2016-11-30 08:17"
          },
          {
            "column-1": "600",
            "column-2": "1056",
            "date": "2016-11-30 08:18"
          },
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:19"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:20"
          },
          {
            "column-1": "850",
            "column-2": "800",
            "date": "2016-11-30 08:21"
          },
          {
            "column-1": "710",
            "column-2": "1200",
            "date": "2016-11-30 08:22"
          },
          {
            "column-1": "600",
            "column-2": "1056",
            "date": "2016-11-30 08:23"
          },
          {
            "column-1": "650",
            "column-2": "700",
            "date": "2016-11-30 08:24"
          },
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:25"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:26"
          },
          {
            "column-1": "710",
            "column-2": "1200",
            "date": "2016-11-30 08:27"
          },
          {
            "column-1": "600",
            "column-2": "1056",
            "date": "2016-11-30 08:28"
          },
          {
            "column-1": "650",
            "column-2": "900",
            "date": "2016-11-30 08:29"
          },
          {
            "column-1": "650",
            "column-2": "800",
            "date": "2016-11-30 08:30"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:31"
          },
          {
            "column-1": "600",
            "column-2": "1056",
            "date": "2016-11-30 08:32"
          },
          {
            "column-1": "710",
            "column-2": "1200",
            "date": "2016-11-30 08:33"
          },
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:34"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:35"
          },
          {
            "column-1": "650",
            "column-2": "500",
            "date": "2016-11-30 08:36"
          },
          {
            "column-1": "710",
            "column-2": "1200",
            "date": "2016-11-30 08:37"
          },
          {
            "column-1": "600",
            "column-2": "1056",
            "date": "2016-11-30 08:38"
          },
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:39"
          },
          {
            "column-1": "650",
            "column-2": "500",
            "date": "2016-11-30 08:40"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:41"
          },
          {
            "column-1": "710",
            "column-2": "1200",
            "date": "2016-11-30 08:42"
          },
          {
            "column-1": "600",
            "column-2": "1056",
            "date": "2016-11-30 08:43"
          },
          {
            "column-1": "510",
            "column-2": "1050",
            "date": "2016-11-30 08:44"
          },
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:45"
          },
          {
            "column-1": "650",
            "column-2": "500",
            "date": "2016-11-30 08:46"
          },
          {
            "column-1": "710",
            "column-2": "1200",
            "date": "2016-11-30 08:47"
          },
          {
            "column-1": "600",
            "column-2": "1056",
            "date": "2016-11-30 08:48"
          },
          {
            "column-1": "600",
            "column-2": "1356",
            "date": "2016-11-30 08:49"
          }
        ]
      }
    );
  }

  /* ATOM Dashboard - Pie */
  var $chartType_pie02 = $('.amchart_dash_pie02');
  var $chartType_pie02_array = [];
  for (var i = 0; i < $chartType_pie02.length; i++) {
    $id = 'chartTempID_pie02_' + (i + 1);
    $chartType_pie02.eq(i).attr('id', $id);
    $chartType_pie02_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_pie02_array.length; i++) {
    AmCharts.makeChart($chartType_pie02_array[i],
      {
        "type": "pie",
        "theme":"theme_02",
        "balloonText": "<b>[[title]]<br><span style='font-size:14px'>[[value]]</span><br>([[percents]]%)</b>",
        "innerRadius": "88%",
        "labelRadius": 12,
        "minRadius": 65,
        "labelText": "[[title]]",
        "titleField": "category",
        "valueField": "column-1",
        "balloon": {
          "textAlign": "center"
        },
        "dataProvider": [
          {
            "category": "Category Name 001",
            "column-1": 500
          },
          {
            "category": "Category Name 002",
            "column-1": 250
          },
          {
            "category": "Category Name 003",
            "column-1": 200
          },
          {
            "category": "Name 004",
            "column-1": 150
          },
          {
            "category": "Name 005 test test",
            "column-1": 100
          }
        ]
      }
    );
  }

});

