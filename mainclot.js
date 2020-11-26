//Page Index
window.onload = depart_general;
//variable « index » dans laquelle tu mets ton tableau sur une seule ligne et avec des apostrophes à la place des guillemets
var index="<table class='fondcouleur'><tr><td><a href='guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='boutique/boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='canon/canon.html'><h2>Les Saints Conciles</h2></a></td></tr></table>";
var boutique="<table class='fondcouleur'><tr><td><a href='../guide/guide.html'><h2>Guide pour Catéchumène</h2></a></td><td><a href='../videos/video.html'><h2>Nos Vidéos</h2></a></td><td><a href='../livre/livre.html'><h2>Les Livres Orthodoxes</h2></a></td><td><a href='../vco/vco.html'><h2>Qui sont les VCO?</h2></a></td><td><a href='boutique.html'><h2>Boutique Orthodoxe</h2></a></td><td><a href='../pere/pere.html'><h2>Les Textes Patristiques</h2></a></td><td><a href='../canon/canon.html'><h2>Les Saints Canons</h2></a></td></tr></table>";
//création fonction
function depart_general() {
document.getElementById("menu-index").innerHTML=index;
document.getElementById("menu-boutique").innerHTML=boutique;
}
