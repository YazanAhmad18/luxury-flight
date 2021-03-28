
var age = prompt('what is your age');

while (!(age >= 18 &&  age<100) ){
alert("pleas the age you have been chose is not allowed your age should be more than or equal 18 and less 100 ")
var age = prompt('what is your age ')
}

var name1 = prompt('what is your name');
alert('welcome to our website' + "  " + name1);

 
var airline= prompt('pleas tell us what is your favorite airline','Emirates-Airlines, Qatar-Airways, Turkey-Airlines');

while(airline!=='Emirates-Airlines' && airline !=='Qatar-Airways' && airline !== 'Turkey-Airlines' ){

var airline=prompt('you should only use one of these three airline Emirates-Airlines, Qatar-Airways, Turkey-Airlines')
}
 
var airplaneImg = prompt('how many images do you want to see for this airline')

var img= '';

var txt= '';

for(var i =1; i <= airplaneImg ; i++){

    if(airline==='Emirates-Airlines' ){

        img= img + '<img src="download.jpg" height="200px" width="200px">';
         txt= '<p>Emirates Airlines is an Emirati national airline, based at Dubai International Airport in the Emirate of Dubai, the second largest city in the United Arab Emirates, its headquarters and a center for its operations, and Emirates Airlines provides services to more than 120 destinations around the world </p>';
          
        }
        else if(airline==='Qatar-Airways') {
        
            img= img + '<img src="1.jpg" height="200px" width="200px">';
             txt = '<p>  It is the national airline of the State of Qatar, and it is a state-owned company. The company operates a hub, connecting more than 150 international destinations </p>';
            }
       else if (airline==='Turkey-Airlines') {
        
                img= img +'<img src="2.jpg" height="200px" width="200px">';
                txt ='<p>  It is a Turkish national airline, the main site of the company is in Istanbul, the largest of the Turkish cities, and takes Istanbul International Airport as a center for its operations. Turkish Airlines provides services to more than 315 destinations.</p>';
        
            }
        else{
        document.write('pleas choose only one of these airlines') 
    }
    

}

console.log(img);
document.write(img)
document.write(txt)