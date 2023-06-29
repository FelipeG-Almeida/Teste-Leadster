import Image from 'next/image';
import { Caption, Card, ImageWrapper } from './style';
import thumbnail from '@/assets/thumbnail.png';

interface VideoCardProps {
	description: string;
	onClick: () => void;
}

export default function VideoCard({
	description,
	onClick,
}: VideoCardProps): JSX.Element {
	return (
		<Card onClick={onClick}>
			<ImageWrapper>
				<Image src={thumbnail} alt="Thumbnail" />
			</ImageWrapper>
			<Caption>{description}</Caption>
		</Card>
	);
}
