const mapboxToken =
  "pk.eyJ1Ijoicm1hdHRoZXdzIiwiYSI6ImNrbzh3OTBpazFram0ydW9uODZoeDIxZzgifQ.MhR7riaPgzQ-7yqdmVBvuA";
const defaultZoom = 14;
const defaultCenter = [36.0749, -79.8126];
const map = L.map("map", {
  scrollWheelZoom: false,
}).setView(defaultCenter, defaultZoom);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
