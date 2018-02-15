import React from 'react'
import styled, { injectGlobal } from 'styled-components';
import hex2rgb from 'hex2rgb';

import GroupTitle from '../styleguide/group-title';
import VariableList from '../styleguide/variable-list';
import Cards from '../styleguide/cards';
import Card from '../styleguide/card';

const colorVars = [];

// TODO: Move to util function
const canUseDOM = !!(
    (typeof window !== 'undefined' &&
        window.document && window.document.createElement)
);

class Colors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colorVariables: []
        };
    }

    componentWillMount() {
       this.setColorVariables(this.props.data);
    }

    // TODO move to util function
    getCustomPropertyName(property) {
        let cssVariable = property.replace('var(', '');
        return cssVariable = cssVariable.replace(')', '');
    }

    setColorVariables(data) {
        let colors = [];

        data.map((group, index) => {
            colors[index] = [];

            group.options.map((color) => {
                const colorName = color.title.replace(/\s+/g, '-').toLowerCase();

                colors[index].push({
                    name: `$c-${colorName}`,
                    value: color.properties.color
                });

                // if (typeof document !== "undefined") {
                //     document.documentElement.style.setProperty(`--${colorName}`, color.properties.color);
                // }
            });
        });

        this.setState({ colorVariables: colors });
    }

    getColors(data) {
        return data.map((group, index) =>
            <div id={group.title.replace(' ', '-')} key={group.title}>
                <GroupTitle title={group.title} />
                <VariableList variables={this.state.colorVariables[index]} />
                <Cards>
                    {this.getColor(group.options)}
                </Cards>
            </div>
        );
    }

    getColor(data) {
        return data.map((color, index) => {
            let colorHex = color.properties.color;
            const whiteOrBlack = hex2rgb(colorHex).yiq;
            let isCssVariable = false;
            let subtitle = color.subtitle;

            if (colorHex.includes('var')) {
                isCssVariable = true;
            }

            if (!subtitle && isCssVariable) {
                subtitle = color.properties.color;
            }

            let colorHexLabel = !isCssVariable && <Hex color={color.properties.color} backgroundColor={whiteOrBlack}>{color.properties.color}</Hex>;

            return (
                <Card index={index} color={color.properties.color} height="50%" title={color.title} subtitle={color.subtitle} label={color.properties.color} isVariable={isCssVariable}>
                    {colorHexLabel}
                </Card>
            );
        });
    }

    render() {
        return (
            <div>
                {this.getColors(this.props.data)}
            </div>
        )
    }
}

export default Colors;

/*
    Styles
*/

const Hex = styled.div.attrs({
    backgroundColor: props => (props.backgroundColor && props.backgroundColor != 'inherit')? props.backgroundColor : 'transparent',
})`
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 10px);
    padding: 10px 15px;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: bold;
    font-family: var(--sg-font-family);
    color: ${props => props.color};
    background: ${props => props.backgroundColor};
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    line-height: 1;
    box-sizing: border-box;
`;