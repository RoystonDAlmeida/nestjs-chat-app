// src/app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ChatGateway } from './chat/chat.gateway';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'; // Node.js path module

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config available globally
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Serve files from the public directory
      serveRoot: '/', // Base URL path for serving files
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI), // MongoDB connection string from environment variable
    AuthModule,
    UserModule,
  ],
  providers: [ChatGateway],
})
export class AppModule {}
