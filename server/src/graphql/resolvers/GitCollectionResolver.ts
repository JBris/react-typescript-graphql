import GitCollection from "../../models/GitCollection";
import GitReposArgs from "../args/GitReposArgs";
import { Resolver, Query, Args } from "type-graphql";
import { IGitHost } from "git";
import Providers from "../../services/git/Providers";
import { gitContainer } from "../../services/inversify.config";

@Resolver(of => GitCollection) 
class GitCollectionResolver {
  
  protected gitHosts: Map<string, IGitHost>;
 
  public constructor() {
    this.gitHosts = new Map<string, IGitHost>();
    for (const provider in Providers) {
      this.gitHosts.set(provider, gitContainer.get<IGitHost>(provider));
    }
  }

  @Query(returns => GitCollection)
  async gitRepos(@Args() { provider, project, quantity }: GitReposArgs) : Promise<GitCollection> {
    return { items: [] };
  }

}

export default GitCollectionResolver;
