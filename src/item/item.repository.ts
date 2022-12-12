import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Item, ItemDocument } from "./item.model";

@Injectable()
export class ItemRepository {
  constructor(@InjectModel(Item.name) private readonly itemModel: Model<ItemDocument>) {}

  async findOne (_id: string) {
    return this.itemModel.findOne({ _id });
  }
  
  async findAll() {
    return this.itemModel.find();
  }

  async findByIds(ids: string[]) {
    return this.itemModel.find({ _id: { $in: ids }});
  }
}