import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ZoomableImage(props) {
	return (
		<Zoom overlayBgColorEnd="hsl(0, 0%, 0%, 0.95)">
			<img alt={props.alt} {...props} />
			{/* alt prop must be set here explicitly, else there's a warning */}
		</Zoom>
	);
}
