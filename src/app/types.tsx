export interface Iaccounts {
    id: number,
    email: string,
    authToken: string,
    creationDate: string
  }

   export interface Iprofiles {
    id: number,
    country: string,
    marketplace: string
  }

 export interface Icompaigns {
    id: number,
    clicks: number,
    cost: number,
    date: string
  }
  export type allArray = Iaccounts | Iprofiles | Icompaigns
  export type funk = ([])=>void