/* -- theme_01 --*/
AmCharts.themes.theme_01 = {
	themeName: "theme_01",
	AmChart: {
		color: "#555555", // x,y축 텍스트컬러
	},
	AmCoordinateChart: {
		colors: ["#13c28d", "#ffba66", "#8a77c9", "#24abe0", "#f67e7d", "#6a849e", "#9bc95b", "#d982bc", "#4487f3", "#adada8"] // graph color
	},
	AmSerialChart: {
		fontFamily:"segoe ui",
		autoMargins:true,
		autoMarginOffset:20,
		// marginTop: 0, 
		marginRight: 35, 
		// marginLeft: 0, 
		// marginBottom: 0, 
		startDuration: 0, //애니메이션 속도
		startEffect: "elastic", //애니메이션 스타일
		sequencedAnimation: false //애니메이션 없음
	},
	AxisBase: { //x축, y축, grid style
		fontSize: 11,
		axisColor: "#3e3e3e", // x,y축 line color
		axisAlpha: 1,
		gridColor: "#d9d9d9", // line color
		gridAlpha: 1,
		labelOffset: -2,
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
		labelOffset: 0,
		dashLength: 3 // line dash
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
		bullet: "square",
		bulletSize: 5,
		//bulletOffset: 2,
		columnWidth: 0.4
	},
	AmPieChart: {
		fontFamily:"segoe ui",
		colors: ["#13c28d", "#f67e7d", "#24abe0", "#ffba66", "#8a77c9", "#9bc95b", "#6a849e", "#d982bc", "#4487f3", "#adada8"],
		radius: "26%",
		startDuration: 0,
		labelRadius: 18,
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


/* Create chart with class name */
$(function() {

	/* Line - statistics(Legend:right) */
	var $chartType_line01 = $('.amchart_line01');
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
				"theme":"theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN",
				"marginRight": 50,
				"categoryAxis": {
					"minPeriod": "mm"
				},
				"chartCursor": {
					"enabled": true,
					"oneBalloonOnly": true,
					"balloonPointerOrientation": "vertical",
					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
				},
				"chartScrollbar": {
					"enabled": true
				},
				"graphs": [
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-1",
						"bulletSize": 7,
						"title": "1 Title Name",
						"valueField": "column-1"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-2",
						"bulletSize": 7,
						"title": "2 Title Name",
						"valueField": "column-2"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-3",
						"bulletSize": 7,
						"title": "3 Title Name test Title Name test Title Name test Title Name test",
						"valueField": "column-3"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-4",
						"bulletSize": 7,
						"title": "4 Title Name",
						"valueField": "column-4"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-5",
						"bulletSize": 7,
						"title": "5 Title Name",
						"valueField": "column-5"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-6",
						"bulletSize": 7,
						"title": "6 Title Name",
						"valueField": "column-6"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-7",
						"bulletSize": 7,
						"title": "7 Title Name",
						"valueField": "column-7"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-8",
						"bulletSize": 7,
						"title": "8 Title Name",
						"valueField": "column-8"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-9",
						"bulletSize": 7,
						"title": "9 Title Name",
						"valueField": "column-9"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-10",
						"bulletSize": 7,
						"title": "10 Title Name test",
						"valueField": "column-10"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1"
					}
				],
				"legend": {
					"enabled": true
				},
				"dataProvider": [
					{
						"column-1": 80,
						"column-2": 50,
						"column-3": 70,
						"column-4": 60,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:40:00"
					},
					{
						"column-1": 60,
						"column-2": 70,
						"column-3": 50,
						"column-4": 40,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:45:00"
					},
					{
						"column-1": 20,
						"column-2": 30,
						"column-3": 40,
						"column-4": 30,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:50:00"
					},
					{
						"column-1": 10,
						"column-2": 30,
						"column-3": 50,
						"column-4": 60,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:55:00"
					},
					{
						"column-1": 20,
						"column-2": 10,
						"column-3": 70,
						"column-4": 50,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:00:00"
					},
					{
						"column-1": 30,
						"column-2": 20,
						"column-3": 50,
						"column-4": 40,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:05:00"
					},
					{
						"column-1": 60,
						"column-2": 80,
						"column-3": 40,
						"column-4": 30,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:10:00"
					}
				]
			}
		);
	}

	/* Line - realtime(y축 name) */
	var $chartType_line02 = $('.amchart_line02');
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
				"theme":"theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN",
				"marginRight": 50,
				"categoryAxis": {
					"minPeriod": "mm"
				},
				"chartCursor": {
					"enabled": true,
					"oneBalloonOnly": true,
					"balloonPointerOrientation": "vertical",
					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
				},
				"chartScrollbar": {
					"enabled": true
				},
				"graphs": [
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-1",
						"bulletSize": 7,
						"title": "1 Title Name",
						"valueField": "column-1"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1",
						"title": "Axis title"
					}
				],
				"legend": {
					"enabled": true
				},
				"dataProvider": [
					{
						"column-1": 80,
						"date": "2019-11-30 07:40:00"
					},
					{
						"column-1": 60,
						"date": "2019-11-30 07:45:00"
					},
					{
						"column-1": 20,
						"date": "2019-11-30 07:50:00"
					},
					{
						"column-1": 10,
						"date": "2019-11-30 07:55:00"
					},
					{
						"column-1": 20,
						"date": "2019-11-30 08:00:00"
					},
					{
						"column-1": 30,
						"date": "2019-11-30 08:05:00"
					},
					{
						"column-1": 60,
						"date": "2019-11-30 08:10:00"
					}
				]
			}
		);
	}

	/* Line - Comparison 1 (Legend:Right)*/
	var $chartType_line03 = $('.amchart_line03');
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
				"theme":"theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN",
				"marginRight": 50,
				"categoryAxis": {
					"minPeriod": "mm"
				},
				"chartCursor": {
					"enabled": true,
					"oneBalloonOnly": true,
					"balloonPointerOrientation": "vertical",
					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
				},
				"chartScrollbar": {
					"enabled": true
				},
				"graphs": [
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-1",
						"bulletSize": 7,
						"title": "1 Title Name",
						"valueField": "column-1"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-2",
						"bulletSize": 7,
						"title": "2 Title Name",
						"valueField": "column-2"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-3",
						"bulletSize": 7,
						"title": "3 Title Name test Title Name test Title Name test Title Name test",
						"valueField": "column-3"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-4",
						"bulletSize": 7,
						"title": "4 Title Name",
						"valueField": "column-4"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-5",
						"bulletSize": 7,
						"title": "5 Title Name",
						"valueField": "column-5"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-6",
						"bulletSize": 7,
						"title": "6 Title Name",
						"valueField": "column-6"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-7",
						"bulletSize": 7,
						"title": "7 Title Name",
						"valueField": "column-7"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-8",
						"bulletSize": 7,
						"title": "8 Title Name",
						"valueField": "column-8"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-9",
						"bulletSize": 7,
						"title": "9 Title Name",
						"valueField": "column-9"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-10",
						"bulletSize": 7,
						"title": "10 Title Name test",
						"valueField": "column-10"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1"
					}
				],
				"legend": {
					"enabled": true
				},
				"dataProvider": [
					{
						"column-1": 80,
						"column-2": 50,
						"column-3": 70,
						"column-4": 60,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:40:00"
					},
					{
						"column-1": 60,
						"column-2": 70,
						"column-3": 50,
						"column-4": 40,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:45:00"
					},
					{
						"column-1": 20,
						"column-2": 30,
						"column-3": 40,
						"column-4": 30,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:50:00"
					},
					{
						"column-1": 10,
						"column-2": 30,
						"column-3": 50,
						"column-4": 60,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:55:00"
					},
					{
						"column-1": 20,
						"column-2": 10,
						"column-3": 70,
						"column-4": 50,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:00:00"
					},
					{
						"column-1": 30,
						"column-2": 20,
						"column-3": 50,
						"column-4": 40,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:05:00"
					},
					{
						"column-1": 60,
						"column-2": 80,
						"column-3": 40,
						"column-4": 30,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:10:00"
					}
				]
			}
		);
	}

	/* Line - Comparison 2 (Legend:Bottom)*/
	var $chartType_line04 = $('.amchart_line04');
	var $chartType_line04_array = [];
	for (var i = 0; i < $chartType_line04.length; i++) {
		$id = 'chartTempID_line04_' + (i + 1);
		$chartType_line04.eq(i).attr('id', $id);
		$chartType_line04_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_line04_array.length; i++) {
		AmCharts.makeChart($chartType_line04_array[i],
			{
				"type": "serial",
				"theme":"theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN",
				"marginRight": 50,
				"categoryAxis": {
					"minPeriod": "mm"
				},
				"chartCursor": {
					"enabled": true,
					"oneBalloonOnly": true,
					"balloonPointerOrientation": "vertical",
					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
				},
				"chartScrollbar": {
					"enabled": true
				},
				"graphs": [
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-1",
						"bulletSize": 7,
						"title": "1 Title Name",
						"valueField": "column-1"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-2",
						"bulletSize": 7,
						"title": "2 Title Name",
						"valueField": "column-2"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-3",
						"bulletSize": 7,
						"title": "3 Title Name test test",
						"valueField": "column-3"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-4",
						"bulletSize": 7,
						"title": "4 Title Name",
						"valueField": "column-4"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-5",
						"bulletSize": 7,
						"title": "5 Title Name",
						"valueField": "column-5"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-6",
						"bulletSize": 7,
						"title": "6 Title Name",
						"valueField": "column-6"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-7",
						"bulletSize": 7,
						"title": "7 Title Name text",
						"valueField": "column-7"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-8",
						"bulletSize": 7,
						"title": "8 Title Name Title Name test Title Name test Title Name test",
						"valueField": "column-8"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-9",
						"bulletSize": 7,
						"title": "9 Title Name",
						"valueField": "column-9"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-10",
						"bulletSize": 7,
						"title": "10 Title Name test",
						"valueField": "column-10"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1"
					}
				],
				"legend": {
					"enabled": true,
					"align": "center",
					"position": "bottom",
					"marginTop": -6,
					"marginBottom": 15,
					"marginRight": 40,
					// "equalWidths": true,
					"verticalGap": 5
				},
				"dataProvider": [
					{
						"column-1": 80,
						"column-2": 50,
						"column-3": 70,
						"column-4": 60,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:40:00"
					},
					{
						"column-1": 60,
						"column-2": 70,
						"column-3": 50,
						"column-4": 40,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:45:00"
					},
					{
						"column-1": 20,
						"column-2": 30,
						"column-3": 40,
						"column-4": 30,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:50:00"
					},
					{
						"column-1": 10,
						"column-2": 30,
						"column-3": 50,
						"column-4": 60,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:55:00"
					},
					{
						"column-1": 20,
						"column-2": 10,
						"column-3": 70,
						"column-4": 50,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:00:00"
					},
					{
						"column-1": 30,
						"column-2": 20,
						"column-3": 50,
						"column-4": 40,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:05:00"
					},
					{
						"column-1": 60,
						"column-2": 80,
						"column-3": 40,
						"column-4": 30,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:10:00"
					}
				]
			}
		);
	}

	/* Line - Comparison 3 (2value)*/
	var $chartType_line05 = $('.amchart_line05');
	var $chartType_line05_array = [];
	for (var i = 0; i < $chartType_line05.length; i++) {
		$id = 'chartTempID_line05_' + (i + 1);
		$chartType_line05.eq(i).attr('id', $id);
		$chartType_line05_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_line05_array.length; i++) {
		AmCharts.makeChart($chartType_line05_array[i],
			{
				"type": "serial",
				"theme":"theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN",
				"marginRight": 50,
				"categoryAxis": {
					"minPeriod": "mm"
				},
				"chartCursor": {
					"enabled": true,
					"oneBalloonOnly": true,
					"balloonPointerOrientation": "vertical",
					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
				},
				"chartScrollbar": {
					"enabled": true
				},
				"graphs": [
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-1",
						"bullet": "circle",
						"bulletSize": 7,
						"title": "1 Title Name",
						"valueField": "column-1"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-2",
						"bullet": "circle",
						"bulletSize": 7,
						"title": "2 Title Name",
						"valueField": "column-2"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-3",
						"bullet": "circle",
						"bulletSize": 7,
						"title": "3 Title Name test Title Name test Title Name test Title Name test",
						"valueField": "column-3"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-4",
						"bullet": "circle",
						"bulletSize": 7,
						"title": "4 Title Name",
						"valueField": "column-4"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-5",
						"bullet": "circle",
						"bulletSize": 7,
						"title": "5 Title Name",
						"valueField": "column-5"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-6",
						"bullet": "triangleRight",
						"bulletSize": 8,
						"title": "6 Title Name",
						"valueAxis": "ValueAxis-2",
						"dashLength": 3,
						"valueField": "column-6"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-7",
						"bullet": "triangleRight",
						"bulletSize": 8,
						"title": "7 Title Name",
						"valueAxis": "ValueAxis-2",
						"dashLength": 3,
						"valueField": "column-7"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-8",
						"bullet": "triangleRight",
						"bulletSize": 8,
						"title": "8 Title Name",
						"valueAxis": "ValueAxis-2",
						"dashLength": 3,
						"valueField": "column-8"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-9",
						"bullet": "triangleRight",
						"bulletSize": 8,
						"title": "9 Title Name",
						"valueAxis": "ValueAxis-2",
						"dashLength": 3,
						"valueField": "column-9"
					},
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-10",
						"bullet": "triangleRight",
						"bulletSize": 8,
						"title": "10 Title Name test",
						"valueAxis": "ValueAxis-2",
						"dashLength": 3,
						"valueField": "column-10"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1",
						"title": "Axis text"
					},
					{
						"id": "ValueAxis-2",
						"position": "right",
						"gridAlpha": 0,
						"labelOffset": 3,
						"title": "Axis text"
					}
				],
				"legend": {
					"enabled": true,
					"markerSize": 14,
					"markerLabelGap": 11,
					"useGraphSettings": true
				},
				"dataProvider": [
					{
						"column-1": 80,
						"column-2": 50,
						"column-3": 70,
						"column-4": 60,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:40:00"
					},
					{
						"column-1": 60,
						"column-2": 70,
						"column-3": 50,
						"column-4": 40,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:45:00"
					},
					{
						"column-1": 20,
						"column-2": 30,
						"column-3": 40,
						"column-4": 30,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:50:00"
					},
					{
						"column-1": 10,
						"column-2": 30,
						"column-3": 50,
						"column-4": 60,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 07:55:00"
					},
					{
						"column-1": 20,
						"column-2": 10,
						"column-3": 70,
						"column-4": 50,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:00:00"
					},
					{
						"column-1": 30,
						"column-2": 20,
						"column-3": 50,
						"column-4": 40,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:05:00"
					},
					{
						"column-1": 60,
						"column-2": 80,
						"column-3": 40,
						"column-4": 30,
						"column-5": 5,
						"column-6": 4,
						"column-7": 3.2,
						"column-8": 2,
						"column-9": 1,
						"column-10": 3,
						"date": "2019-11-30 08:10:00"
					}
				]
			}
		);
	}

	/* Line - overload control(min/max) */
	var $chartType_line06 = $('.amchart_line06');
	var $chartType_line06_array = [];
	for (var i = 0; i < $chartType_line06.length; i++) {
		$id = 'chartTempID_line06_' + (i + 1);
		$chartType_line06.eq(i).attr('id', $id);
		$chartType_line06_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_line06_array.length; i++) {
		AmCharts.makeChart($chartType_line06_array[i],
			{
				"type": "serial",
				"theme":"theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN",
				"marginRight": 35,
				"categoryAxis": {
					"minPeriod": "5mm",
					"startOnAxis": true,
					"showFirstLabel": false
				},
				"chartCursor": {
					"enabled": true,
					"oneBalloonOnly": true,
					"balloonPointerOrientation": "vertical",
					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
				},
				"chartScrollbar": {
					"enabled": true
				},
				"graphs": [
					{
						"balloonText": "<b>[[title]]: [[value]]</b>",
						"id": "AmGraph-1",
						"bullet": "none", 
            // "fillColors": "#14b283",
            "fillAlphas": 0.12,
            // "lineColor": "#14b283",
            // "lineThickness": 1.5,
            "fillColorsField": "color",
            "lineColorField": "color",
						"title": "1 Title Name",
						"valueField": "column-1"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1"
					}
				],
				"guides": [{
					"id": "Guide-1",
					"above": true,
					"dashLength": 2,
					"fillAlpha": 0.12,
					"fillColor": "#ffba66",
					"lineAlpha": 0.5,
					"lineColor": "#f04440",
					"toValue": 90,
					"value": 70
				}],
        "allLabels": [
          { 
            "id": "Label-x",// x축
            "text": "%", // 단위 같은 것을 기입
            "x": 28,
            "y": 8
          }
        ],
				"dataProvider": [
					{
						"column-1": 50,
						"date": "2019-11-30 07:40:00"
					},
					{
						"column-1": 60,
						"date": "2019-11-30 07:45:00"
					},
					{
						"column-1": 20,
						"date": "2019-11-30 07:50:00"
					},
					{
						"column-1": 10,
						"date": "2019-11-30 07:55:00"
					},
					{
						"column-1": 20,
						"date": "2019-11-30 08:00:00"
					},
					{
						"column-1": 30,
						"date": "2019-11-30 08:05:00"
					},
					{
						"column-1": 60,
						"date": "2019-11-30 08:10:00"
					},
					{
						"column-1": 75,
						"color": "#f04440",
						"date": "2019-11-30 08:15:00"
					},
					{
						"column-1": 85,
						"date": "2019-11-30 08:20:00"
					},
					{
						"column-1": 71,
						"date": "2019-11-30 08:25:00"
					},
					{
						"column-1": 50,
						"date": "2019-11-30 08:30:00"
					},
					{
						"column-1": 60,
						"date": "2019-11-30 08:35:00"
					}
				]
			}
		);
	}


	/* bar (no Legend) */
	var $chartType_bar01 = $('.amchart_bar01');
	var $chartType_bar01_array = [];
	for (var i = 0; i < $chartType_bar01.length; i++) {
		$id = 'chartTempID_bar01_' + (i + 1);
		$chartType_bar01.eq(i).attr('id', $id);
		$chartType_bar01_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_bar01_array.length; i++) {
		AmCharts.makeChart($chartType_bar01_array[i],
			{
				"type": "serial",
				"theme":"theme_01",
				"categoryField": "category",
				"categoryAxis": {
					"parseDates": false
				},
				"graphs": [
					{
						"balloonText": "",
						"fillAlphas": 1,
						"lineThickness": 1, 
						"bullet": "",
						"colorField": "color",
						"lineColorField": "color",
						"id": "AmGraph-1",
						"type": "column",
						"valueField": "column-1"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1",
						"totalText": "[[total]]",
						"stackType": "regular"
					}
				],
				"dataProvider": [
					{
						"color": "#13c28d",
						"column-1": 75,
						"category": "App ID #01"
					}, {
						"color": "#f67e7d",
						"column-1": 35,
						"category": "App ID #02 - test text App ID #02"
					}, {
						"color": "#24abe0",
						"column-1": 15,
						"category": "App ID #02 - test text App ID #02"
					}, {
						"color": "#ffba66",
						"column-1": 6,
						"category": "App ID #04"
					}, {
						"color": "#8a77c9",
						"column-1": 10,
						"category": "App ID #05"
					}, {
						"color": "#9bc95b",
						"column-1": 20,
						"category": "App ID #06"
					}, {
						"color": "#6a849e",
						"column-1": 15,
						"category": "App ID #07"
					}, {
						"color": "#d982bc",
						"column-1": 10,
						"category": "App ID #08"
					}, {
						"color": "#4487f3",
						"column-1": 5,
						"category": "App ID #09"
					}, {
						"color": "#adada8",
						"column-1": 2,
						"category": "App ID #10"
					}
				]
			}
		);
	}

	/* bar (no Legend) */
	var $chartType_bar02 = $('.amchart_bar02');
	var $chartType_bar02_array = [];
	for (var i = 0; i < $chartType_bar02.length; i++) {
		$id = 'chartTempID_bar02_' + (i + 1);
		$chartType_bar02.eq(i).attr('id', $id);
		$chartType_bar02_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_bar02_array.length; i++) {
		AmCharts.makeChart($chartType_bar02_array[i],
			{
				"type": "serial",
				"theme":"theme_01",
				"categoryField": "category",
				"categoryAxis": {
					"parseDates": false
				},
				"graphs": [
					{
						"balloonText": "",
						"fillAlphas": 1,
						"lineThickness": 1, 
						"bullet": "",
						"id": "AmGraph-1",
						"type": "column",
						"valueField": "column-1"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1",
						"totalText": "[[total]]",
						"stackType": "regular"
					}
				],
				"dataProvider": [
					{
						"column-1": 75,
						"category": "Category #01"
					}, {
						"column-1": 35,
						"category": "Category #02"
					}, {
						"column-1": 15,
						"category": "Category #03"
					}, {
						"column-1": 36,
						"category": "Category #04"
					}, {
						"column-1": 10,
						"category": "Category #05"
					}, {
						"column-1": 20,
						"category": "Category #06"
					}, {
						"column-1": 15,
						"category": "Category #07"
					}, {
						"column-1": 10,
						"category": "Category #08"
					}, {
						"column-1": 25,
						"category": "Category #09"
					}, {
						"column-1": 62,
						"category": "Category #10"
					// }, {
					// 	"column-1": 70,
					// 	"category": "Category #11"
					// }, {
					// 	"column-1": 35,
					// 	"category": "Category #12"
					// }, {
					// 	"column-1": 45,
					// 	"category": "Category #13"
					// }, {
					// 	"column-1": 56,
					// 	"category": "Category #14"
					// }, {
					// 	"column-1": 30,
					// 	"category": "Category #15"
					// }, {
					// 	"column-1": 20,
					// 	"category": "Category #16"
					// }, {
					// 	"column-1": 52,
					// 	"category": "Category #17"
					// }, {
					// 	"column-1": 10,
					// 	"category": "Category #18"
					// }, {
					// 	"column-1": 25,
					// 	"category": "Category #19"
					// }, {
					// 	"column-1": 15,
					// 	"category": "Category #20"
					}
				]
			}
		);
	}


	/* vDPI Dashboard - Pie */
	var $chartType_pie01 = $('.amchart_pie01');
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
				"theme":"theme_01",
				"balloonText": "[[title]]<br><b>[[value]]</b><br>([[percents]]%)",
				"labelText": "[[title]]<br>[[percents]]%",
				"titleField": "category",
				"valueField": "column-1",
				"balloon": {
					"textAlign": "center"
				},
				"dataProvider": [
					{
						"category": "App ID #01",
						"column-1": 75,
					}, {
						"category": "App ID #02",
						"column-1": 35,
					}, {
						"category": "App ID #03",
						"column-1": 15,
					}, {
						"category": "App ID #04",
						"column-1": 6,
					}, {
						"category": "App ID #05",
						"column-1": 10,
					}, {
						"category": "App ID #06",
						"column-1": 20,
					}, {
						"category": "App ID #07",
						"column-1": 15,
					}, {
						"category": "App ID #08",
						"column-1": 10,
					}, {
						"category": "App ID #09",
						"column-1": 5,
					}, {
						"category": "App ID #10",
						"column-1": 2,
					}
				]
			}
		);
	}


});
