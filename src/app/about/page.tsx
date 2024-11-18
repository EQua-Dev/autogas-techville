import Hero from '@/components/Hero'
import IntroTextSection from '@/components/IntroTextSection'
import ManagementTeam from '@/components/ManagementTeam'
import Milestones from '@/components/Milestones'
import MissionVisionCard from '@/components/MissionVisionCard'
import Sustainability from '@/components/Sustainability'
import { milestonesText, teamMembers } from '@/constants'
import React from 'react'

const AboutPage = () => {
  return (
    <main className="bg-bgcolor">
 <Hero />
 <MissionVisionCard />
 <Milestones />
 <IntroTextSection texts={[milestonesText]} />
 <ManagementTeam teamMembers={teamMembers} />
 <Sustainability />
    </main>
   
   
   
   
  )
}

export default AboutPage