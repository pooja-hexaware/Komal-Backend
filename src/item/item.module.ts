import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { Item, ItemSchema } from './item.model';
import { ItemRepository } from './item.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Item.name, schema: ItemSchema }])
  ],
  controllers: [ItemController],
  providers: [ItemService, ItemRepository]
})
export class ItemModule {}
