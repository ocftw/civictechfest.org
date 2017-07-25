import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import { Root } from 'javascripts/components';
import {
  Home,
  Speakers,
  Agenda,
  About,
  Venue,
  Unconf,
  Ticket,
  Travel,
} from 'javascripts/pages';

function scrollToTop() {
  window.scrollTo(0,0);
}
export default () => {
  return (
    <Route path="/" component={Root}>
      <IndexRoute component={Home} onEnter={scrollToTop} />
      <Route path="agenda" component={Agenda} onEnter={scrollToTop}/>
      <Route path="speakers" component={Speakers} onEnter={scrollToTop} />
      <Route path="about" component={About} onEnter={scrollToTop} />
      <Route path="tickets" component={Ticket} onEnter={scrollToTop} />
      <Route path="venue" component={Venue} onEnter={scrollToTop} />
      <Route path="Taipei" component={Travel} onEnter={scrollToTop} />
      <Route path="side_event" component={Unconf} onEnter={scrollToTop} />
    </Route>
  );
}
