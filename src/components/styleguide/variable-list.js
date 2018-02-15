import React from 'react'
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { solarizedDark } from 'react-syntax-highlighter/styles/prism';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import Button from './button';

const getVariables = (variables) => {
    let code = '';

    code += variables.map((variable) =>
        `${variable.name}: ${variable.value};`
    ).join('\n');

    return code;
}

const VariableList = props => (
    <CodeBlock>
        <Accordion>
            <AccordionItem>
                <AccordionItemTitle>
                    <Button fullWidth>Show Variables</Button>
                </AccordionItemTitle>
                <AccordionItemBody>
                    <SyntaxHighlighter language='sass' style={solarizedDark}>
                        {props.variables ? getVariables(props.variables) : 'No variables found.'}
                    </SyntaxHighlighter>
                </AccordionItemBody>
            </AccordionItem>
        </Accordion>
    </CodeBlock>
)

export default VariableList

/*
    Styles
*/
const CodeBlock = styled.div`
    margin-bottom: 50px;

    pre {
        margin-bottom: -20px;
    }

    [aria-hidden="true"] {
        display: none;
    }
`;