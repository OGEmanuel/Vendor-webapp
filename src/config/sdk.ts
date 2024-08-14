import { AuthApi, MeApi, PasswordApi, VerificationsApi } from '@/sdk/auth';
import { appAxiosInstance } from './axios-instance';
import { UploadApi, BanksApi, DataTypesApi, LocationApi} from '@/sdk/miscellaneous';
import { MemberApi, OutletApi, VendorApi } from '@/sdk/vendor';
import { ServerPath } from '@/sdk/setup';

export const authApi = new AuthApi(undefined, ServerPath, appAxiosInstance);
export const meApi = new MeApi(undefined, ServerPath, appAxiosInstance);
export const passwordApi = new PasswordApi(undefined, ServerPath, appAxiosInstance);
export const verificationApi = new VerificationsApi(undefined, ServerPath, appAxiosInstance);

export const uploadApi = new UploadApi(undefined, ServerPath, appAxiosInstance);

export const vendorApi = new VendorApi(undefined,ServerPath, appAxiosInstance);
export const outletApi = new OutletApi(undefined,ServerPath, appAxiosInstance);
export const memberApi = new MemberApi(undefined, ServerPath, appAxiosInstance);


export const banksApi = new BanksApi(undefined, ServerPath, appAxiosInstance);


export const locationApi = new LocationApi(undefined, ServerPath, appAxiosInstance);

export const dataTypesApi = new DataTypesApi(undefined, ServerPath, appAxiosInstance);