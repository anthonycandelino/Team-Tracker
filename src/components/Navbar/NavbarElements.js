import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';

export const Nav = styled.nav` 
    background: #f8f9fa;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 999;
    box-shadow: 0 6px 5px -5px #999;
`;

export const NavLink = styled(Link)` 
    background: #f8f9fa;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    h1 {
        font-size: 30px;
    }
    &.active {
        color: #2191bb;
    }
`;


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display:none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;
