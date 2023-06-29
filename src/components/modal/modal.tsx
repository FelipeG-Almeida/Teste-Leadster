import {
	Modal,
	ModalHeaderText,
	ModalOverlay,
	ModalWrapper,
	CloseButton,
	ModalHeader,
	ModalDetails,
	ModalTopic,
	Description,
	ModalSpan,
} from './style';

interface ModalProps {
	onClose: () => void;
	title: string;
	description: string;
	url: string;
}

export default function ModalComponent({
	onClose,
	title,
	description,
	url,
}: ModalProps): JSX.Element {
	const handleCloseClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		onClose();
	};

	return (
		<ModalOverlay>
			<ModalWrapper>
				<Modal>
					<ModalHeader>
						<ModalHeaderText>
							<ModalSpan>Webinar:</ModalSpan> {title}
						</ModalHeaderText>
						<CloseButton href="#" onClick={handleCloseClick}>
							X
						</CloseButton>
					</ModalHeader>
					<iframe
						width="100%"
						height="315"
						src={url}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
					<ModalDetails>
						<ModalTopic>Descrição</ModalTopic>
						<Description>{description}</Description>
						<ModalTopic>Downloads</ModalTopic>
					</ModalDetails>
				</Modal>
			</ModalWrapper>
		</ModalOverlay>
	);
}
