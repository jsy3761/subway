/* ATOM New Monitoring */

/* -- theme_03 : monitoring --*/
AmCharts.themes.theme_03 = {
  themeName: "theme_01",
  AmChart: {
    color: "#a6a6a6", // x,y축 텍스트컬러
  },
  AmCoordinateChart: {
    colors: ["#13c28d", "#ffba66", "#8a77c9", "#24abe0", "#f67e7d", "#6a849e", "#9bc95b", "#d982bc", "#4487f3", "#adada8"] // graph color
  },
  AmSerialChart: {
    fontFamily: "segoe ui",
    autoMargins: true,
    autoMarginOffset: 11,
    marginTop: 10, 
    marginRight: 11, 
    // marginLeft: 0, 
    // marginBottom: 0, 
    startDuration: 0, //애니메이션 속도
    startEffect: "elastic", //애니메이션 스타일
    sequencedAnimation: false //애니메이션 없음
  },
  AxisBase: { //x축, y축, grid style
    fontSize: 10,
    axisColor: "#d4d4d4", // x,y축 line color
    axisAlpha: 1,
    gridColor: "rgba(172,172,172,0.4)", // line color
    gridAlpha: 1,
    labelOffset: -4,
    tickLength: 0,// label line 길이
    titleBold: true,
    titleColor: "#888888",
    titleFontSize: 11,
    markPeriodChange: false
  },
  CategoryAxis: { //x축
    autoWrap: true,//텍스트 행처리 auto
    startOnAxis: false,
    equalSpacing: true, // grid start 지점 지정
    parseDates: true, // x축 date-related에 의한 정의 줄임
    boldPeriodBeginning: false,
    minHorizontalGap: 50, // minimum cell width
    gridAlpha: 0
    //tickPosition: "start" //colum 차트 tick 지정
  },
  ValueAxis: { //y축
    axisAlpha: 0,
    // labelOffset: 0,
    dashLength: 3, // line dash
    minVerticalGap: 30
  },
  ChartScrollbar: {
    dragIcon: "dragIconRectBig", //드래그 아이콘 모양 변경 "dragIconRoundBig"//드래그 아이콘 모양 변경
    dragIconHeight: 26,
    dragIconWidth: 26,
    scrollbarHeight: 9,
    selectedBackgroundColor: "#f7f7f7",
    backgroundColor: "#ededed"
  },
  ChartCursor: {
    cursorColor: "rgba(55,52,77,0.6)",//마우스 오버시 세로 라인&selection 컬러
    color: "#ffffff",
    cursorAlpha: 1, //세로 라인
    selectionAlpha: 0.15,
    valueLineEnabled: true, //가로 라인
    //valueLineBalloonEnabled: true, //Y축 balloon
    categoryBalloonAlpha: 1,
    categoryBalloonColor: "#292c33"
  },
  AmBalloon: {
    color: "#111111",
    fillAlpha: 0.4,
    fillColor: "#ffffff",
    borderThickness: 1.7,
    fontSize: 11,
    pointerWidth: 5,
    shadowAlpha: 0,
    horizontalPadding: 6,
    verticalPadding: 4,
    textAlign: "left" 
  },
  AmLegend: {
    align: "left",
    position: "right",
    autoMargins: false, 
    marginRight: 50,
    // marginTop: -15,
    marginBottom: 8,
    color: "#888888",
    fontSize: 11,
    markerSize: 10,
    markerType: "square",
    markerLabelGap: 9,
    labelWidth: 200,
    spacing: 35,
    equalWidths: false,
    verticalGap: 8,
    valueAlign: "left",
    valueText: ""
  },
  AmGraph: { //"graphs"속성 설정
    lineThickness: 1.5,  // line graph 두깨
    lineAlpha: 1,  // line graph 투명도
    // bullet: "square",
    // bulletSize: 5,
    // bulletOffset: 2,
    // columnWidth: 0.5 //%
  },
  AmPieChart: {
    fontFamily:"segoe ui",
    colors: ["#13c28d", "#f67e7d", "#24abe0", "#ffba66", "#8a77c9", "#9bc95b", "#6a849e", "#d982bc", "#4487f3", "#adada8"],
    marginBottom: 0,
    innerRadius: "85%",
    startDuration: 0,
    labelRadius: 18,
    minRadius: 85,
    labelTickColor: "#555555",
    color: "#777777",
    fontSize: 11,
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
  AmRectangularChart : {
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

  /* (**sample) monitoring - Line */
  var $chartType_m_line01 = $('.amchart_m_line01');
  var $chartType_m_line01_array = [];
  for (var i = 0; i < $chartType_m_line01.length; i++) {
    $id = 'chartTempID_m_line01_' + (i + 1);
    $chartType_m_line01.eq(i).attr('id', $id);
    $chartType_m_line01_array[i] = $id;
  }
  // run chart
  for (var i = 0; i < $chartType_m_line01_array.length; i++) {
    AmCharts.makeChart($chartType_m_line01_array[i],
      {
        "type": "serial",
        "theme":"theme_03",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "categoryAxis": {
          "minPeriod": "mm"
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
            "title": "Legend Name_01",
            "valueField": "column-1"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-2",
            "title": "Legend 02",
            "valueField": "column-2"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-3",
            "title": "Legend Name_03",
            "valueField": "column-3"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-4",
            "title": "Legend Name_04",
            "valueField": "column-4"
          },
          {
            "balloonText": "<b>[[title]]: [[value]]</b>",
            "id": "AmGraph-5",
            "title": "Legend Name_05",
            "valueField": "column-5"
          }
        ],
        "valueAxes": [
          {
            "id": "ValueAxis-1"
          }
        ],
        // "allLabels": [
        //   { 
        //     "id": "Label-x",// x축
        //     "text": "bps", // 단위 같은 것을 기입
        //     "x": 6,
        //     "y": 15
        //   }
        // ],
        "legend": {
          "enabled": false,
          "equalWidths": true,
          "spacing": 20,
          "align": "left"
        },
        "dataProvider": [
          {
            "column-1": 700,
            "column-2": 500,
            "column-3": 350,
            "column-4": 250,
            "column-5": 200,
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
            "column-1": 200,
            "column-2": 100,
            "column-3": 350,
            "column-4": 250,
            "column-5": 200,
            "date": "2016-11-30 07:54"
          },
          {
            "column-1": 300,
            "column-2": 400,
            "column-3": 450,
            "column-4": 350,
            "column-5": 200,
            "date": "2016-11-30 07:55"
          },
          {
            "column-1": 600,
            "column-2": 300,
            "column-3": 350,
            "column-4": 250,
            "column-5": 200,
            "date": "2016-11-30 07:56"
          },
          {
            "column-1": 520,
            "column-2": 700,
            "column-3": 450,
            "column-4": 350,
            "column-5": 500,
            "date": "2016-11-30 07:57"
          },
          {
            "column-1": 600,
            "column-2": 300,
            "column-3": 350,
            "column-4": 250,
            "column-5": 200,
            "date": "2016-11-30 07:58"
          },
          {
            "column-1": 400,
            "column-2": 500,
            "column-3": 450,
            "column-4": 0,            
            "column-5": 400,
            "date": "2016-11-30 07:59"
          },
          {
            "column-1": 600,
            "column-2": 300,
            "column-3": 350,
            "column-4": 250,
            "column-5": 200,
            "date": "2016-11-30 08:00"
          },
          {
            "column-1": 300,
            "column-2": 500,
            "column-3": 450,
            "column-4": 350,
            "column-5": 200,
            "date": "2016-11-30 08:01"
          }
        ]
      }
    );
  }

});

