import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the ${movieId}`;
  }
  @Post()
  create() {
    return 'This will create movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the ${movieId}`;
  }
}
