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

function displayHTMLTable(results){
    var table = "<table class='table table-striped'>";
    var data = results.data;
    var features = [];

    for(i=0;i<data.length;i++){
        if (i==0){
            table += "<thead class='table-dark'>";
        }
        var row = data[i];
        var cells = row.join(",").split(",");
        
        if ( cells[3] == "IES" || cells[3] == "DGENRC"){

            table+= "<tr>";
    
            // CREAR PUNTOS PARA EL MAPA
    
            a = new UTMConv.UTMCoords(30, row[20],row[21])
    
            var iconFeature = new ol.Feature({
                geometry: new ol.geom.Point(ol.proj.fromLonLat([a.to_deg().lngd,a.to_deg().latd])),
                name: cells[1]
            });
            iconFeature.set('style', createStyle('icon.png', undefined));
            features.push(iconFeature);
            
            // / CREAR PUNTOS PARA EL MAPA
             
            for(j=0;j<cells.length;j++){
                if (j==0 || j == 1 || j == 3 || j == 5 || j == 7 || j == 9 || j == 14 || j == 15 || j == 16 || j == 18 || j == 19 || j==12 || j==3 ){
                    table+= "<td>";
                    table+= cells[j];
                    table+= "</th>";
                }
            }

            table+= "</tr>";
        }
    
        if (i==0){
            table += "</thead>";
        }

    }
    table+= "</table>";
    $("#parsed_csv_list").html(table);


    // PONER PUNTOS EN EL MAPA
    var layer = new ol.layer.Vector({
        style: function (feature) {
            return feature.get('style');
        },
        source: new ol.source.Vector({
            features: features
        })
    });

    map.addLayer(layer);
    // poder hacer click y pop up
    var element = document.getElementById('popup');

    var popup = new ol.Overlay({
      element: element,
      positioning: 'bottom-center',
      stopEvent: false,
      offset: [0, -50],
    });
    map.addOverlay(popup);

    // display popup on pointermove
    map.on('pointermove', function (evt) {
      var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        return feature;
      });
      if (feature) {
        var coordinates = feature.getGeometry().getCoordinates();
        popup.setPosition(coordinates);
        $(element).popover({
          placement: 'top',
          html: true,
          content: feature.get('name'),
        });
        $(element).popover('show');
      } else {
        $(element).popover('dispose');
      }
    });

}



