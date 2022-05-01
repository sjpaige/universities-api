import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UniversitiesModule } from './universities/universities.module';
import { join } from 'path';
import { UniversitiesResolver } from './universities/universities.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
    UniversitiesModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}