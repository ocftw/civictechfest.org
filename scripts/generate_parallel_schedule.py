import json
from pprint import pprint

by_time = dict()

with open('app/javascripts/components/Schedule/schedules_by_track.json') as by_track_s:
    by_track = json.load(by_track_s)
    #pprint(by_track)
    for day in ("day0", "day1", "day2", "day3"):
        by_time[day] = dict()
        for event in by_track['en-US'][day]:
            if "time" in event:
                #if event["event"] is string
                if event["time"] in by_time[day]:
                    by_time[day][event["time"]].append(event)
                else:
                    by_time[day][event["time"]] = list()
                    by_time[day][event["time"]].append(event)

#    pprint(by_time)

by_time_out = dict()
for day in by_time:
    for (time,event) in sorted(by_time[day].items()):
        if day not in by_time_out.keys():
            by_time_out[day] = list()
        by_time_out[day].append({"time": time, "events": event})

pprint(by_time_out)

wrap_out = {
        "en-US": by_time_out
        }

with open('app/javascripts/components/Schedule/schedules.json', 'w') as outfile:
    json.dump(wrap_out, outfile, indent=2, sort_keys=True)
