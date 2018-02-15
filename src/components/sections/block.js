import React from 'react'
import styled from 'styled-components';

import GroupTitle from '../styleguide/group-title';
import VariableList from '../styleguide/variable-list';

const getBlocks = function(data) {
    if (!data) {
        return false;
    }

    return data.map(group =>
        <div id={group.title.replace(' ', '-')} key={group.title}>
            <GroupTitle title={group.title} />
            {group.subtitle ? <SubTitle>{group.subtitle}</SubTitle> : ''}
            {/* <VariableList variables={colorVars} /> */}
            <div dangerouslySetInnerHTML={{ __html: group.html }} />
        </div>
    );
}

const Block = (props) =>  (
    <div>
        {getBlocks(props.data)}
    </div>
)

export default Block;

/*
    Styles
*/
const SubTitle = styled.h4`
    position: relative;
    margin: -20px 0 20px;
    padding: 30px 10px 10px;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    background-color: var(--sg-background-color);
    border-radius: 6px;

    &::before {
        content: 'Description';
        position: absolute;
        top: 2px;
        left: 2px;
        padding: 2px 5px;
        font-size: 10px;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: black;
        background: white;
        border-radius: 4px;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
    }
`