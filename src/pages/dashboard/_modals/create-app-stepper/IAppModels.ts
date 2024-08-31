export interface IAppBasic {
  appName: string;
  appType: 'Quick Online Courses' | 'Face to Face Discussions' | 'Full Intro Training';
}

export type TAppFramework = 'HTML5' | 'ReactJS' | 'Angular' | 'Vue';

export interface IAppDatabase {
  databaseName: string;
  databaseSolution: 'MySQL' | 'Firebase' | 'DynamoDB';
}

export type TAppStorage = 'Basic Server' | 'AWS' | 'Google';

export interface ICreateAppData {
  appBasic: IAppBasic;
  appDatabase: IAppDatabase;
  appFramework: TAppFramework;
  appStorage: TAppStorage;
}

export const defaultCreateAppData: ICreateAppData = {
  appBasic: { appName: '', appType: 'Quick Online Courses' },
  appDatabase: { databaseName: 'db_name', databaseSolution: 'MySQL' },
  appFramework: 'HTML5',
  appStorage: 'Basic Server',
};
