import { PreviewLineupModule } from './preview-lineup.module';

describe('PreviewLineupModule', () => {
  let previewLineupModule: PreviewLineupModule;

  beforeEach(() => {
    previewLineupModule = new PreviewLineupModule();
  });

  it('should create an instance', () => {
    expect(previewLineupModule).toBeTruthy();
  });
});
