var loc = document.querySelector("#location")
var myLoc;
function getLocation() {
    navigator.geolocation.getCurrentPosition(function(pos){
     
        var lat = pos.coords.latitude
        var long = pos.coords.longitude
         console.log(lat)
      console.log(long)
        loc.src = "https://maps.google.com/maps?q=" + lat + "," + long + "&ie=UTF8&iwloc&output=embed"
          // "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.0320570742288!2d" + lat + "!3d" + long + "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb7f127e8ccb22c5e!2zMjnCsDU4JzM5LjMiTiAzMcKwMTUnMDMuNiJF!5e0!3m2!1sen!2seg!4v1639307261677!5m2!1sen!2seg"
      
    });
}

// // regarding the lecture 
// navigator.geolocation.getCurrentPosition(
//     //suceess callback
//     (pos) => {
//       console.log(pos.coords.latitude);
//       console.log(pos.coords.longitude);
//       window.open(
//         `http://maps.google.com/maps?q=${pos.coords.latitude}${pos.coords.longitude}`,
//         `_self` //open in the same page
//       );
//     },
//     //failuar callback
//     (err) => {
//       switch (err.code) {
//         case err.PERMISSION_DENIED:
//           alert("permission denied");
//           break;
//         case err.TIMEOUT:
//           alert("it tooke alonge time");
//           break;
//         case err.UNKNOWN_ERROR:
//           alert("unknown error occured");
//           break;
//       }
//     }
//   );
  


