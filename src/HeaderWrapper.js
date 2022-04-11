import React, { useRef, useState, useEffect } from 'react';
import D3Header from './d3/D3Header';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const HeaderWrapper = ({}) => {
	const headerArea = useRef(null)
	const [header, setHeader] = useState(null)

	useEffect(() => {
		if (!header) {
			setHeader(new D3Header(headerArea.current))
		}
	}, [header])

	return (
		<Row className="header">
			<Col sm={3}>
				<div style={{marginTop: '10%', marginBottom: '5%'}}>
				<h1 style={{fontSize: '5em'}}>Trung Le</h1>
				</div>
			</Col>
			<Col sm={9}>
				<div className="header-area" ref={headerArea} style={{textAlign: 'left', width: '100%', height: '100%'}}>
				</div>

			</Col>

		</Row>
	)
}

export default HeaderWrapper
