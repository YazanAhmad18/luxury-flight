var name1 = prompt('what is your name');
alert('welcome to our website'  +  name1);

var airline= prompt('pleas tell us what is your favorite airline','Emirates-Airlines, Qatar-Airways, Turkey-Airlines');

if(airline==='Emirates-Airlines'){

document.write('<img src="js/download.jpg/" height="200px" width="200px">');
 document.write('<p>  Emirates Airlines is an Emirati national airline, based at Dubai International Airport in the Emirate of Dubai, the second largest city in the United Arab Emirates, its headquarters and a center for its operations, and Emirates Airlines provides services to more than 120 destinations around the world </p>')


}
else if(airline==='Qatar-Airways') {

    document.write('<img src="js/1.jpg/" height="200px" width="200px">');
     document.write('<p>  It is the national airline of the State of Qatar, and it is a state-owned company. The company operates a hub, connecting more than 150 international destinations </p>');

    
    
    
    }
    else if (airline==='Turkey-Airlines') {

        document.write('<img src="/home/yazan/ASAC/luxury-flight/js/2.jpg" height="200px" width="200px">');
         document.write('<p>  It is a Turkish national airline, the main site of the company is in Istanbul, the largest of the Turkish cities, and takes Istanbul International Airport as a center for its operations. Turkish Airlines provides services to more than 315 destinations.</p>');
    

    }
    else{
document.write('pleas choose only one of these airlines')


    }