import Image from 'next/image';
import Logo from '@/assets/logo.png';
import { BlueSpan, Desc, DivLogo, DivText, Header, TitleOne, TitleTwo } from './style';

export default function HeaderComponent(): JSX.Element {
	return (
		<Header>
			<DivLogo>
				<Image width={150} src={Logo} alt="Logo da Leadster" />
			</DivLogo>
			<DivText>
				<BlueSpan>Webinars Exclusivos</BlueSpan>
				<TitleOne>Menos Conversinha,</TitleOne>
				<TitleTwo>Mais Conversão</TitleTwo>
				<Desc>
					Conheça as estratégias que <b>mudaram o jogo</b> e
					como aplicá-las no seu negócio
				</Desc>
			</DivText>
		</Header>
	);
}
