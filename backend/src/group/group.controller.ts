import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UnprocessableEntityException,
  NotFoundException,
} from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Get('by-id/:id')
  async findById(@Param('id') id: string) {
    const numberId = parseInt(id);

    if (isNaN(numberId)) {
      throw new UnprocessableEntityException('Invalid group id');
    }

    const group = await this.groupService.findById(numberId);

    return group;
  }

  @Get('by-owner-id/:ownerId')
  async findByOwnerId(@Param('ownerId') ownerId: string) {
    return this.groupService.findByOwnerId(parseInt(ownerId));
  }

  @Post('/')
  async create(@Body() body: { name: string; ownerId: number }) {
    return this.groupService.create(body.name, body.ownerId);
  }

  @Put(':id')
  async rename(@Param('id') id: string, @Body() body: { name: string }) {
    const numberId = parseInt(id);

    if (isNaN(numberId)) {
      throw new UnprocessableEntityException('Invalid group id');
    }

    const group = await this.groupService.findById(numberId);

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    return this.groupService.rename(numberId, body.name);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const numberId = parseInt(id);

    if (isNaN(numberId)) {
      throw new UnprocessableEntityException('Invalid group id');
    }

    const group = await this.groupService.findById(numberId);

    if (!group) {
      throw new NotFoundException('Group not found');
    }

    return this.groupService.delete(numberId);
  }
}
