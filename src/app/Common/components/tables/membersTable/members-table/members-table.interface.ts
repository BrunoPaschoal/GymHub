export interface IMemberTableData {
  id: string;
  name: string;
  phone: string;
  status: MemberStatusEnum;
  avatar: string;
}

export enum MemberStatusEnum {
  matriculated = 'matriculado',
  registered = 'cadastrado',
  inactive = 'inativo',
}
