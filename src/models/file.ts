export interface FileUploadModel {
  errors?: { code: string; message: string }[];
  file?: File;
  name?: string;
  progress?: number;
  size?: number;
  url?: string;
}
