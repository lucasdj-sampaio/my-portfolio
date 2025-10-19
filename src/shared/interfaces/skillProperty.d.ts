import { SkillLevel } from 'shared/types/skilllevel';

export interface ISkillProperty {
  Title:
    | 'JavaScript'
    | 'React'
    | 'C#'
    | 'TypeScript'
    | 'SQL'
    | 'No SQL'
    | 'Python'
    | 'Node'
    | 'AWS';
  Porcent: number;
  Level: SkillLevel;
}
