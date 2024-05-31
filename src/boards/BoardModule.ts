import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Board } from "./Board";
import { BoardController } from "./BoardController";
import { BoardService } from "./BoardService";
import { BoardRepository } from "./BoardRepository";

@Module({
  imports: [SequelizeModule.forFeature([Board])],
  controllers: [BoardController],
  providers: [BoardService, BoardRepository],
})
export class BoardModule {}
