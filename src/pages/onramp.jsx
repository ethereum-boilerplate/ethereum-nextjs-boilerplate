import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Ramper from "components/Ramper";

function OnRamp() {
	const [ramper, setRamper] = useState();
	const { Moralis } = useMoralis();

	useEffect(() => {
		if (!Moralis?.["Plugins"]?.["fiat"]) return null;
		async function initPlugin() {
			Moralis.Plugins.fiat
				.buy({}, { disableTriggers: true })
				.then((data) => setRamper(data.data));
		}
		initPlugin();
		console.log("ramper", ramper);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [Moralis.Plugins]);
	return <Ramper ramper={ramper} />;
}

export default OnRamp;
