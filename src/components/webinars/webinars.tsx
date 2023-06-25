import {
	Button,
	Buttons,
	Nav,
	Selection,
	SelectionOption,
	Videos,
	WebinarsSection,
} from './style';
import videos from '../../../videos.json';
import VideoCard from '../videoCard/videoCard';

export default function Webinars(): JSX.Element {
	function videoList(): JSX.Element[] {
		const videoCards = [];

		for (let i = 0; i < 9; i++) {
			const video = videos[i];
			videoCards.push(<VideoCard key={video.title} description={video.description} />);
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
		</WebinarsSection>
	);
}
