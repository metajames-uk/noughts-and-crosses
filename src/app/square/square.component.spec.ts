import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { SquareComponent } from './square.component';

describe('SquareComponent', () => {
  let spectator: Spectator<SquareComponent>;
  const createComponent = createComponentFactory(SquareComponent);

  beforeEach(() => (spectator = createComponent()));

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  describe('selectedBox', () => {
    it('should emit buttonSelected when square is clicked', () => {
      spyOn(spectator.component.buttonSelected, 'emit').and.callThrough();
      spectator.click(spectator.query('button'));

      expect(spectator.component.buttonSelected.emit).toHaveBeenCalled();
    });
  });

  // it('should have a success class by default', () => {
  //   expect(spectator.query('button')).toHaveClass('success');
  // });

  // it('should set the class name according to the [className] input', () => {
  //   spectator.setInput('className', 'danger');
  //   expect(spectator.query('button')).toHaveClass('danger');
  //   expect(spectator.query('button')).not.toHaveClass('success');
  // });
});
