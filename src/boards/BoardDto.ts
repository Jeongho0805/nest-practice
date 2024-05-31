import { IsNotEmpty, IsString } from "class-validator";

export class BoardCreateDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;
}