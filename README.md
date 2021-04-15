# Filtrando Opendata
Listado y mapa de los centros escolares del gobierno vasco. En el mapa sólo salen los públicos

Para que funcione, ejecutar:
```
python3 -m http.server 8000
```

Y cargar el fichero **dirgennouniv.csv**. La idea es que se cargue automáticamente, pero esto es una prueba de concepto.


## Software utilizado:
- Openlayers: https://openlayers.org/
    - Para el mapa
- Jquery: https://jquery.com/
    - Para la vida en general :p
- Bootstrap: https://getbootstrap.com/docs/5.0/getting-started/download/  
    - Es necesario para el popup, y de paso, queda bonito :D
- Papaparse: https://www.papaparse.com/
    - Parsear el CSV
- UTM conversor:
    - Convierte las coordenadas UTM a latitud y longitud
    http://youtim.js.org/
    https://github.com/mortonfox/YouTim/wiki/API-Reference


## Enlaces de interés

http://epsg.io/transform#s_srs=3042&t_srs=4326&x=539721.8069303&y=4743750.3333386

https://www.engineeringtoolbox.com/utm-latitude-longitude-d_1370.html

https://www.gps-latitude-longitude.com/address-to-longitude-latitude-gps-coordinates


España : EPSG:3042 ETRS89 / UTM zone 30N (N-E)  ??
https://www.mapa.gob.es/es/cartografia-y-sig/ide/directorio_datos_servicios/caracteristicas_wms.aspx


    
