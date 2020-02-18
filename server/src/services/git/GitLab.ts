import { IGitHost, IGitCollection, IGit } from "git";
import { injectable } from "inversify";
import got from "got";
import { URLSearchParams } from 'url';

@injectable()
class GitLab implements IGitHost {
    protected readonly endpoint : string = "https://gitlab.com/api/v4/projects";

    async search(project : string, quantity: number) : Promise<IGitCollection> {
        const searchParams = new URLSearchParams([ ['search', project], ['per_page', quantity.toString()], ['scope','project'] ]);
        const body : any[] = await got(this.endpoint,{ searchParams, responseType: 'json', resolveBodyOnly: true } );

        let gitCollection : IGitCollection = { items: [] };
        body.forEach(repo => {
            let searchResult : IGit = {};
            searchResult.id = repo.name;
            searchResult.repo = repo.name;
            searchResult.author = repo.namespace.path;
            searchResult.host = "gitlab.com";
            searchResult.htmlUrl = repo.web_url;
            searchResult.description = repo.description;
            searchResult.tagsUrl = `https://gitlab.com/api/v4/projects/${repo.id}/repository/tags`;
            searchResult.cloneUrl = repo.http_url_to_repo;
            gitCollection.items.push(searchResult);
        });

        return gitCollection;
    }
}
 
export default GitLab;