import 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    roles: string[];
    username: string;
    image?: string | null;
  }

  interface Session {
    user: User;
  }
}