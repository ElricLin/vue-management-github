import request from './request'
const LoginUrl = process.env.NODE_ENV === 'development'?'/api/coding':'';

export const LoginApi = (param) => request.post(`${LoginUrl}/tokens`,param);

export const getdepartment = (param) => request.get(`${LoginUrl}/departments`,{params:param});

export const editdepartment = (param) => request.put(`${LoginUrl}/departments/${param.id}`,param);

export const adddepartment = (param) => request.post(`${LoginUrl}/departments`,param);

export const deldepartment = (param) => request.delete(`${LoginUrl}/departments/${param.id}`,param);