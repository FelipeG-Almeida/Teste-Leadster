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
	border-bottom: 2px solid #dfe2e5;
	display: flex;
	justify-content: space-between;
	font-size: 0.9rem;
	font-weight: 500;
	padding-bottom: 18px;
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
	font-family: 'Plus Jakarta Sans', sans-serif;
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
	font-family: 'Plus Jakarta Sans', sans-serif;
	font-size: 0.9rem;
	font-weight: 500;
	margin-left: 10px;
	padding: 7px 10px;
`;

export const SelectionOption = styled.option`
	font-family: 'Plus Jakarta Sans', sans-serif;
	font-size: 0.9rem;
	font-weight: 500;
`;

export const Videos = styled.div`
	display: grid;
	gap: 30px;
	grid-template-columns: repeat(auto-fit, minmax(362px, 1fr));
	margin: 15px 0;
`;
