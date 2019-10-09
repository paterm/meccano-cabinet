import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import './dropdown.scss';

const cls = new BEMHelper('dropdown');

export default class DropDown extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        items: PropTypes.array.isRequired,
        onOpen: PropTypes.func,
        onClose: PropTypes.func,
        children: PropTypes.object,
        ignoreOutsideClickClass: PropTypes.string
    };

    static defaultProps = {
        onOpen: () => {},
        onClose: () => {}
    };

    state = {
        isOpen: false,
        styles: null
    };

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = (event) => {
        const domNode = ReactDOM.findDOMNode(this);
        const isInnerClick = domNode && domNode.contains(event.target);
        const ignoreClick = this.props.ignoreOutsideClickClass &&
            event.target.classList.contains(this.props.ignoreOutsideClickClass);

        if (!isInnerClick && !ignoreClick && this.state.isOpen) {
            this.close();
        }
    };

    isOpen = () => {
        return this.state.isOpen;
    };

    toggle = (params) => {
        if (this.state.isOpen) this.close();
        else this.open(params);
    };

    open = (params = {style: null}) => {
        this.setState({isOpen: true, styles: params.style}, this.props.onOpen);
    };

    close = () => {
        this.setState({isOpen: false}, this.props.onClose);
    };

    render() {
        const {className, items} = this.props;
        const {isOpen, styles} = this.state;

        return isOpen ? (
            <div {...cls('', '', className)} style={styles}>
                <div {...cls('list')} role='listbox'>
                    {items.map(({
                        link,
                        label,
                        disabled,
                        onClick = () => {},
                        closeOnClick = () => {},
                        danger,
                        value
                    }, itemIndex) => link ? (
                        <Link
                            key={itemIndex}
                            {...cls('list-item', {disabled, danger})}
                            to={link}
                            role='option'
                        >{label}</Link>
                    ) : (
                        <div
                            key={itemIndex}
                            {...cls('list-item', {disabled, danger})}
                            onClick={() => {
                                onClick(value);

                                if (closeOnClick) this.close();
                            }}
                            role='option'
                        >{label}</div>
                    ))}
                </div>
            </div>
        ) : null;
    }
}
