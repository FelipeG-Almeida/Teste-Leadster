import styled from 'styled-components';

export const ModalWrapper = styled.div`
	height: 600px;
	width: 600px;
	z-index: 100;
`;

export const Modal = styled.div`
	background: #fff;
	border-radius: 15px;
	border-top: 5px solid var(--blue);
	height: 100%;
	width: 100%;
	z-index: 100;
`;

export const ModalOverlay = styled.div`
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	height: 100vh;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 100;
`;

export const ModalHeader = styled.div`
	padding: 30px 10%;
	position: relative;
	text-align: center;
	width: 100%;
`

export const ModalHeaderText = styled.h3`
	color: var(--dark-blue);
	font-size: 1.5rem;
	font-weight: 600;
`

export const CloseButton = styled.a`
	color: #838ead;
	font-size: 1.25rem;
	position: absolute;
	top: 10%;
	right: 3%;
`

export const ModalDetails = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 30px;
	row-gap: 10px;
`

export const ModalTopic = styled.h4`
	border-bottom: 1px solid #e6e9eb;
	color: var(--dark-blue);
	font-size: 1rem;
	font-weight: 700;
	padding-bottom: 10px;
`

export const Description = styled.p`
	color: var(--dark-blue);
	font-size: 1rem;
`
