import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";

const Title = styled.h1`
	font-size: 20px;
	color: red;
`;

export default function Home() {
	return (
		<div className={styles.container}>
			{/* <Title>My page</Title> */}
		</div>
	);
}
