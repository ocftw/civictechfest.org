### `schedules_by_track.json`

```
{
  "time": "10:45-11:15",
  "expandable": true,
  "event": {
    "venue": "201B+C",
    "moderator": "Dr. Rebecca Rumbul",
    "speaker": ["Donald Trump", "Emmanuel Macron", "Angela Merkel"],
    "title": "What is Civic Technology? And how and why is mySociety measuring its impact?",
    "abstract": "Rebecca presents mySociety’s research projects which strive to evaluate the impacts (both positive and negative) of Civic Technologies in many countries worldwide.",
    "bio": "oiasudoiu"
  }
},
```

- expandable: when false, if `event` is not string, there will be no sidebar. when not set, if `event` is not string, there will be sidebar
- event: can be object or string
- venue: must be defined in `index.jsx` `const venues`, otherwise will fail to render
- speaker: may be in string or array of strings. Any string is accepted, but to show biography from `speakers.json`, the string must match the `name` field in `speakers.json`.
- moderator: same as speaker
- title: title of the event
- abstract: abstract of the event
- bio: **deprecated** field, previously supported in summit.g0v.tw, have no effect for CTF.
