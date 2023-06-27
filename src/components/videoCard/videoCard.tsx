import Image from 'next/image';
import { Caption, Card, ImageWrapper } from './style';
import thumbnail from '@/assets/thumbnail.png';

interface VideoCardProps {
	description: string;
}

export default function VideoCard({
	description,
}: VideoCardProps): JSX.Element {
	return (
		<Card>
			<ImageWrapper>
				<Image src={thumbnail} alt="Thumbnail" />
			</ImageWrapper>
			<Caption>{description}</Caption>
		</Card>
	);
}
