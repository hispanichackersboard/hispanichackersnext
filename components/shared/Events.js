import globals from '../data';
import styled from 'styled-components';
import {
  FaMeetup,
  FaYoutubeSquare,
  FaFilePowerpoint,
  FaChalkboardTeacher,
  FaGithub,
  FaComments,
} from 'react-icons/fa';
import Image from 'next/image';

const EventsWrapper = styled.aside`
  display: flex;
  flex-wrap: wrap;
`;
const EventCard = styled.div`
  border-radius: 10px;
  flex: 1 1 1;
  justify-content: center;
  width: 30%;
  margin: 2rem auto;
  background: var(--pageHeaderColor);
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
  img {
    border-radius: 5px;
  }
  a {
    display: block;
  }
`;
const EventCardLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Meetup = styled(FaMeetup)`
  color: #e61b3e;
`;
const Youtube = styled(FaYoutubeSquare)`
  color: #f70000;
`;
const Powerpoint = styled(FaFilePowerpoint)`
  color: #e86900;
`;
const Powerpoint2 = styled(FaChalkboardTeacher)`
  color: #88ab75;
`;
const Chat = styled(FaComments)`
  color: #41abff;
`;

export default function Events() {
  return (
    <EventsWrapper>
      {Object.values(globals().eventsHH['2021']).map((event, index) => (
        <EventCard key={index}>
          <h3>{event.month}</h3>
          <Image
            src={
              event.titleSlide
                ? `/static/images/${event.titleSlide}`
                : '/static/images/hyped.png'
            }
            alt={event.name + event.date}
            width={480}
            height={270}
          />
          <EventCardLinks>
            {event.meetup ? (
              <a href={event.meetup} target='_blank'>
                <Meetup size={40} title='Meetup Event Page' />
              </a>
            ) : (
              ''
            )}
            {event.slides ? (
              <a href={event.slides} target='_blank'>
                <Powerpoint size={40} title='Kickoff Powerpoint Slides' />
              </a>
            ) : (
              ''
            )}
            {event.slides2 ? (
              <a href={event.slides2} target='_blank'>
                <Powerpoint2 size={40} title='Presentation Powerpoint Slides' />
              </a>
            ) : (
              ''
            )}
            {event.github ? (
              <a href={event.github} target='_blank'>
                <FaGithub size={40} title='Github Repository' />
              </a>
            ) : (
              ''
            )}
            {event.youtube ? (
              <a href={event.youtube} target='_blank'>
                <Youtube size={40} title='Youtube Replay' />
              </a>
            ) : (
              ''
            )}
            {event.zoomChat ? (
              <a href={event.zoomChat} target='_blank'>
                <Chat size={40} title='Zoom Chat' />
              </a>
            ) : (
              ''
            )}
          </EventCardLinks>
          <p>
            <u>{event.name}</u>
            <br />
            <em>Date</em>: {event.date}
            <br />
            <em>Time</em>: {event.time}
            <br />
          </p>
        </EventCard>
      ))}
    </EventsWrapper>
  );
}
