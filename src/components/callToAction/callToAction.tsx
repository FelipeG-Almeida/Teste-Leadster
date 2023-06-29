import Image from 'next/image';
import infoGraph from '@/assets/comparativo_img_CTA.png';
import selo from '@/assets/selo_RD.png';
import noCard from '@/assets/no-card-dark.webp';
import rating from '@/assets/rating.webp';
import {
	CTASection,
	ImageWrapper,
	Title,
	Paragraph,
	Details,
	CTAButton,
	CTADetails,
	Small,
} from './style';

export default function CallToAction(): JSX.Element {
	return (
		<CTASection>
			<ImageWrapper>
				<Image
					src={infoGraph}
					alt="Infográfico Leadster"
					fill
					style={{ objectFit: 'contain' }}
				/>
			</ImageWrapper>
			<div>
				<Title>
					Pronto para triplicar sua <b>Geração de Leads?</b>
				</Title>
				<Paragraph>
					Criação e ativação em <b>4 minutos.</b>
				</Paragraph>
				<Details>
					<CTAButton>Ver Demonstração</CTAButton>
					<Image src={selo} alt="Selo top 10 apps mais usados" />
					<CTADetails>
						<Image src={noCard} alt="" />
						<Small>
							<b>Não</b> é necessário Cartão de Crédito |
						</Small>
					</CTADetails>
					<CTADetails>
						<Image width={80} src={rating} alt="Nota 4.9 de 5" />
						<Small>
							<b>4.9</b>/5 média de satisfação
						</Small>
					</CTADetails>
				</Details>
			</div>
		</CTASection>
	);
}
