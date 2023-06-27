import { styled } from 'styled-components';

export const WebinarsSection = styled.section`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	padding: 75px 10%;
	@media screen and (max-width: 1439px) {
		padding: 75px 5%;
	}
`;

export const Nav = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 0.9rem;
	font-weight: 500;
`;

export const Buttons = styled.ul`
	display: flex;
	column-gap: 12px;
	list-style: none;
`;

export const Button = styled.button`
	background-color: #fff;
	border: 1px solid var(--dark-blue);
	border-radius: 15px;
	color: var(--dark-blue);
	cursor: pointer;
	font-family: inherit;
	font-weight: 500;
	padding: 5px 20px;
	&:hover {
		border-color: var(--blue);
		color: var(--blue);
	}
`;

export const Selection = styled.select`
	border: 1px solid var(--dark-blue);
	border-radius: 10px;
	font-family: inherit;
	font-size: 0.9rem;
	font-weight: 500;
	margin-left: 10px;
	padding: 7px 10px;
`;

export const SelectionOption = styled.option`
	font-family: inherit;
	font-size: 0.9rem;
	font-weight: 500;
`;

export const Videos = styled.div`
	border-bottom: 2px solid #dfe2e5;
	border-top: 2px solid #dfe2e5;
	display: grid;
	gap: 25px;
	grid-template-columns: repeat(auto-fit, 340px);
	justify-content: center;
	margin: 15px 0;
	padding: 75px 0;
`;

export const Pagination = styled.nav`
	align-items: center;
	column-gap: 10px;
	display: flex;
	justify-content: center;
`

export const PaginationButton = styled.button<{ isActive: boolean }>`
	background-color: #fff;
	border: ${({isActive}) => (isActive? 'solid 1px var(--blue)' : 'none')};
	border-radius: 5px;
	color: ${({isActive}) => (isActive? 'var(--blue)' : 'var(--dark-blue)')};
	cursor: pointer;
	font-family: inherit;
	font-size: 1rem;
	font-weight: ${({isActive}) => (isActive? '700' : '500')};;
	padding: 5px 10px;
`