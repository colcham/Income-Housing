var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MedianHousingUnitValueDollars_1 = new ol.format.GeoJSON();
var features_MedianHousingUnitValueDollars_1 = format_MedianHousingUnitValueDollars_1.readFeatures(json_MedianHousingUnitValueDollars_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedianHousingUnitValueDollars_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianHousingUnitValueDollars_1.addFeatures(features_MedianHousingUnitValueDollars_1);
var lyr_MedianHousingUnitValueDollars_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MedianHousingUnitValueDollars_1, 
                style: style_MedianHousingUnitValueDollars_1,
                interactive: true,
    title: 'Median Housing Unit Value (Dollars)<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_0.png" /> 25600 - 301300<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_1.png" /> 301300 - 406900<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_2.png" /> 406900 - 507600<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_3.png" /> 507600 - 616200<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_4.png" /> 616200 - 728200<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_5.png" /> 728200 - 851900<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_6.png" /> 851900 - 996300<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_7.png" /> 996300 - 1226900<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_8.png" /> 1226900 - 1602300<br />\
    <img src="styles/legend/MedianHousingUnitValueDollars_1_9.png" /> 1602300 - 2000001<br />'
        });
var format_MedianHouseholdIncomeDollars_2 = new ol.format.GeoJSON();
var features_MedianHouseholdIncomeDollars_2 = format_MedianHouseholdIncomeDollars_2.readFeatures(json_MedianHouseholdIncomeDollars_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MedianHouseholdIncomeDollars_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MedianHouseholdIncomeDollars_2.addFeatures(features_MedianHouseholdIncomeDollars_2);
var lyr_MedianHouseholdIncomeDollars_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MedianHouseholdIncomeDollars_2, 
                style: style_MedianHouseholdIncomeDollars_2,
                interactive: true,
    title: 'Median Household Income (Dollars)<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_0.png" /> 21781 - 44940<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_1.png" /> 44940 - 67450<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_2.png" /> 67450 - 84717<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_3.png" /> 84717 - 100700<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_4.png" /> 100700 - 117366<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_5.png" /> 117366 - 136591<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_6.png" /> 136591 - 156667<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_7.png" /> 156667 - 178750<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_8.png" /> 178750 - 217885<br />\
    <img src="styles/legend/MedianHouseholdIncomeDollars_2_9.png" /> 217885 - 250001<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_MedianHousingUnitValueDollars_1.setVisible(true);lyr_MedianHouseholdIncomeDollars_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MedianHousingUnitValueDollars_1,lyr_MedianHouseholdIncomeDollars_2];
lyr_MedianHousingUnitValueDollars_1.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'Census Tract', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tests': 'Tests', 'Income_Hou': 'Income_Hou', 'Income_H_1': 'Income_H_1', 'Income_H_2': 'Income_H_2', 'Income_H_3': 'Income_H_3', 'Housing_va': 'Housing_va', 'Prop_value': 'Median Housing Unit Value (Dollars)', });
lyr_MedianHouseholdIncomeDollars_2.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'Census Tract', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tests': 'Tests', 'Income_Hou': 'Income_Hou', 'Income_H_1': 'Income_H_1', 'Income_H_2': 'Income_H_2', 'Income_H_3': 'Income_H_3', 'Median_inc': 'Median Household Income (Dollars)', });
lyr_MedianHousingUnitValueDollars_1.set('fieldImages', {'GISJOIN': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'MTFCC': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Tests': 'Hidden', 'Income_Hou': 'Hidden', 'Income_H_1': 'Hidden', 'Income_H_2': 'Hidden', 'Income_H_3': 'Hidden', 'Housing_va': 'Hidden', 'Prop_value': 'Range', });
lyr_MedianHouseholdIncomeDollars_2.set('fieldImages', {'GISJOIN': 'Hidden', 'STATEFP': 'Hidden', 'COUNTYFP': 'Hidden', 'TRACTCE': 'TextEdit', 'GEOID': 'Hidden', 'NAME': 'Hidden', 'NAMELSAD': 'Hidden', 'MTFCC': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Tests': 'Hidden', 'Income_Hou': 'Hidden', 'Income_H_1': 'Hidden', 'Income_H_2': 'Hidden', 'Income_H_3': 'Hidden', 'Median_inc': 'Range', });
lyr_MedianHousingUnitValueDollars_1.set('fieldLabels', {'TRACTCE': 'header label', 'Prop_value': 'header label', });
lyr_MedianHouseholdIncomeDollars_2.set('fieldLabels', {'TRACTCE': 'header label', 'Median_inc': 'header label', });
lyr_MedianHouseholdIncomeDollars_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});