function initMap() {
  const center = { lat: 42.3277992, lng: -71.0848821 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: center
  });
  const marker = new google.maps.Marker({ position: center, map: map });
}
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 42.3277992, lng: -71.0848821 },
//     zoom: 8
//   });
// }

// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});
