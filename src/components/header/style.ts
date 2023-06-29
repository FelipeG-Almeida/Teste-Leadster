import styled from 'styled-components';
import headerAsset from '@/assets/asset-header.png';

export const Header = styled.header`
	align-items: center;
	background-color: #fff;
	display: flex;
	flex-direction: column;
`;

export const DivLogo = styled.div`
	align-items: center;
	display: flex;
	height: 75px;
`;

export const DivText = styled.div`
	align-items: center;
	background-color: var(--light-blue);
	display: flex;
	flex-direction: column;
	padding: 150px 0;
	row-gap: 5px;
	width: 100%;
	@media screen and (max-width: 767px) {
		padding: 100px 10%;
	}
`;

export const BlueSpan = styled.span`
	border: 2px solid var(--blue);
	border-radius: 15px 15px 15px 0;
	color: var(--blue);
	font-weight: 700;
	padding: 5px 20px;
	@media screen and (max-width: 767px) {
		font-size: 0.8rem;
		padding: 5px 15px;
	}
`;
export const TitleOne = styled.h2`
	color: var(--dark-blue);
	font-size: 2.5rem;
	font-weight: 500;
	@media screen and (max-width: 767px) {
		font-size: 1.5rem;
	}
`;

export const TitleTwo = styled.h2`
	background-image: url(${headerAsset?.src});
    background-position: 100% 10%;
    background-repeat: no-repeat;
	color: var(--blue);
	font-size: 5rem;
	font-weight: 700;
    text-align: center;
    width: 650px;
	@media screen and (max-width: 767px) {
		font-size: 2.25rem;
		background-position: 73% 0;
		background-size: 30px;
	}
`;

export const Desc = styled.p`
	border-top: 1px solid #c8d4dd;
	color: var(--dark-blue);
	font-weight: 500;
	margin-top: 10px;
	padding-top: 20px;
	text-align: center;
	@media screen and (max-width: 767px) {
		font-size: 0.8rem;
		padding: 20px 25px 0 25px;
	}
`;
