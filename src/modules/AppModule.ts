import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { BoardModule } from "../boards/BoardModule";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      database: "board",
      autoLoadModels: true,
      synchronize: true,
    }),
    BoardModule,
  ],
})
export class AppModule {}
