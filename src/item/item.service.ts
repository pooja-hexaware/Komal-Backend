import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemService {
  constructor(private readonly itemRepo: ItemRepository) {}

  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  async findAll() {
    return this.itemRepo.findAll();
  }

  findOne(id: string) {
    return this.itemRepo.findOne(id);
  }

  async findByIds(ids: string) {
    const idsArray = ids.split(',');
    return this.itemRepo.findByIds(idsArray);
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
