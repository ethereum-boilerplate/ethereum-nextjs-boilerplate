import React from "react";
import { Layout } from "antd";
import Text from "antd/lib/typography/Text";

import Account from "./Account";
import Chains from "./Chains";
import TokenPrice from "./TokenPrice";
import NativeBalance from "./NativeBalance";
import MenuItems from "./MenuItems";
import Logo from "./Logo";

import "antd/dist/antd.css";
import "styles/style.module.css";

const { Header, Footer } = Layout;

const styles = {
	content: {
		display: "flex",
		justifyContent: "center",
		fontFamily: "Roboto, sans-serif",
		color: "#041836",
		marginTop: "130px",
		padding: "10px",
	},
	header: {
		position: "fixed",
		zIndex: 1,
		width: "100%",
		background: "#fff",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		fontFamily: "Roboto, sans-serif",
		borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
		padding: "0 10px",
		boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
	},
	headerRight: {
		display: "flex",
		gap: "20px",
		alignItems: "center",
		fontSize: "15px",
		fontWeight: "600",
	},
};

function BaseLayout({ children }) {
	return (
		<Layout style={{ height: "100vh", overflow: "auto" }}>
			<Header style={styles.header}>
				<Logo />
				<MenuItems />
				<div style={styles.headerRight}>
					<Chains />
					<TokenPrice
						address='0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'
						chain='eth'
						image='https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/'
						size='40px'
					/>
					<NativeBalance />
					<Account />
				</div>
			</Header>
			<div style={styles.content}>{children}</div>
			<Footer style={{ textAlign: "center" }}>
				<Text style={{ display: "block" }}>
					⭐️ Please star this{" "}
					<a
						href='https://github.com/ethereum-boilerplate/ethereum-boilerplate/'
						target='_blank'
						rel='noopener noreferrer'>
						boilerplate
					</a>
					, every star makes us very happy!
				</Text>

				<Text style={{ display: "block" }}>
					🙋 You have questions? Ask them on the {""}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29'>
						Moralis forum
					</a>
				</Text>

				<Text style={{ display: "block" }}>
					📖 Read more about{" "}
					<a
						target='_blank'
						rel='noopener noreferrer'
						href='https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplate'>
						Moralis
					</a>
				</Text>
			</Footer>
		</Layout>
	);
}

export default BaseLayout;
