export type Sermon = {
  title: string;
  speaker: string;
  date: string;
  scripture?: string;
  summary: string;
  keyPoints?: string[];
  youtube?: string;
  link?: string;
  thumbnail?: string;
};

export const sermons: Sermon[] = [];