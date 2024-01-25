# Filtrando Opendata Euskadi
Listado y mapa de los centros escolares del gobierno vasco obtenidos de la web [Opendata Euskadi](https://opendata.euskadi.eus/catalogo/-/centros-docentes-no-universitarios-euskadi/). El CSV está descargado en este proyecto.

En el mapa sólo salen los centros públicos ([mirar aquí](https://github.com/yuki/centros_educativos/blob/main/js/centros.js#L25)).

Demo: https://yuki.github.io/centros_educativos/

Para que funcione en local, Python nos facilita la labor:
```
python3 -m http.server 8000
```


## Software utilizado:
- Bootstrap-Table: https://bootstrap-table.com/
    - Incluídos varios de sus plugins
- Openlayers: https://openlayers.org/
    - Para el mapa
- Jquery: https://jquery.com/
    - Para la vida en general :-D
- Bootstrap: https://getbootstrap.com/docs/5.0/getting-started/download/  
    - Es necesario para el popup, y de paso, queda bonito :D
- Papaparse: https://www.papaparse.com/
    - Parsear el CSV
- UTM conversor:
    - Convierte las coordenadas UTM a latitud y longitud
      - http://youtim.js.org/
      - https://github.com/mortonfox/YouTim/wiki/API-Reference


## Enlaces de interés

http://epsg.io/transform#s_srs=3042&t_srs=4326&x=539721.8069303&y=4743750.3333386

https://www.engineeringtoolbox.com/utm-latitude-longitude-d_1370.html

https://www.gps-latitude-longitude.com/address-to-longitude-latitude-gps-coordinates


España : EPSG:3042 ETRS89 / UTM zone 30N (N-E)  ??
https://www.mapa.gob.es/es/cartografia-y-sig/ide/directorio_datos_servicios/caracteristicas_wms.aspx


    
