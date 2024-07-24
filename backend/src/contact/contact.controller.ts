import { Controller, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post('/')
  async create(@Body() body: { name: string; phone: string; groupId: number }) {
    return this.contactService.create(body.name, body.phone, body.groupId);
  }

  @Post('/batch')
  async createMany(
    @Body() body: { name: string; phone: string; groupId: number }[],
  ) {
    return this.contactService.createMany(body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.contactService.delete(parseInt(id));
  }
}
