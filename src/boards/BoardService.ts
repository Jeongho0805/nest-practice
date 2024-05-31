import { Injectable } from "@nestjs/common";
import { BoardRepository } from "./BoardRepository";

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  async create(title: string, content: string): Promise<void> {
    await this.boardRepository.create(title, content);
  }
}
