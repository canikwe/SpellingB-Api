import { gql } from 'apollo-server-express';
import { Word } from '../../@generated/prisma-nestjs-graphql/_models/word.model';

export const WordsQuery = gql`
  query {
    Words {
      id
    }
  }
`;

export const WordQuery = (word: Word) => {
  return gql`
      query {
        Word(id: ${word?.id}) {
          id
        }
      }
    `;
};

export const RandomWordAndDefinitionQuery = gql`
  query {
    RandomWordAndDefinition {
      word
      phonetic
      origin
      phonetics {
        text
      }
      meanings {
        partOfSpeech
        definitions {
          definition
          example
        }
      }
    }
  }
`;

export const WordsAndDefinitionsQuery = gql`
  query {
    WordsAndDefinitions(word: "drinks") {
      word
      phonetic
      origin
      phonetics {
        text
      }
      meanings {
        partOfSpeech
        definitions {
          definition
          example
        }
      }
    }
  }
`;
