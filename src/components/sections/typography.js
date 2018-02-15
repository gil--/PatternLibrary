import React from 'react'
import styled from 'styled-components';

import GroupTitle from '../styleguide/group-title';

const canUseDOM = !!(
    (typeof window !== 'undefined' &&
        window.document && window.document.createElement)
);

class Typography extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            text: event.target.value || '',
            properties:  {}
        });
    }

    getProperties(properties) {
        const cssProperties = {};

        for (const property of Object.keys(properties)) {
            if (properties[property].includes('var')) {
                let cssVariable = properties[property].replace('var(', '');
                cssVariable = cssVariable.replace(')', '');
                cssProperties[property] = canUseDOM ? window.getComputedStyle(document.documentElement).getPropertyValue(cssVariable).trim(' ') : cssVariable;
            } else {
                cssProperties[property] = properties[property];
            }
        }

        return cssProperties['font-family'] + ' ' + cssProperties['font-weight'] + ', ' + cssProperties['font-size'] + ', ' + cssProperties['line-height'] + ' Line Height, ' + cssProperties['letter-spacing'] + ' Letter Spacing, ' + cssProperties['color'];
    }

    getOption(options) {
        return options.map((option, index) => {
            const TypographyTag = `${option.title}`;
            let typographyHtml = '';
            const html = { __html: option.html };
            const properties = {};

            if (option.title == 'Body') {
                typographyHtml = <div dangerouslySetInnerHTML={html} />
            } else {
                const typographyClasses = option.hasOwnProperty('class') ? `content ${option.class}` : 'content';
                typographyHtml = <TypographyTag className={typographyClasses}>
                        { this.state.text || option.html }
                    </TypographyTag>
            }

            return (
                <TypographyBlock>
                    {typographyHtml}
                    <StyleguideNotice>{this.getProperties(option.properties)}</StyleguideNotice>
                    <StyleguideNotice>{option.subtitle}</StyleguideNotice>
                </TypographyBlock>
            );
        });
    }

    getBlocks(data) {
        if (!data) {
            return false;
        }

        return data.map(group =>
            <div id={group.title.replace(' ', '-')} key={group.title}>
                <GroupTitle title={group.title} />
                {/* <VariableList variables={colorVars} /> */}
                {group.title != 'Body' && <TextInput type="text" placeholder="Type new heading here..." value={this.state.text} onChange={this.handleInputChange} /> }

                {this.getOption(group.options)}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.getBlocks(this.props.data)}
            </div>
        )
    }
}

export default Typography;

/*
    Styles
*/
const TypographyBlock = styled.div`
    margin-bottom: 40px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const StyleguideNotice = styled.h6`
    margin-top: 15px;
    margin-bottom: 5px;
    color: #6c6c6c;
    font-family: var(--sg-font-family);

    & + & {
        margin-top: 5px;
    }
`

const TextInput = styled.input.attrs({
    type: 'text'
})`
    width: 100%;
    max-width: 100% !important; /* override stheme css */
    min-height: 75px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 24px;
    background: #eee;
    border: 0;
    box-sizing: border-box;
`