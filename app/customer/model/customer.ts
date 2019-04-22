export class Customer{
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public DateOfBirth: string,
    public adress: string,
    public phoneNumber?: number,
    public email?: string,
    public description?: string
  ) { }
}
