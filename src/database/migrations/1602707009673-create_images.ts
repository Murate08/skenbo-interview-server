import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602707009673 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name:'images',
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
                    name:'path',
                    type:'vachar',
                },
                {
                    name:'place_id',
                    type:'integer',
                }



            ],


            foreignKeys:[
                {
                    name:'ImagePlaces',
                    columnNames:['place_id'],
                    referencedTableName:'places',
                    referencedColumnNames:['id'],
                    onUpdate:'CASCADE',
                    onDelete:'CASCADE',

                }
            ]


        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
