import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Test = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPersonajes("https://rickandmortyapi.com/api/character");
	}, []);

	return (
		<div className="container">
			<div className="row">
				{!!store.personajes &&
					store.personajes.results.map((personaje, i) => {
						return (
							<div className="col-md-4" key={i}>
								<img src={personaje.image} />
								{personaje.name}
							</div>
						);
					})}
			</div>
		</div>
	);
};
