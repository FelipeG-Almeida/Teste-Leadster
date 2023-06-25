import Thumb from '@/assets/thumbnail.png';
import Image from 'next/image';

interface VideoCardProps {
	description: string;
  }

export default function VideoCard({ description }: VideoCardProps): JSX.Element {
	return (
		<figure>
			<Image src={Thumb} alt="Thumbnail" />
			<figcaption>{description}</figcaption>
		</figure>
	);
}
