import { axiosClient } from '@/api/axiosClient';
import { FileUploadModel, INetworkResponse } from '@/models';

const uploadAPI = {
  upload(
    formData: FormData,
    onUpload?: (progressEvent: ProgressEvent) => void,
    onDownload?: (progressEvent: ProgressEvent) => void
  ): Promise<INetworkResponse<FileUploadModel>> {
    const url = 'https://upload-service.vietmyipc.com/upload-service/api/v1/upload';
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
      onDownloadProgress: onDownload,
      onUploadProgress: onUpload,
    };

    return axiosClient.post(url, formData, config);
  },
};

export { uploadAPI };
