function gsAlert(){

    alert("You Clicked me. alert from javascript")
}

function gspTable1(){

    document.getElementById('pTable1').innerHTML = Date()

}

function gsTable1(){

    var mainObj = [
        {
            name: "Kapil",
            age:  21,
            status: "Active"
        },
        {
            name: "John",
            age:  28,
            status: "Inactive"
        },
        {
            name: "Deos",
            age:  18,
            status: "Active"
        }
    ];
    var k = '<tbody>'
    for(i = 0;i < mainObj.length; i++){
        k+= '<tr>';
        k+= '<td>' + mainObj[i].name + '</td>';
        k+= '<td>' + mainObj[i].age + '</td>';
        k+= '<td>' + mainObj[i].status + '</td>';
        k+= '</tr>';
    }
    k+='</tbody>';
    document.getElementById('tbody').innerHTML = k;
    document.getElementById('tbody2').innerHTML = k;


}


function gsFormAction(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    alert("hello " + fname+ " "+lname )
}

function gsFormAction3(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;

    alert("gsFormAction3:hello " + fname+ " "+lname )
}

const form = document.querySelector("#signup2");
form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let fname = hasValue(form.elements["fname2"], NAME_REQUIRED);
	let lname = validateEmail(form.elements["lname2"], EMAIL_REQUIRED, EMAIL_INVALID);
	// if valid, submit the form.
	if (fname && lname) {
		alert("Demo only. No form was posted.");
	}
});


function gsPlot1(){
    const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const layout = {title:"World Wide Wine Production"};

const data = [{labels:xArray, values:yArray, hole:.4, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);
}

function gsPlot2(){
    const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yValues = [55, 49, 44, 24, 15];
    const barColors = ["red", "green","blue","orange","brown"];
    
    new Chart("myChart2", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        title: {
          display: true,
          text: "World Wine Production 2018"
        }
      }
    });
}

function gsPlot3(){
    google.charts.load('current',{packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
    
    // Set Data
    const data = google.visualization.arrayToDataTable([
      ['Price', 'Size'],
      [50,7],[60,8],[70,8],[80,9],[90,9],
      [100,9],[110,10],[120,11],
      [130,14],[140,14],[150,15]
    ]);
    
    // Set Options
    const options = {
      title: 'House Prices vs. Size',
      hAxis: {title: 'Square Meters'},
      vAxis: {title: 'Price in Millions'},
      legend: 'none'
    };
    
    // Draw
    const chart = new google.visualization.LineChart(document.getElementById('myChart3'));
    chart.draw(data, options);
    
    }
}


function gsPlot4(){

    

}