import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';

//CRUD
//Create -> POST -> Criar um recado
//Read -> GET -> Ler todos os recados
//Read(id) -> POST -> Ler apenas um recado
//Update -> PUT or PATCH -> Atualizar um recado

//PUT or PATCH -> Atualizar um recado
//PATCH -> é utilizado para atualizar dados de um recurso
//PUT -> é utilizado para atualizar um recurso inteiro

@Controller('recados')
export class RecadosController {

  constructor(private readonly recadosService: RecadosService){}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    console.log(pagination);
    //return 'Essa rota vai retonar todos os recados.';
    return this.recadosService.hello();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Essa rota retorna um recado ID ${id}`;
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() body: any) {
    console.log(body);
    return `Essa rota cria um recado`;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return {
      id,
      ...body,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Essa rota apaga o recado ID ${id}`;
  }
}
