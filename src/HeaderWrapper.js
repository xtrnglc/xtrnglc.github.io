import React, { useRef, useState, useEffect } from 'react';
import D3Header from './D3Header';

const HeaderWrapper = ({}) => {
	const headerArea = useRef(null)
	const [header, setHeader] = useState(null)

	useEffect(() => {
		if (!header) {
			setHeader(new D3Header(headerArea.current))
		}
	}, [header])

	return (
		<div className="header-area" ref={headerArea} style={{textAlign: 'center', width: '100%', height: '100%'}}></div>
	)
}

export default HeaderWrapper
