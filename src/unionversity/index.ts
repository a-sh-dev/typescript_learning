import courses from "./courses";
import studyGroups from "./studyGroups";
import { Course, SearchEventOptions, StudyGroup } from "./types";

const searchEvents = (options: SearchEventOptions) => {
  const events: (Course | StudyGroup)[] =
    options.eventType === "courses" ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return event.id === options.query;
    }
    if (typeof options.query === "string") {
      return event.keywords.includes(options.query);
    }
  });
};

let enrolledEvents: (Course | StudyGroup)[] = [];

const enroll = (event: Course | StudyGroup) => {
  enrolledEvents = [...enrolledEvents, event];
};

const searchResults = searchEvents({ query: "art", eventType: "groups" });

console.log(searchResults);

enroll(searchResults[0]);

console.log(enrolledEvents);
