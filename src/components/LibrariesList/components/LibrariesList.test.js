import React from 'react';
import { shallow, mount } from 'enzyme';
import LibrariesList from './LibrariesList';
import Card from './Card';

describe('<LibrariesList />', () => {
  function setup(addedProps = {}, render = mount) {
    const props = {
      itemsList: {
        libraries: [{ name: 'React', stars: 5 }, { name: 'Angular', stars: 3 }],
        loading: false
      },
      currentPage: 1,
      setPage: () => {},
      fetchItems: () => {}
    };
    return render(<LibrariesList {...props} />);
  }
  it('always renders a div', () => {
    const renderedComponent = setup();
    expect(renderedComponent.type()).toEqual('div');
  });

  it('renders <Card /> div as children', () => {
    const renderedComponent = setup();
    expect(renderedComponent.find(Card)).to.have.lengthOf(5);
  });
});
