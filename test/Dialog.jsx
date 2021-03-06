import * as React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../src/Dialog';

describe('Dialog', () => {
    it('renders a div', () => {
        const dialog = shallow(<Dialog />);

        expect(dialog.type()).toEqual('div');
    });

    it('does not render the title prop', () => {
        const dialog = shallow(<Dialog title="Foo" />);

        expect(dialog.prop('title')).not.toEqual('Foo');
    });

    it('renders passed children', () => {
        const dialog = shallow(
            <Dialog>
                <div className="foo" />
            </Dialog>
        );

        expect(dialog.contains(<div className="foo" />)).toBe(true);
    });

    it('renders a title bar', () => {
        const dialog = shallow(<Dialog title="Foo" />);

        const titleBar = dialog.find('DialogTitleBar');

        expect(titleBar.length).not.toBe(0);
        expect(titleBar.prop('children')).toBe('Foo');
    });

    it('does not render a title bar when title=false', () => {
        const dialog = shallow(<Dialog title={false} />);

        const titleBar = dialog.find('DialogTitleBar');

        expect(titleBar.length).toBe(0);
    });

    it('passes element children to title bar', () => {
        const icon = <i className='foo' />;
        const dialog = shallow(<Dialog title={icon} />);

        const titleBar = dialog.find('DialogTitleBar');

        expect(titleBar.contains(icon)).toBe(true);
    });

    it('should not render actions if not passed', () => {
        const dialog = shallow(<Dialog />);

        expect(dialog.find('DialogActions').length).toBe(0);
    });

    it('renders provided actions', () => {
        const actions = [ { text: "OK" } ];
        const dialog = shallow(<Dialog actions={actions} />);

        expect(dialog.find('DialogActions').length).toBe(1);
        expect(dialog.find('DialogActions').props().actions).toBe(actions);
    });

    it('renders overlay', () => {
        const dialog = shallow(<Dialog />);

        expect(dialog.find('.k-overlay').length).toBe(1);
    });
});

