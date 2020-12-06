import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602611966649 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(new Table({
                name:'places',
                columns:[
                    {
                        name:'id',
                        type:'integer',
                        unsigned:true,
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:'increment',
                    },
                    {
                        name:'name',
                        type:'varchar',
                    },

                    {
                        name:'latitude',
                        type:'decimal',
                        scale:10,
                        precision:2,

                    },
                    {
                        name:'longitude',
                        type:'decimal',
                        scale:10,
                        precision:2,

                    },
                    {
                        name:'floor',
                        type:'text',
                    },

                    {
                        name:'whatsapp',
                        type:'text',
                    },
                    {
                        name:'wich_work',
                        type:'text',
                    },
                    {
                        name:'fix',
                        type:'text',
                    },
                  
                    {
                        name:'open_on_weekends',
                        type:'boolean',
                        default:false,
                    }
                ],
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.dropTable('places')
    
    }

}
