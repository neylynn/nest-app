import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  NotFoundException, 
  ParseIntPipe 
} from '@nestjs/common';
import { ProductService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly ProductService: ProductService) {}

  @Post()
  @ApiCreatedResponse({ type: ProductEntity })
  create(@Body() createProductDto: CreateProductDto) {
    return this.ProductService.create(createProductDto);
  }

  @Get()
  @ApiOkResponse({ type: ProductEntity, isArray: true })
  findAll() {
    return this.ProductService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductEntity })
//   findOne(@Param('id', ParseIntPipe) id: number) {
//     return this.productsService.findOne(id);
//   }
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const product = await this.ProductService.findOne(id);
        if (!product) {
            throw new NotFoundException(`Product with ${id} does not exist.`);
        }
        return product;
    }

  @Patch(':id')
  @ApiOkResponse({ type: ProductEntity })
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateProductDto: UpdateProductDto) {
    return this.ProductService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ProductEntity })
  remove(@Param('id', ParseIntPipe) id: number) {   // id is parsed as a string
    return this.ProductService.remove(id);    // id is converted to number using the expression '+id'
  }
}
