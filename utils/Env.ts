export default class Env {
    public static readonly BaseWebUrl: string = process.env.BASE_WEB_URL as string;
    public static readonly BaseApiUrl: string = process.env.BASE_API_URL as string;
    public static readonly CustomerEmail: string = process.env.CUSTOMER_EMAIL as string;
    public static readonly CustomerPassword: string = process.env.CUSTOMER_PASSWORD as string;
}
