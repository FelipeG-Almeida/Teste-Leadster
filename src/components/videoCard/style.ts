import styled from 'styled-components';

export const ImageWrapper = styled.div`
	border-radius: 20px 20px 0 0;
	overflow: hidden;
	position: relative;

	> img {
		display: block;
		height: auto;
		width: 100%;
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(154, 211, 253, 0.5);
		opacity: 0;
		transition: opacity 0.3s ease;
	}
`;

export const Card = styled.figure`
	box-sizing: border-box;
	border-radius: 20px;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
		rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
	cursor: pointer;
	transition: 0.25s all;
	width: 300px;
	&:hover {
		transform: scale(1.025);
	}
	&:hover ${ImageWrapper}::before {
		opacity: 1;
	}
	@media screen and (max-width: 767px) {
		width: 280px;
	}
`;

export const Caption = styled.figcaption`
	color: var(--dark-blue);
	font-size: 0.9rem;
	font-weight: 600;
	padding: 20px 30px;
	width: 300px;
	${Card}:hover & {
		color: var(--blue);
	}
	@media screen and (max-width: 767px) {
		font-size: 0.8rem;
		width: 280px;
	}
`;
