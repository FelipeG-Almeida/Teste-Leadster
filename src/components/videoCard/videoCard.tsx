import Thumb from '@/assets/thumbnail.png';
import Image from 'next/image';
import { Caption, Card } from '../webinars/style';

interface VideoCardProps {
	description: string;
  }

export default function VideoCard({ description }: VideoCardProps): JSX.Element {
	return (
		<Card>
			<Image objectFit='cover' src={Thumb} alt="Thumbnail" />
			<Caption>{description}</Caption>
		</Card>
	);
}
