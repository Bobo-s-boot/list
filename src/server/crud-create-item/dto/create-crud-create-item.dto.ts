import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCrudCreateItemDto {
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
