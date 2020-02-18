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


 // app = info.context['request'].app
// search_map = app['search_map']
// if provider not in search_map: raise GraphQLError('Provider unavailable: ' + provider)
// git = search_map[provider]
// return await git.search(project, quantity)

export default GitCollectionResolver;
