import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import { Root } from 'javascripts/components';
import {
  Home,
  Speakers,
  Schedules,
  Sponsors,
  Transport,
  Unconf,
  Staff,
  Travel,
} from 'javascripts/pages';

function scrollToTop() {
  window.scrollTo(0,0);
}
export default () => {
  return (
    <Route path="/" component={Root}>
      <IndexRoute component={Home} onEnter={scrollToTop} />
      <Route path="schedules" component={Schedules} onEnter={scrollToTop}/>
      <Route path="speakers" component={Speakers} onEnter={scrollToTop} />
      <Route path="sponsors" component={Sponsors} onEnter={scrollToTop} />
      <Route path="staff" component={Staff} onEnter={scrollToTop} />
      <Route path="transport" component={Transport} onEnter={scrollToTop} />
      <Route path="Taipei" component={Travel} onEnter={scrollToTop} />
      <Route path="side_event" component={Unconf} onEnter={scrollToTop} />
    </Route>
  );
}
