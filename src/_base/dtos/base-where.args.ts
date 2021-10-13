import { Type } from '@nestjs/common';
import { Field, InputType } from '@nestjs/graphql';

type Constructor<T> = new (...args: any[]) => T;

export function BaseWhereDto<T extends Type<any>>(classRef: T): any {
  @InputType({ isAbstract: true })
  abstract class BaseWhereHost extends classRef {
    constructor(...param: any[]) {
      super();
      console.log(classRef);
      // applyDecorators(classRef);
    }
    @Field(() => String, { nullable: true })
    AND?: string;
    // @Field(() => BaseWhereHost, { nullable: true })
    // AND?: BaseWhereHost;

    // @Field(() => BaseWhereHost)
    // OR?: BaseWhereHost;

    // @Field(() => BaseWhereHost)
    // NOT?: BaseWhereHost;
  }

  return BaseWhereHost;
}

const applyDecorators = <T extends Type<Constructor<unknown>>>(target: T) => {
  for (const key of Object.getOwnPropertyNames(target.prototype)) {
    if (key !== 'constructor') {
      // let descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
      // console.log(descriptor);
      // descriptor = Field();
      // this[key] = Object.defineProperty(this, key, Field());
      // if (descriptor) {
      //   Object.defineProperty(target.prototype, key, descriptor);
      // }
    }
  }
};
