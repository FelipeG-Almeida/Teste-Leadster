import {
	Button,
	Buttons,
	Nav,
	Pagination,
	PaginationButton,
	Selection,
	SelectionOption,
	Videos,
	WebinarsSection,
} from './style';
import videos from '../../../videos.json';
import VideoCard from '../videoCard/videoCard';
import { useState } from 'react';
import ModalComponent from '../modal/modal';

export default function Webinars(): JSX.Element {
	interface VideoType {
		title: string;
		description: string;
		url: string;
	}

	const [activeButton, setActiveButton] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const [selectedVideo, setSelectedVideo] = useState({
		title: '',
		description: '',
		url: '',
	});

	function handleClickButton(index: number) {
		setActiveButton(index);
	}

	function handleVideoClick(video: VideoType) {
		setSelectedVideo(video);
		setShowModal(true);
	}

	function videoList(): JSX.Element[] {
		const videoCards = [];

		for (let i = (activeButton - 1) * 9; i < activeButton * 9; i++) {
			const video = videos[i];
			videoCards.push(
				<VideoCard
					key={video.title}
					description={video.description}
					onClick={() => handleVideoClick(video)}
				/>
			);
		}
		return videoCards;
	}

	return (
		<WebinarsSection>
			<Nav>
				<Buttons>
					<li>
						<Button>Agências</Button>
					</li>
					<li>
						<Button>Chatbot</Button>
					</li>
					<li>
						<Button>Marketing Digital</Button>
					</li>
					<li>
						<Button>Geração de Leads</Button>
					</li>
					<li>
						<Button>Mídia Paga</Button>
					</li>
				</Buttons>
				<div>
					<span>Ordenar por</span>
					<Selection>
						<SelectionOption>Data de Publicação</SelectionOption>
						<SelectionOption>
							Número de Visualizações
						</SelectionOption>
					</Selection>
				</div>
			</Nav>
			<Videos>{videoList()}</Videos>
			<Pagination>
				<span>Página</span>
				<PaginationButton
					isActive={activeButton === 1}
					onClick={() => handleClickButton(1)}
				>
					1
				</PaginationButton>
				<PaginationButton
					isActive={activeButton === 2}
					onClick={() => handleClickButton(2)}
				>
					2
				</PaginationButton>
				<PaginationButton
					isActive={activeButton === 3}
					onClick={() => handleClickButton(3)}
				>
					3
				</PaginationButton>
				<PaginationButton
					isActive={activeButton === 4}
					onClick={() => handleClickButton(4)}
				>
					4
				</PaginationButton>
			</Pagination>
			{showModal && (
				<ModalComponent
					onClose={() => setShowModal(false)}
					title={selectedVideo.title}
					description={selectedVideo.description}
					url={selectedVideo.url}
				/>
			)}
		</WebinarsSection>
	);
}
