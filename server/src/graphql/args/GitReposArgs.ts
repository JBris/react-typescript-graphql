import Providers from "../../services/git/Providers";

import { ArgsType, Field, Int } from "type-graphql";
import { Min, Max, MinLength } from "class-validator";

@ArgsType()
class GitReposArgs {
  @Field(type => Providers, { description: "The search provider." } )
  provider: Providers;

  @Field({ description: "The name of the project" })
  @MinLength(1)
  project: string;

  @Field(type => Int, { nullable: true, description: "The number of results to return", defaultValue: 5 })
  @Min(0)
  @Max(100)
  quantity?: number;
}

export default GitReposArgs;