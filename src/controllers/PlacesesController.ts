import {Request, Response} from 'express'

import { getRepository }from 'typeorm';
import * as Yup from 'yup'

import Place from '../models/Places'

import orphanageView from '../views/places_views'



export default{
         

    //listar os orfanatos
    async index(request:Request, response:Response){
        const placeRepository = getRepository(Place);

        const places = await placeRepository.find({
            relations:['images']

        });

        return response.json(orphanageView.renderMany(places))
    },

//listar  por id

    async show(request:Request, response:Response){
        const {id} =  request.params;

        const placeRepository = getRepository(Place);

        const place = await placeRepository.findOneOrFail(id,{
            relations:['images']
        });

        return response.json(orphanageView.render(place))
    },


    async create(request: Request, response: Response){
 

        const{
            name,
            latitude,
            longitude,
            floor,
            whatsapp,
            wich_work,
            fix,
            open_on_weekends
    
        } = request.body
    
    
        const placeRepository = getRepository(Place);

        //cadastras as imagens no bancode dados
        const requestImages = request.files as Express.Multer.File[];

        const images = requestImages.map(image =>{
            return {path: image.filename}
        })

        //validacao de dados

        const data = {
            name,
            latitude,
            longitude,
            floor,
            whatsapp,
            wich_work,
            fix,
            open_on_weekends: open_on_weekends === 'true',
            images
           
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            floor: Yup.string().required(),
            whatsapp:  Yup.string().required(),
            wich_work:  Yup.string().required(),
            fix:  Yup.string().required(),
            open_on_weekends:  Yup.boolean().required(),
            images: 
                Yup.array(Yup.object().shape({
                path: Yup.string().required()
            }))
        });

        await schema.validate(data, {
            abortEarly:false,
        });
    
        const place = placeRepository.create(data);
    //para gravas na base de dados, metodo asincrono usanr o await e async
        await placeRepository.save(place);
    
        
    //codigo http que significa criado, e opcional
        return response.status(201).json(place)
    }
}