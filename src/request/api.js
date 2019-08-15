import request from './request'
const LoginUrl = process.env.NODE_ENV === 'development'?'/api/coding':'';

export const LoginApi = (param) => request.post(`${LoginUrl}/tokens`,param);

