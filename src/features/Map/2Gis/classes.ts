import {Address} from "../../../../api";

export class TwoGisMap {
    map: any = null
    marker: any = null

    launchMap (
        mapId: string,
        center: Array<number>,
        onClick: (lat: number, lon: number)=>any,
        currentAddress: Address|null
    ) {

        // @ts-ignore
        DG.then(() => {

            // @ts-ignore
            this.map = (DG.map(mapId, {
                center: center,
                zoom: 10,
                geoclicker: false,
                zoomControl: false,
                fullscreenControl: false
            }))

            // @ts-ignore
            this.map.on("click", (e) => this.onMapClick(e, onClick))

            if (currentAddress) this.addMarkerToMap([currentAddress.lat, currentAddress.lon])
        })
    }

    onMapClick(e: any, onClick: (lat: number, lon: number)=>any) {
        const latlng = e.latlng;
        const latlngArray = [latlng.lat, latlng.lng]

        // @ts-ignore
        this.addMarkerToMap(latlngArray);
        onClick(latlng.lat, latlng.lng)
    }

    addMarkerToMap (latLngArray: [number, number]) {

        if (!this.map) return;

        if (this.marker !== null) {
            this.marker.removeFrom(this.map);
        }

        // @ts-ignore
        this.marker = DG.marker(latLngArray);
        this.marker.addTo(this.map);
        this.map.panTo(latLngArray);
    }
}