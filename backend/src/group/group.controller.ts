import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get('by-id/:id')
  async findById(@Param('id') id: string) {
    return this.groupService.findById(parseInt(id));
  }

  @Get('by-owner-id/:ownerId')
  async findByOwnerId(@Param('ownerId') ownerId: string) {
    return this.groupService.findByOwnerId(parseInt(ownerId));
  }

  @Post('/')
  async create(@Body() body: { name: string; ownerId: number }) {
    return this.groupService.create(body.name, body.ownerId);
  }

  @Put('/')
  async rename(@Body() body: { id: number; name: string }) {
    return this.groupService.rename(body.id, body.name);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.groupService.delete(parseInt(id));
  }
}
