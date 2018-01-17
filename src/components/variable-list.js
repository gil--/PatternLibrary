import React from 'react'
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { solarizedDark } from 'react-syntax-highlighter/styles/prism';

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
        <Button primary type="button">Show Variables</Button>
        <SyntaxHighlighter language='sass' style={solarizedDark}>
            {getVariables(props.variables)}
        </SyntaxHighlighter>
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

    button {
        margin: 0 auto;
        transform: translateY(50%);

        &:hover,
        &:focus {
            transform: translateY(50%) scale(1.1);
        }
    }
`;