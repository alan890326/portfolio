// Set up the object

var hotel = {
  name : '布達佩斯大飯店',
  rooms : 40,
  booked : 25,
  logo : 'flower1.svg',
  checkAvailability : function() {
    return this.rooms - this.booked;     // Need "this" because inside function
  }  
};
var hotel2= new Object();
hotel2.name = "台灣大飯店";
hotel2.rooms = 150;
hotel2.booked = 87;
hotel2.logo = 'flower2.svg';
hotel2.checkAvailability = function() {
    return this.rooms - this.booked;     
  };  

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name+' '+hotel2.name;                 // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability()+' '+hotel2.checkAvailability(); 

document.getElementById('i1').src = hotel.logo;
document.getElementById('i2').src = hotel2.logo;  // Update HTML with property of the object

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/