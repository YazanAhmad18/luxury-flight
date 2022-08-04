
var age = prompt('what is your age');

function userAge(userAge) {


    while (!(userAge >= 18 && userAge < 100)) {
        
         age = prompt('what is your age ')
        alert("pleas the age you have been chose is not allowed your age should be more than or equal 18 and less 100 ")


    }
    
}
userAge(age);



var yearbirth = function () {

    var birthdate = 2021 - age;
    alert('you are birth year is ' + birthdate);



}
yearbirth();

function nameUser() {
    var name1 = prompt('what is your name');
    alert('welcome to our website' + "  " + name1);

}
nameUser();

var airline ='';
function choseAirline() {

     airline = prompt('pleas tell us what is your favorite airline', 'Emirates-Airlines, Qatar-Airways, Turkey-Airlines');

    while (airline !== 'Emirates-Airlines' && airline !== 'Qatar-Airways' && airline !== 'Turkey-Airlines') {
         airline = prompt('you should only use one of these three airline Emirates-Airlines, Qatar-Airways, Turkey-Airlines')


    }

}
choseAirline();

var img1 = '';

var txt = '';

var airplaneImg ='';
function img() {
     airplaneImg = prompt('how many images do you want to see for this airline')

    
    for (var i = 1; i <= airplaneImg; i++) {

        if (airline === 'Emirates-Airlines') {

            img1 = img1 + '<img src="download.jpg" height="200px" width="200px">';
            txt = '<p>Emirates Airlines is an Emirati national airline, based at Dubai International Airport in the Emirate of Dubai, the second largest city in the United Arab Emirates, its headquarters and a center for its operations, and Emirates Airlines provides services to more than 120 destinations around the world </p>';

        }
        else if (airline === 'Qatar-Airways') {

            img1 = img1 + '<img src="1.jpg" height="200px" width="200px">';
            txt = '<p>  It is the national airline of the State of Qatar, and it is a state-owned company. The company operates a hub, connecting more than 150 international destinations </p>';
        }
        else if (airline === 'Turkey-Airlines') {

            img1 = img1 + '<img src="2.jpg" height="200px" width="200px">';
            txt = '<p>  It is a Turkish national airline, the main site of the company is in Istanbul, the largest of the Turkish cities, and takes Istanbul International Airport as a center for its operations. Turkish Airlines provides services to more than 315 destinations.</p>';

        }
        else {
            document.write('pleas choose only one of these airlines')
        }


    }
}

img();



function price(num1,num2){

    var price1= num1 * num2 * 100;
    return price1



     

}

var enter1= prompt ('enter the number of traveler');
var enter2= prompt ('number of the bags');
var price1 =price(enter1,enter2);
alert('price is ' + price1);






console.log(img1);
document.write(img1)
document.write(txt)
