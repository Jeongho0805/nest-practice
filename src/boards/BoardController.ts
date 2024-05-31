import { Body, Controller, Get, Post } from "@nestjs/common";
import { BoardService } from "./BoardService";
import { BoardCreateDto } from "./BoardDto";

@Controller("/boards")
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  async createBoard(@Body() boardCreateDto: BoardCreateDto): Promise<string> {
    await this.boardService.create(
      boardCreateDto.title,
      boardCreateDto.content,
    );
    return "생성 완료";
  }
}
