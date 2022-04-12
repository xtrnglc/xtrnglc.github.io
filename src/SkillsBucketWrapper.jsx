import React, { useRef, useState, useEffect } from 'react';
import D3SkillsCloud from './d3/D3SkillsCloud';

const SkillsBucketWrapper = ({}) => {
	const skillsArea = useRef(null)
	const [skills, setSkills] = useState(null)

	useEffect(() => {
		if (!skills) {
			setSkills(new D3SkillsCloud(skillsArea.current))
		} 
	}, [skills])

	return (
		<div className='skills-area' ref={skillsArea} style={{width: '100%', height: '100%'}}></div>
	)
}

export default SkillsBucketWrapper
