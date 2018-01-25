import React from 'react'
import styled, { injectGlobal } from 'styled-components';

import GroupTitle from '../group-title';
import VariableList from '../variable-list';

const colorVars = [];

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

                document.documentElement.style.setProperty(`--${colorName}`, color.properties.color);
            });
        });

        this.setState({ colorVariables: colors });
    }

    getColors(data) {
        return data.map((group, index) =>
            <div>
                <GroupTitle title={group.title} />
                <VariableList variables={this.state.colorVariables[index]} />
                <ColorList>
                    {this.getColor(group.options)}
                </ColorList>
            </div>
        );
    }

    getColor(data) {
        return data.map((color) => {
            return (
                <Color>
                    <ColorFill color={color.properties.color}>
                        <Hex color={color.properties.color}>{color.properties.color}</Hex>
                    </ColorFill>
                    <ColorName>{color.title}</ColorName>
                    <ColorUsage>{color.subtitle}</ColorUsage>
                </Color>
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
const ColorList = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    margin: 0;
    list-style: none;
`;

const Color = styled.li`
    margin: 0;
    padding: 20px;
    text-align: left;
    box-shadow: 0 0 20px #0000001a;
    transition: transform .2s ease-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const ColorFill = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    margin-bottom: 10px;
    padding-bottom: 100%;
    background-color: ${props => props.color};
`;

const ColorName = styled.h3`
    margin-bottom: 10px;
`;

const ColorUsage = styled.h4`
    margin-bottom: 0;
    font-size: 12px;
    font-weight: normal;
`;

const Hex = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 50%;
    padding: 5px 15px;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    font-family: Helevetica, Sans-Serif;
    color: ${props => props.color};
    background: white;
    outline: 3px solid white;
    outline-offset: 2px;
`;