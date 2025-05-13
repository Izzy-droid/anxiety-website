//import togglePopup from './index.js'

//TODO: decide between google.maps.Marker(keeps functionality) or advanced marker element(has color) (done)
let map;



async function initMap() {

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    var options = {
      zoom: 7,
      center: {lat: 27.994402, lng: -81.760254},
      mapId: '2c2752b2c86eef9b',
    };
    
  map = new google.maps.Map(document.getElementById('goog_map'), options);
  const {ColorScheme} = await google.maps.importLibrary("core");

  
  

  /*const pinBackground = new google.maps.marker.PinElement({
    background: "#ae9fb1",
    borderColor: "#5e705b",
    glyphColor: "#5e705b",
  });
    //Markers for locations

  /*const marker = new AdvancedMarkerElement({
    map,
    position: {lat: 26.43692, lng: -80.12142},
   // content: tag,
    title: "South county Mental Health Center",
    //icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
    content: pinBackground.element,
      });*/
  function addMark(props){
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: {url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"},
        });
      
      if (props.content){
        const infoWindow = new google.maps.InfoWindow({
        content: props.content,
      });

      marker.addListener('click', () => {
      infoWindow.open(map, marker);
      });
  
  
  };

};
 
 var markers = [
  { 
  //Marker 1: South county Mental Health Center
   coords:{lat: 26.43692, lng: -80.12142},
   content: '<h1>South County Mental Health Center</h1> <p><b>(all ages, sliding scale and works with most insurances)</b></p> <p>(561-737-8400) 16158 S Military Trail, Delray Beach, FL 33484</p>',
  },
  {
    coords:{lat:26.34296667091627, lng:-80.17181408913844},
    content: '<h1>Faulk Center for Counseling</h1> <p><b>(all ages, free groups and sliding scale)</b></p> <p>(561-483-5300) 22455 Boca Rio Rd, Boca Raton, FL 33433</p>',
  },
  {
    coords:{lat:26.619274692601305, lng:-80.15321176214036},
    content: '<h1>Banyan Group</h1> <p><b>(all ages, out of pocket or/and works with most insurances</b></p> <p>(561-967-2566) 3898 Via Poinciana Ste 13, Lake Worth Corridor, FL 33467 (also available in Boca Raton and West Palm Beach)</p>',
  },
  {
    coords:{lat:26.727152475607735, lng:-80.08142306213625},
    content: '<h1>Multilingual Psychotherapy Center (West Palm Beach Location)</h1> <p><b>(For Children, Adolescents, Adults, and Families)</b></p> <p>(561-712-8821) 1639 Forum Pl #7, West Palm Beach, FL 33401</p>',
  },
  {
    coords:{lat:26.636503993714427, lng: -80.060823},
    content: '<h1>Multilingual Psychotherapy Center (Hypoluxo Location)</h1> <p><b>(For Children, Adolescents, Adults, and Families)</b></p> <p>(561-712-8960) 1111 Hypoluxo Rd #106, Lantana, FL 33462</p>'
  },
  {
    coords:{lat:26.686185154928072, lng:-80.67025003330247},
    content: '<h1>Multilingual Psychotherapy Center (Belle Glade Location)</h1> <p><b>(For Children, Adolescents, Adults, and Families)</b></p> <p>(561-253-3679) 233 W Ave A suite c, Belle Glade, FL 33430</p>'
  },
  {
    coords:{lat:28.546093717983428, lng:-81.37016188905295},
    content: '<h1>Mental Health Association of Central Florida</h1> <p><b>(For Children, Adolescents, Adults, and Families)</b></p> <p>(407-898-0110) 605 E Robinson St #450, Orlando, FL 32801</p>',
  },
  {
    coords:{lat:27.675685620517026, lng:-82.7264998984166},
    content: '<h1>Rachel McKenna MD. (counseling)</h1> <p><b>(all ages, out of pocket)</b></p> <p>(813-567-5675) 1110 Pinellas Bayway S Ste 102 Saint Petersburg, FL 33715</p>',
  },
  {
    coords: {lat:26.120864471060692, lng:-80.19983029099438},
    content: '<h1>Chrysalis Center</h1> <p><b>(Adult and children therapy, contact them for financial details)</b></p> <p>(888-587-0335), 3800 W Broward Blvd, Unit 100, Fort Lauderdale, FL 33312, United States</p> <a href="https://www.chrysalishealth.com/></a>',
  },
  {
    coords: {lat:29.690990437445965, lng:-82.43183706618619},
    content: '<h1>Gainesville Community Counseling Center</h1> <p><b>(All ages, sliding scale)</b></p> <p>(352-448-9120) 3850 NW 83 St Unit 201, Gainesville, FL 32606</p>',
  },
  {
    coords: {lat:30.20564816192364, lng:-81.5926926619968},
    content: '<h1>Family Therapy Associates of Jacksonville</h1> <p><b>(All ages, and various therapies, out of pocket)</b></p> <p>(904-302-5340) 4686 Sunbeam Rd, Jacksonville, FL 32257</p>',
  },
  {
    coords:{lat:30.20751385399966, lng:-81.61623728250977},
    content: '<h1>Breakthroughs: Counseling & Recovery</h1> <p><b>(Adults and adolescents, various therapies, contact for financial details)</b></p> <p>(+904-419-6102) 3810 Williamsburg Park Blvd, Jacksonville, FL 32257</p>',
  },
  {
    coords:{lat:30.49347807910052,lng: -84.24293739798955},
    content: '<h1>Believe Hope Inspire Wellness Services LLC</h1> <p><b>(All ages, contact for financial details)</b></p> <p>(850-450-7223) 2807 Remington Green Cir Suite 106, Tallahassee, FL 32308</p>',
  }
 ];
 for (var i=0; i<markers.length; i++){
  addMark(markers[i]);
 
 };
}
initMap();


