import React from "react";
import InchDex from "components/InchDex";
import { Tabs } from "antd";

function OneInch() {
	return (
		<Tabs defaultActiveKey='1' style={{ alignItems: "center" }}>
			<Tabs.TabPane tab={<span>Ethereum</span>} key='1'>
				<InchDex chain='eth' />
			</Tabs.TabPane>
			<Tabs.TabPane tab={<span>Binance Smart Chain</span>} key='2'>
				<InchDex chain='bsc' />
			</Tabs.TabPane>
			<Tabs.TabPane tab={<span>Polygon</span>} key='3'>
				<InchDex chain='polygon' />
			</Tabs.TabPane>
		</Tabs>
	);
}

export default OneInch;
