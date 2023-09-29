import { ArgumentsHost, Catch } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { InvalidRelationErrors } from 'src/errors/invalid-relation-errors';

@Catch(InvalidRelationErrors)
export class InvalidRelationExceptionFilter extends BaseExceptionFilter {
  catch(exception: InvalidRelationErrors, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    return response.status(422).json({
      statusCode: 422,
      message: exception.message,
    });
  }
}
