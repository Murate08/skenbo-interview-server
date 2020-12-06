import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Place from './Places'


@Entity('images')
export default class Images{
    @PrimaryGeneratedColumn('increment')
    id:number;


    @Column()
    path: string;
//criar uma relacao com base de dados imagens
    @ManyToOne(()=> Place, place => place.images)
    @JoinColumn({name:'place_id'})
    place: Place; 

}