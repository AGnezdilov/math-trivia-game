export interface CalcDataPayload {
  __v: number;
  _id: string;
  scene: string;
  title: string;
  chapter: string;
  language: string;
  isTextSet: boolean;
  matchType: string;
  contentKey: string;
  sectionKey: string;
  repetitions: number;
  requiredKey: string;
  trainingSet?: (TrainingSetEntity)[] | null;
  forceEnabled: boolean;
  sequenceType: number;
  isPracticeLevel: boolean;
  sequenceTypeText: string;
}
export interface TrainingSetEntity {
  _id: string;
  title: string;
  matchSet?: (SetItem)[] | null;
  displaySet?: (SetItem)[] | null;
  negativeSet?: (SetItem)[] | null;
}
export interface SetItem {
  _id: string;
  text: string;
  audioPath: string;
  imagePath: string;
  omitFromSet: boolean;
}
