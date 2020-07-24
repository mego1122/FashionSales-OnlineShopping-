export class order
{
    constructor(
    private Id:number,
    private CustomerId :number,
    private ProviderId :number,
    private TotalPrice :number,
    private DateTime: Date ,
    private State:OrderState ){}
}


export enum OrderState
{
    pending,accepted,done
}