import React from 'react'
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';

const getSectionList = (sections) => {
    return sections.map(section => {
        return section.title.replace(' ', '-');
    });
}

const getNavItems = sections => {
    return sections.map(section => {
        const subnav = section.groups.map(group => {
            return <li><a href={'#' + group.title.replace(' ', '-')}>{group.title}</a></li>
        });

        const subnavHTML = subnav ? <NavSubMenu>{subnav}</NavSubMenu> : '';

        return (
            <li>
                <a href={'#' + section.title.replace(' ', '-')}>{section.title}</a>
                {subnavHTML}
            </li>
        );
    });
}

const SectionNav = props => (
    <NavList>
        <Scrollspy items={getSectionList(props.sections)} currentClassName="is-current">
            {getNavItems(props.sections)}
        </Scrollspy>
    </NavList>
)

export default SectionNav


/*
    Styles
*/

const NavList = styled.div`
    position: sticky;
    top: 0;

    ul {
        padding-left: 0;
        list-style: none;
    }

    li.is-current > a {
        color: var(--color-primary);
        background-color: var(--sg-border-color);
    }

    li.is-current {
        ul {
            display: block;
        }
    }

    a {
        display: block;
        text-decoration: none;
        padding: 7px 20px;
        font-family: var(--sg-font-family);
        font-weight: bold;

        &:visited {
            color: inherit;
        }

        &:hover {
            text-decoration: none;
            background: var(--sg-border-color);
            color: var(--color-primary);
        }
    }
`;

const NavSubMenu = styled.ul`
    display: none;
    background-color: #ddd;

    a {
        padding-left: 30px; /* indent further than normal nav links */
        font-weight: normal;
    }
`