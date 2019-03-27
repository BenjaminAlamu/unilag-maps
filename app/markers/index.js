const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
const icons = {
    parking: {
        icon: iconBase + 'parking_lot_maps.png'
    },
    library: {
        icon: iconBase + 'library_maps.png'
    },
    info: {
        icon: iconBase + 'info-i_maps.png'
    }
};

export function addMarker(feature) {
    let marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map
    });
}
