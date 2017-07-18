### `schedules_by_track.json`

```
{
  "time": "10:45-11:15",
  "expandable": true,
  "event": {
    "venue": "201B+C",
    "speaker": "Dr Rebecca Rumbul",
    "title": "What is Civic Technology? And how and why is mySociety measuring its impact?",
    "abstract": "Rebecca presents mySociety’s research projects which strive to evaluate the impacts (both positive and negative) of Civic Technologies in many countries worldwide.",
    "bio": "oiasudoiu"
  }
},
```

- expandable: when false, if `event` is not string, there will be no sidebar. when not set, if `event` is not string, there will be sidebar
- event: can be object or string
- venue: must be defined in `index.jsx` `const venues`, otherwise will fail to render
- speaker: any string is accepted, but to show biography from `speakers.json`, the string must match the `name` field in `speakers.json`
- title: title of the event
- abstract: abstract of the event
- bio: **deprecated** field, previously supported in summit.g0v.tw, have no effect for CTF.
