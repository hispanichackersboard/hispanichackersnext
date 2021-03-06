import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Aside = styled.aside`
	text-align: center;
	font-size: 2rem;
	min-width: 25%;
	p {
		font-size: 1.8rem;
	}
`;
const ProfileLinks = styled.span`
	display: flex;
	justify-content: space-evenly;
	span {
		text-decoration: underline;
	}
`;
const Image1 = styled(Image)`
	height: 200%;
	width: 200%;
	border-radius: 50%;
`;
const LinkedIn = styled(FaLinkedin)`
	color: #0073b1;
`;

export default function Profile(props) {
	return (
		<Aside>
			<Image1 src={props.image} alt="Eddy" width={200} height={200} />
			<h2>{props.name}</h2>
			<ProfileLinks>
				<a href={props.linkedin} target="_blank">
					<LinkedIn size={30} />
				</a>
				<a
					href={`mailto:${props.email}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaEnvelope size={30} />
				</a>
			</ProfileLinks>
			<p>{props.bio}</p>
		</Aside>
	);
}
