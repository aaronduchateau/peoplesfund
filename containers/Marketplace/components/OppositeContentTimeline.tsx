import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { MilestoneFunding, MilestoneDetail, CreatorItemFunding, ProgressiveFunding } from '../utils/types';
import dayjs, { Dayjs } from 'dayjs';

const dollarUSLocale = Intl.NumberFormat('en-US');

const OppositeContentTimeline = ({timelineData, onEnterEditMode, indexId}:{timelineData: MilestoneDetail[], onEnterEditMode: (id: number) => void, indexId: number}) => {
  return (
    <Timeline>
      {timelineData && timelineData.map((item, i) => (  
        <TimelineItem style={{'cursor': 'pointer'}} onClick={()=>{onEnterEditMode(i)}}>
            <TimelineOppositeContent color={indexId == i ? 'green' : ''}>
            ${dollarUSLocale.format(parseInt(item.amount))}
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent color={indexId == i ? 'green' : ''}>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-date">{dayjs(item.dateTrig).format('MM/DD/YYYY')}</div>
            </TimelineContent>
        </TimelineItem>
         ))}
    </Timeline>
  );
}

export default OppositeContentTimeline;
