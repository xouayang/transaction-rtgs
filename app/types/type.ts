export interface transactionsType {
  id: string;
  fnc_id: string;
  fnc_name: string;
  from_account: string;
  from_account_ccy: string;
  from_account_name: string;
  to_account: string;
  to_account_ccy: string;
  to_account_name: string;
  ref_no: string;
  amount: number;
  fee: number;
  fee_amount_ccy: string;
  from_bank: string;
  to_bank: string;
  status_desc: string;
  status_code: string;
  created_at: string | Date;
  payment_date:string
}
export interface totalType {
  amout: number;
  fee: number;
}

export interface StatusInfo {
  color: "success" | "warning" | "danger" | "default";
  label: string;
  icon: React.ReactNode;
  textColor: string;
  animate: string;
}
export interface RTGS_ILPFTTYPE {
  data?:transactionsType
}
