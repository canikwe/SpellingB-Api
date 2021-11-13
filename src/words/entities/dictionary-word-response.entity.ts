import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DictionaryWordRes {
  @Field({ nullable: true })
  word: string;

  @Field({ nullable: true })
  phonetic: string;

  @Field(() => [Phonetic], { nullable: true })
  phonetics: Phonetic[];

  @Field({ nullable: true })
  origin: string;

  @Field(() => [Meaning], { nullable: true })
  meanings: Meaning[];
}

@ObjectType()
class Phonetic {
  @Field({ nullable: true })
  text: string;

  @Field({ nullable: true })
  audio: string;
}

@ObjectType()
class Meaning {
  @Field({ nullable: true })
  partOfSpeech: string;

  @Field(() => [Definition], { nullable: true })
  definitions: Definition[];
}

@ObjectType()
class Definition {
  @Field({ nullable: true })
  definition: string;

  @Field({ nullable: true })
  example: string;
}
