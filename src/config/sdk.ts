import { AuthApi, MeApi, PasswordApi, VerificationsApi } from '@/sdk/auth';
import { appAxiosInstance } from './axios-instance';
import { UploadApi, BanksApi, DataTypesApi} from '@/sdk/miscellaneous';
import { MemberApi, OutletApi, VendorApi } from '@/sdk/vendor';

export const authApi = new AuthApi(undefined, undefined, appAxiosInstance);
export const meApi = new MeApi(undefined, undefined, appAxiosInstance);
export const passwordApi = new PasswordApi(undefined, undefined, appAxiosInstance);
export const verificationApi = new VerificationsApi(undefined, undefined, appAxiosInstance);

export const uploadApi = new UploadApi(undefined, undefined, appAxiosInstance);

export const vendorApi = new VendorApi(undefined, undefined, appAxiosInstance);
export const outletApi = new OutletApi(undefined, undefined, appAxiosInstance);
export const memberApi = new MemberApi(undefined, undefined, appAxiosInstance);


export const banksApi = new BanksApi(undefined, undefined, appAxiosInstance);

export const dataTypesApi = new DataTypesApi(undefined, undefined, appAxiosInstance);