import { Test, TestingModule } from '@nestjs/testing';
import { PrevisionService } from './prevision.service';

describe('PrevisionService', () => {
  let service: PrevisionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrevisionService],
    }).compile();

    service = module.get<PrevisionService>(PrevisionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
