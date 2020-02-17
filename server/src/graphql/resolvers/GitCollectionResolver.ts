import GitCollection from "../../models/GitCollection";
import GitReposArgs from "../args/GitReposArgs";
import { Resolver, Query, Args } from "type-graphql";

@Resolver(GitCollection) 
class GitCollectionResolver {

  @Query(returns => GitCollection)
  async gitRepos(@Args() { provider, project, quantity }: GitReposArgs) : Promise<GitCollection> {
    return { items: [] };
  }

}

export default GitCollectionResolver;
