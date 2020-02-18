import { IGitHost, IGitCollection, IGit } from "git";
import { injectable } from "inversify";
import got from "got";
import { URLSearchParams } from 'url';
import cheerio from 'cheerio'

@injectable()
class Bitbucket implements IGitHost {
    protected readonly url : string = "https://bitbucket.org/repo/all";
    protected readonly endpoint : string = "https://api.bitbucket.org/2.0/repositories";

    async search(project : string, quantity: number) : Promise<IGitCollection> {
        const pages : number = Math.floor(quantity / 10 + 2 )  
        const searchParams = new URLSearchParams([['name', project]]);
        let promises: Promise<any>[] = [];
        for (let i = 1; i < pages; i++) {
            const page : string =  i.toString();
            const req : Promise<string> = got(`${this.url}/${page}`,{ searchParams, responseType: 'text', resolveBodyOnly: true } );
            promises.push(req);
        }

        const searchResponses : string[] = await Promise.all(promises);
        promises = [];
        let links : string[] = [];
        searchResponses.forEach(res => {
            const $ : CheerioStatic = cheerio.load(res);
            $('a[class="repo-link"]').each((index, elem) => {
                const link : string | undefined = $(elem).attr('href'); 
                if (link) { links.push(link); }
              });
        });

        const length : number = links.length;
        let gitCollection : IGitCollection = { items: [] };
        if (length == 0) { return gitCollection; }
        if (length > quantity) { links.length = quantity; }

        links.forEach(link => {
            const req : Promise<JSON> = got(`${this.endpoint}${link}`, { responseType: 'json', resolveBodyOnly: true });
            promises.push(req);
        });
        const repos : any[] = await Promise.all(promises);

        repos.forEach(repo => {
            let searchResult : IGit = {};
            searchResult.id = repo.name;
            searchResult.repo = repo.name;
            searchResult.author = repo.owner.nickname;
            if (typeof searchResult.author == 'undefined') { searchResult.author = repo.owner.username; }
            searchResult.host = "bitbucket.org";
            searchResult.htmlUrl = repo.links.html.href;
            searchResult.description = repo.description;
            searchResult.tagsUrl = repo.links.tags.href;
            searchResult.cloneUrl = repo.links.clone[0].href;
            gitCollection.items.push(searchResult);
        });

        return gitCollection;
 
    }
}

export default Bitbucket;