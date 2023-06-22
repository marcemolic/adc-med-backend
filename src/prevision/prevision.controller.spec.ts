import { Test, TestingModule } from '@nestjs/testing';
import { PrevisionController } from './prevision.controller';
import { PrevisionService } from './prevision.service';

describe('PrevisionController', () => {
  let controller: PrevisionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrevisionController],
      providers: [PrevisionService],
    }).compile();

    controller = module.get<PrevisionController>(PrevisionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
