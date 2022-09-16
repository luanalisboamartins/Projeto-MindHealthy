import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TemasController } from "../controller/temas.controller";
import { Temas } from "../entities/temas.entity";
import { TemasService } from "../service/temas.service";


@Module({
    imports: [TypeOrmModule.forFeature([Temas])],
    providers: [TemasService],
    controllers: [TemasController],
    exports: [TypeOrmModule]

})
export class TemasModule{}