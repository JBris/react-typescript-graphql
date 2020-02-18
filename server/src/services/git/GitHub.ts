import { IGitHost, IGitCollection, IGit } from "git";
import { injectable } from "inversify";
import got from "got";
import { URLSearchParams } from 'url';

@injectable()
class GitHub implements IGitHost {
    protected readonly endpoint : string = "https://api.github.com/search/repositories";

    async search(project : string, quantity: number) : Promise<IGitCollection> {
        const searchParams = new URLSearchParams([['q', project], ['per_page', quantity.toString() ]]);
        const body : any = await got(this.endpoint,{ searchParams, responseType: 'json', resolveBodyOnly: true } );
        const items: any[] = body.items;

        let gitCollection : IGitCollection = { items: [] };
        items.forEach(repo => {
            let searchResult : IGit = {};
            searchResult.id = repo.name;
            searchResult.repo = repo.name;
            searchResult.author = repo.owner.login;
            searchResult.host = "github.com";
            searchResult.htmlUrl = repo.html_url;
            searchResult.description = repo.description;
            searchResult.tagsUrl = repo.tags_url;
            searchResult.cloneUrl = repo.clone_url;
            gitCollection.items.push(searchResult);
        });

        return gitCollection;
    }
}

export default GitHub;