/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.*/

//1. Kapiolani Coffee Shop
/*Despite being top dog, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars
*/

var ratingElement = document.getElementById("rating1").innerHTML = "Rating: 5 Stars";

//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Change the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var priceElement = document.getElementById("price2").innerHTML = "Price: $$$";

var addyElement = document.getElementById("addy2").innerHTML = "Address: 525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless...

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var hourElement = document.createElement("div");
hourElement.id = "hours3";
hourElement.innerHTML = "Hours: 6pm - 12am Sun - Sat";
text3.appendChild(hourElement);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them be the kingpin again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

var price4Elem = document.createElement("div");
price4Elem.id = "price4";
price4Elem.innerHTML = "Price: $$$";
text4.appendChild(price4Elem);

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

var addy4Elem = document.createElement("div");
addy4Elem.id = "addy4";
addy4Elem.innerHTML = "Address: 1620 N. School St, Honolulu, HI 96817";
text4.appendChild(addy4Elem);

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/


var hours4Elem = document.createElement("div");
hours4Elem.id = "hours4";
hours4Elem.innerHTML = "Hours: 9am - 10pm Sun - Sat";
text4.appendChild(hours4Elem);


/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var pElement = document.createElement('p');
pElement.id = "update4";
pElement.innerHTML = "I'd leave a blank space for this oxtail soup!";
comment4.appendChild(pElement);




