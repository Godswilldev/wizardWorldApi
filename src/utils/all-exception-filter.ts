import { Request, Response } from "express";
import { HttpStatus } from "@nestjs/common/enums";
import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";

@Catch()
export class GlobalErrorHandler implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const httpStatus =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.CONFLICT;

    const cause = exception.cause;
    const name = exception.name;
    const message = exception.message;

    return response.status(httpStatus).json({
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: request.url,
      message,
      cause,
      name,
    });
  }
}
