import React from 'react'
import { sampleMemberData } from '../../utils/sample-data'
import MemberCard from './MemberCard'

export default {
  title: 'Components/MemberCard',
  component: MemberCard,
}

const Template = () => <MemberCard member={sampleMemberData[0]} />

export const Default = Template.bind({})
