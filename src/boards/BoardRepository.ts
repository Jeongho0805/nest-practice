import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Board } from "./Board";

@Injectable()
export class BoardRepository {
  constructor(
    @InjectModel(Board)
    private readonly boardModel: typeof Board,
  ) {}

  async findAll(): Promise<Board[]> {
    return this.boardModel.findAll();
  }

  async findOne(id: string): Promise<Board> {
    return this.boardModel.findOne({
      where: { id },
    });
  }

  async create(title: string, content: string): Promise<Board> {
    return await this.boardModel.create({
      title: title,
      content: content,
    });
  }
}
