export type Project = {
  id:number;
  title:string;
  tasks:Task[]
}

export type Task = {
  id:number;
  title:string;
  description:string;
  expirationDate:string;
  status: string; // @TODO criar enum ?
} 
