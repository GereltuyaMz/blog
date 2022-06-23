import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
	display: flex;
	background-color: plum;
	justify-content: space-around;
`;

const Menu = styled.ul`
	display: flex;
	align-items: center;
	gap: 60px;
`;

const MenuItem = styled.li`
	list-style: none;
`;

const MenuLink = styled.a`
	color: white;
	cursor: pointer;
`;

export const Navbar = () => {
	return (
		<Nav>
			<img src="/sample-logo.png" alt="sample logo" />
			<Menu>
				<MenuItem>
					<Link href="/latest">
						<MenuLink>Latest</MenuLink>
					</Link>
				</MenuItem>
				<MenuItem>
					<Link href="/post">
						<MenuLink>Post</MenuLink>
					</Link>
				</MenuItem>
				<MenuItem>
					<Link href="/about">
						<MenuLink>About</MenuLink>
					</Link>
				</MenuItem>
			</Menu>
		</Nav>
	);
};
