import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RecadosService } from './recados.service';
import { CreateRecadoDto } from './dto/create-recado.dto';
import { UpdateRecadoDto } from './dto/update-recado.dto';

//CRUD
//Create -> POST -> Criar um recado
//Read -> GET -> Ler todos os recados
//Read(id) -> POST -> Ler apenas um recado
//Update -> PUT or PATCH -> Atualizar um recado

//PUT or PATCH -> Atualizar um recado
//PATCH -> é utilizado para atualizar dados de um recurso
//PUT -> é utilizado para atualizar um recurso inteiro

// DTO - Data Tranfer Object -> Objeto de tranferencia de dados
// DTO - Objeto -> Validar dados / Tranformar dados

@Controller('recados')
export class RecadosController {
  constructor(private readonly recadosService: RecadosService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: any) {
    console.log(pagination);
    //return 'Essa rota vai retonar todos os recados.';
    return this.recadosService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.recadosService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  create(@Body() createRecadoDto: CreateRecadoDto) {
    return this.recadosService.create(createRecadoDto);
  }

    @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRecadoDto: UpdateRecadoDto,
  ) {
    return this.recadosService.update(id, updateRecadoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    console.log(id, typeof id)
    return this.recadosService.remove(id);
  }
}
