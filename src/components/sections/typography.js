import React from 'react'
import styled from 'styled-components';

import GroupTitle from '../group-title';
import VariableList from '../variable-list';

const colorVars = [
    {
        name: '$c-black',
        value: '#000',
    },
    {
        name: '$c-white',
        value: '#fff',
    },
];

const getFonts = (data) => {
    return data.map((group) =>
        <div>
            <GroupTitle title={group.title} />
            <VariableList variables={colorVars} />
            <div>
                {getFont(group.options)}
            </div>
        </div>
    );
}

const getColor = (data) => {
    return data.map((heading) =>
        <div>

        </div>
    );
}

const Typography = props => (
    <div>
        {getFonts(props.data)}
    </div>
)

export default Typography;

/*
    Styles
*/