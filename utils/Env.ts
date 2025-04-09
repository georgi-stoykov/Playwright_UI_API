export default class Env{
    public static readonly BaseUrl : string = process.env.BASE_URL as string;
    public static readonly CustomerEmail : string = process.env.CUSTOMER_EMAIL as string;
    public static readonly CustomerPassword : string = process.env.CUSTOMER_PASSWORD as string;
}