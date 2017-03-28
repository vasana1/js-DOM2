/*You will need to refer to the index.html page to complete the exercises below. Using DOM, please make the necessary changes to the website.

Also don't forget to run your live-server for this assignment.*/

//1. Kapiolani Coffee Shop
/*Despite being the cat's meow, Kapiolani Coffee Shop's current rating is n/a. Let's keep the hungry fans happy by changing the current ranking to:

Rating: 5 Stars*/

var changeRating=document.getElementById("rating1");
changeRating.innerHTML="Rating: 5 Stars";


//2. Sunrise Restaurant
/*No rise and shine for the Sunrise Restaurant, as their price and address needs some serious updating. Bring in some sunshine by changing the price and address to the following:

Price: $$$
Adress: 525 Kapahulu Ave, Honolulu, HI 96815*/

var changePrice=document.getElementById("price2");
changePrice.innerHTML="$$$";
var changeAddress=document.getElementById("addy2");
changeAddress.innerHTML="525 Kapahulu Ave, Honolulu, HI 96815";

//3. Ramen Nakamura
/*Literally, where did the time go? Ramen Nakamura is missing the hours section! This mistake is timeless.

You will need to create a new div element with an id of "hours3". Inside this div element, give it the following info:

Hours: 6pm - 12am Sun - Sat

Append this div element to the div id "text3"*/

var hours=document.createElement("div");
hours.id+"hours3";
hours.innerHTML="Hours: 6pm - 12am Sun - Sat";
text3.appendChild(hours);


//4. Kam Bowl
/*Kam Bowl got no spare time to update their info and business is suffering! Help them regain their kingpin status again.

Create a new div element with an id of "price4". Inside this div element, give it the following info:

Price: $$$

Append this element to the div with the id of 
"text4"*/

/*Create a new div element with an id of "addy4". Inside this div element, give it the following info:

Address: 1620 N. School St, Honolulu, HI 96817

Append this element to the div with the id of 
"text4"*/

/*Create a new div element with an id of "hours4". Inside this div element, give it the following info:

Hours: 9am - 10pm Sun - Sat

Append this element to the div with the id of 
"text4"
*/

/*Create a paragraph element with an id of "update4". Inside this paragraph element, give it the following info:

I'd leave a blank space for this oxtail soup!

Append this element to the div id of "comment4"*/

var kamPrice=document.createElement("div");
kamPrice.id="price4";
kamPrice.innerHTML="Price: $$$";
text4.appendChild(kamPrice);

var kamAddress=document.createElement("div");
kamAddress.id="addy4";
kamAddress.innerHTML="Address: 1620 N. School St, Honolulu, HI 96817";
text4.appendChild(kamAddress);

var kamHours=document.createElement("div");
kamHours.id="hours4";
kamHours.innerHTML="Hours: 9am - 10pm Sun - Sat";
text4.appendChild(kamHours);

var kamReview=document.createElement("p");
kamReview.p="update4";
kamReview.innerHTML="I'd leave a blank space for this oxtail soup!";
comment4.appendChild(kamReview);

//5. The Death Star Cafe
/*The empire strikes back with a new and improved oxtail soup offering. Help the dark side win back customers by executing the following commands:*/

/*Create the div elements with the following id's:

"name5"
"rating5"
"price5"
"addy5"
"hours5"

Add the following info for each specific div id:

name5: 5. The Death Star Cafe
rating5: Rating: 2 Stars
price5: Price: $$
addy5: Address: A galaxy far, far away.
hours5: Hours: We never close.

Append the div elements to the div id "text5"
*/

var deathName=document.createElement("div");
deathName.id="name5"; 
deathName.innerHTML="5. The Death Star Cafe";
text5.appendChild(deathName);

var deathRating=document.createElement("div");
deathRating.id="rating5"; 
deathRating.innerHTML="Rating: 2 Stars";
text5.appendChild(deathRating);

var deathPrice=document.createElement("div");
deathPrice.id="price5"; 
deathPrice.innerHTML="Price: $$";
text5.appendChild(deathPrice);

var deathAdd=document.createElement("div");
deathAdd.id="addy5"; 
deathPrice.innerHTML="Address: A galaxy far, far away.";
text5.appendChild(deathAdd);

var deathHours=document.createElement("div");
deathHours.id="hours5"; 
deathHours.innerHTML="Hours: We never close.";
text5.appendChild(deathHours);