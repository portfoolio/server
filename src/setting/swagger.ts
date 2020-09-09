import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SettingModule } from 'src/setting/module';

export const settingSwagger = app => {
  const options = new DocumentBuilder()
    .setTitle('Setting Module')
    .setDescription('Setting Module API')
    .setVersion('1.0')
    .addTag('setting')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options, { include: [SettingModule] });

  return { path: 'setting', document };
};
