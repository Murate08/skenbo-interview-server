import Place from '../models/Places'
import  imagesView from './images_view'

export default{
    render(place: Place){
        return{

            id: place.id,
            name: place.name,
            latitude: place.latitude,
            longitude: place.longitude,
            floor: place.floor,
            whatsapp: place.whatsapp,
            wich_work: place.wich_work,
            fix: place.fix,
            open_on_weekends: place.open_on_weekends,
            images: imagesView.renderMany(place.images)
        };
    },

    renderMany(places:Place[]){
        return places.map(place=> this.render(place))
    }
}


//como deve apresentar os dados