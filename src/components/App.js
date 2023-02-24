import '../styles/App.css';
import SessionsByDuration from './SessionsByDuration';
import LifetimeMetrics from './LifetimeMetrics';
import '@tremor/react/dist/esm/tremor.css';
import Milestones from './Milestones';
import { ColGrid } from '@tremor/react';
import useProcessData from '../hooks/useProcessData';
import RepeatPartners from './RepeatPartners';
import Logo from './Logo';
import WelcomeMessage from './WelcomeMessage';

export default function App() {
  const [
    loading, [
      totalSessions, 
      totalHours, 
      totalPartners,
      firstSessionDate,
      maxHoursADay,
      sessionsByDurationArr,
      milestonesArr,
      repeatPartnersArr,
    ]
  ] = useProcessData();
  return (
    <div className={'App'}>
      <Logo />
      <WelcomeMessage/>
      <br/>
      <br/>
      <LifetimeMetrics data={[
        loading, [
          totalSessions, 
          totalHours,
          totalPartners,
          firstSessionDate,
          maxHoursADay,
        ]
      ]}/> 
      <br/>
      <ColGrid numColsLg={ 3 } gapX="gap-x-6" gapY="gap-y-6">
        <SessionsByDuration data={[loading, [sessionsByDurationArr, totalSessions]]}/>
        <Milestones data={[loading, milestonesArr]}/>
        <RepeatPartners data={[loading, repeatPartnersArr]}/>
      </ColGrid>
    </div>
  )
}
