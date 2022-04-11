import React, { useRef, useState, useEffect } from 'react';
import D3SkillsCloud from './D3SkillsCloud';

const SkillsBucketWrapper = ({name, skillsData}) => {
	const skillsArea = useRef(null)
	const [skills, setSkills] = useState(null)

	useEffect(() => {
		if (!skills) {
			setSkills(new D3SkillsCloud(skillsArea.current, name, skillsData))
		} else {
			skills.update(name, skillsData)
		}
	}, [skills, name, skillsData])

	return (
		<div className='skills-area' ref={skillsArea} style={{width: '100%', height: '100%'}}></div>
	)
}

export default SkillsBucketWrapper
