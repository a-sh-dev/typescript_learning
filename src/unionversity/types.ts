export type CourseBase = {
  id: number;
  title: string;
  keywords: string[];
  eventType: string;
};

export type Course = CourseBase & {
  studyGroupId: number;
};

export type StudyGroup = CourseBase & {
  courseId: number;
};

export type SearchEventOptions = {
  query: string | number;
  eventType: "courses" | "groups";
};
