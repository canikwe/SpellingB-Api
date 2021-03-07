import { HttpServer } from '@nestjs/common';
import { DocumentNode } from 'graphql';
import * as request from 'supertest';
import { GraphQLErrorCode } from './gql-error-code.enum';

export class GqlTestRunner {
  static sendGqlRequest = async (
    client: HttpServer,
    gql: DocumentNode,
    expectedResErrorCode?: GraphQLErrorCode,
    expectedResponseBody?: any,
  ): Promise<request.Response> => {
    const query = (typeof 'object' && gql.loc && gql?.loc?.source?.body) || gql;
    const res = await request(client)
      .post('/graphql')
      .send({ operationName: null, query });

    GqlTestRunner.handleError(res, expectedResErrorCode);
    GqlTestRunner.handleResponseBody(res, expectedResponseBody);

    return res;
  };

  private static handleError = (
    res: request.Response,
    expectedResErrorCode?: GraphQLErrorCode,
  ): void => {
    if (expectedResErrorCode && !res.body.errors?.length) {
      throw new Error('Expected test to fail but it passed');
    }

    if (expectedResErrorCode && res.body.errors?.length) {
      expect(res.body.errors[0].extensions.code).toEqual(expectedResErrorCode);
    }

    if (!expectedResErrorCode && res.body.errors?.length) {
      expect(res.body.errors).not.toBeDefined();
    }
  };

  private static handleResponseBody = (
    res: request.Response,
    expectedResBody?: any,
  ): void => {
    expectedResBody && expect(res.body).toEqual(expectedResBody);
  };
}
