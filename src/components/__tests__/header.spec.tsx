import { screen } from '@testing-library/react';
import { customRender } from '../../utils/custom-render';
import { Header } from '../';

const element = screen.getByRole('banner');

//TODO - test everything

describe('<Header />', () => {
  it('should render a header', () => {
    customRender(<Header></Header>);
    expect(element);
  });
});
