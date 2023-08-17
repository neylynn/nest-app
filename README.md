# install dependencies
npm install

# create .env file in project's root folder
insert one lin in .env file => DATABASE_URL="postgresql://postgres:postgres@localhost:5432/db_name?schema=public"

# prisma migrate
npx prisma migrate deploy

# database seeding
npx prisma db seed

# launch prisma studio 
npx prisma studio

# lunch the server
npm run start

# application url
localhost:3000/api

# additional questions
# 2.Explain the differences between middleware and interceptors in NestJS and give examples of usage of each.

In NestJS, both middleware and interceptors are used to process incoming requests before they reach the route handler. However, they serve different purposes:

Middleware: Middleware functions are functions that execute sequentially in the order they are defined. They can modify the request and response objects, and they can terminate the request-response cycle by sending a response. Middleware is often used for tasks such as logging, authentication, error handling, etc.

Example of middleware usage:
// Logging Middleware
export function loggerMiddleware(req, res, next) {
  console.log(`Request URL: ${req.url}`);
  next();
}

Interceptors: Interceptors are classes that allow you to manipulate the data flowing into the route handler or the response flowing out from it. They provide more granular control over the incoming request and the outgoing response, including modifying the response body, headers, and more.

Example of interceptor usage:
// Transform Interceptor
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(data => ({ data, timestamp: new Date() })));
  }
}

# 3.Describes and illustrates the use of Guards in NestJS for access authentication and authentication in API paths.

Guards in NestJS are used to protect routes and control access based on certain conditions. There are various types of guards, including authentication guards and authorization guards.

For access authentication, you can use an authentication guard to ensure that a user is logged in before accessing certain routes.

Example of an authentication guard:
@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return request.isAuthenticated(); // Assuming you have a method to check authentication
  }
}


# 4.Write the sql file from the requirement given below.

You can see sql query in prisma/migrations/migration.sql file.
