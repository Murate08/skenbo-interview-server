import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'
import  Image from './Image'


@Entity('places')
export default class Home{
    @PrimaryGeneratedColumn('increment')
    id:number;


    @Column()
    name: string;

    @Column()
    latitude:number;

    @Column()
    longitude: number;

    @Column()
    floor: string;

    @Column()
    whatsapp: string;

    @Column()
    wich_work: string;

    @Column()
    fix: string;

  

    @Column()
    open_on_weekends:boolean;

    @OneToMany(()=> Image, image => image.place, {
        cascade:['insert', 'update']

    })
    @JoinColumn({name:'homes_id'})
    images: Image[];
}