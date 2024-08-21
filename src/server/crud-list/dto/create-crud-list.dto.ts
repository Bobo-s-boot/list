import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCrudListDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  description: string;
}
