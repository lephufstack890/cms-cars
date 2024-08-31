import { uploadAPI } from '@/api/upload';
import { useCallApi } from '@/hooks/useCallApi';

function useUpload() {
  const { upload: uploadAction } = uploadAPI;
  const { isLoading, errorMessage, isError, handleCallApi } = useCallApi();

  function upload(formData: FormData, onProgress?: (progress: number) => void) {
    return handleCallApi(() =>
      uploadAction(
        formData,
        (progressEvent) => handleOnProgress(progressEvent, onProgress),
        (progressEvent) => handleOnProgress(progressEvent, onProgress)
      )
    );
  }

  return { errorMessage, isError, isLoading, upload };
}

function handleOnProgress(progressEvent: ProgressEvent, callbackfn?: (progress: number) => void) {
  const progress = (progressEvent.loaded / progressEvent.total) * 50;
  callbackfn?.(progress);
}

export { useUpload };
