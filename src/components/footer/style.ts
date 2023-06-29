import styled, { css } from "styled-components";

export const FooterSection = styled.footer`
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    padding: 75px 10%;
    row-gap: 10px;
	@media screen and (max-width: 1439px) {
		padding: 75px 5%;
	}
`

const textStyle = css`
    color: #627398;
    font-size: 1rem;
    font-weight: 500;
`

export const Text = styled.p`
    ${textStyle};
`

export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    margin: 40px 0;
    width: 100%;
`

export const NavLinks = styled.nav`
    display: flex;
    flex-direction: column;
    row-gap: 25px;
`

export const NavTitle = styled.p`
    color: var(--dark-blue);
    font-size: 1.05rem;
    font-weight: 700;
    margin-bottom: 20px;
`

export const Link = styled.a`
    ${textStyle};
    cursor: pointer;
    font-size: 0.9rem;
`

export const Copyright = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const CopyrightText = styled.p`
    ${textStyle};
    font-size: 0.8rem;
`

export const Address = styled.address`
    ${textStyle};
    font-size: 0.8rem;
`

export const BlueSpan = styled.span`
    color: var(--blue);
    font-weight: 700;
`
