function createStyle(src, img) {
  return new ol.style.Style({
    image: new ol.style.Icon({
      anchor: [0.5, 0.96],
      crossOrigin: 'anonymous',
      src: src,
      img: img,
      imgSize: img ? [img.width, img.height] : undefined,
    }),
  });
}

//function putPoint(lon,lat){
//    //convert UTM into old style lon/lat
//    a = new UTMConv.UTMCoords(30, lon, lat)
//    var iconFeature = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat([a.to_deg().lngd,a.to_deg().latd])) );
//    iconFeature.set('style', createStyle('icon.png', undefined));
//    
//    var layer = new ol.layer.Vector({
//        style: function (feature) {
//            return feature.get('style');
//        },
//        source: new ol.source.Vector({
//            features: [
//                iconFeature
//            ]
//        })
//    });
//
////    var layer = new ol.layer.Vector({
////        source: new ol.source.Vector({
////            features: [
////                new ol.Feature({
////                    geometry: new ol.geom.Point(ol.proj.fromLonLat([a.to_deg().lngd,a.to_deg().latd]))
////                })
////            ]
////        })
////    });
//    map.addLayer(layer);
//}
//

function displayHTMLTable(results){
    var table = "<table class='table'>";
    var data = results.data;
    var features = [];

    for(i=0;i<data.length;i++){
        table+= "<tr>";
        var row = data[i];
        var cells = row.join(",").split(",");

// PONER PUNTOS EN EL MAPA

        a = new UTMConv.UTMCoords(30, row[20],row[21])

        var iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([a.to_deg().lngd,a.to_deg().latd])),
            name: 'Null Island'
        });
        iconFeature.set('style', createStyle('icon.png', undefined));
        features.push(iconFeature);
        
//         putPoint(row[20],row[21]);
// / PONER PUNTOS EN EL MAPA


        console.log(row[20],row[21]);
         
        for(j=0;j<cells.length;j++){
            table+= "<td>";
            table+= cells[j];
            table+= "</th>";
        }
        table+= "</tr>";
    }
    table+= "</table>";
    $("#parsed_csv_list").html(table);


    var layer = new ol.layer.Vector({
        style: function (feature) {
            return feature.get('style');
        },
        source: new ol.source.Vector({
            features: features
        })
    });

    map.addLayer(layer);



}



