import React from 'react';
import styled from 'styled-components';

import GroupTitle from '../styleguide/group-title';
import Cards from '../styleguide/cards';
import Card from '../styleguide/card';

const getIcons = function (icons) {
    if (!icons) {
        return false;
    }

    return icons.map((icon, index) => {
        const svgUrl = `svg/${icon.id}.svg`;
        const subTitle = `#${icon.id}`;

        return (
            <Card index={index} color="#e7e7e7" title={icon.title} label={subTitle}>
                <IconSvg src={svgUrl} width="50" height="50" />
            </Card>
        )
    }
    );
}

const getIconGroups = function (groups) {
    if (!groups) {
        return false;
    }

    return groups.map(group =>
        <div id={group.title.replace(' ', '-')} key={group.title}>
            <GroupTitle title={group.title} />
            <Cards>
                {getIcons(group.options)}
            </Cards>
        </div>
    );
}

const Icons = (props) => {
    return (
        <div>
            { getIconGroups(props.data) }
        </div >
    )
}

export default Icons;

/*
    Styles
*/

const IconSvg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;