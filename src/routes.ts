import {Router} from 'express';
import multer from 'multer'


import uploadConfig from './config/upload'
import PlacesController from './controllers/PlacesesController';




const routes = Router();
const upload = multer(uploadConfig)

//listar os orfanatos
routes.get('/places', PlacesController.index)



//detalhes do orfanato
routes.get('/places/:id', PlacesController.show)


//cadastrar os orfanatos
routes.post('/places', upload.array('images'), PlacesController.create)

export default routes;