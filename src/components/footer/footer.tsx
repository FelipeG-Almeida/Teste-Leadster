import Image from 'next/image';
import Logo from '@/assets/logo.png';
import Linkedin from '@/assets/linkedin.svg';
import Facebook from '@/assets/facebook.svg';
import Instagram from '@/assets/instagram.svg';
import {
	FooterSection,
	Text,
	Links,
	NavLinks,
	NavTitle,
	Link,
	Copyright,
	Address,
	CopyrightText,
	BlueSpan,
} from './style';

export default function Footer(): JSX.Element {
	return (
		<FooterSection>
			<Image width={270} src={Logo} alt="Logo da Leadster" />
			<Text>Transformando visitantes em clientes.</Text>
			<Links>
				<NavLinks>
					<NavTitle>Links Principais</NavTitle>
					<Link>Home</Link>
					<Link>Ferramenta</Link>
					<Link>Preços</Link>
					<Link>Contato</Link>
				</NavLinks>
				<NavLinks>
					<NavTitle>Cases</NavTitle>
					<Link>Geração de Leads B2B</Link>
					<Link>Geração de Leads em Software</Link>
					<Link>Geração de Leads em Imobiliária</Link>
					<Link>Cases de Sucesso</Link>
				</NavLinks>
				<NavLinks>
					<NavTitle>Materiais</NavTitle>
					<Link>Blog</Link>
					<Link>Parceria com Agências</Link>
					<Link>Guia Definitivo do Marketing</Link>
					<Link>Materiais Gratuitos</Link>
				</NavLinks>
				<NavLinks>
					<NavTitle>Siga a Leadster</NavTitle>
					<div>
						<Image
							width={40}
							src={Linkedin}
							alt="Linkedin Leadster"
						/>
						<Image
							width={40}
							src={Facebook}
							alt="Facebook Leadster"
						/>
						<Image
							width={40}
							src={Instagram}
							alt="Instagram Leadster"
						/>
					</div>
					<Link>
						<b>Email:</b> contato@leadster.com.br
					</Link>
					<Link>
						<b>Telefone:</b> (42) 98828-9851
					</Link>
				</NavLinks>
			</Links>
			<Copyright>
				<CopyrightText>
					Copyright © 2015 - 2022 Todos os direitos reservados |
					<BlueSpan> Leadster</BlueSpan>
				</CopyrightText>
				<Address>
					Rua José Loureiro, 464 - Centro - Curitiba PR - CEP:
					80010-000 | Termos de Uso
				</Address>
			</Copyright>
		</FooterSection>
	);
}
