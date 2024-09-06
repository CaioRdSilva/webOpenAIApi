import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async sendQuestion(@Body('prompt') prompt: string, @Body('messages') messages): Promise<string>{
    return await this.appService.chatGptRequest(prompt, messages)
  }
}
