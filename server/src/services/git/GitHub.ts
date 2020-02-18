import { IGitHost, IGitCollection } from "git";
import { injectable } from "inversify";
import got from "got";

@injectable()
class GitHub implements IGitHost {
    protected readonly endpoint : string = "https://api.github.com/search/repositories";

    async search() : Promise<IGitCollection> {
        // res = await self.session.get(
        //     self.endpoint,
        //     params={
        //         'q': project,
        //         'per_page': quantity
        //     } 
        // )

        // const json = await got(this.endpoint);
        // const res : Response<'json'> = await (async () => {
        //     try {
        //         const response = await got('https://sindresorhus.com');
        //         console.log(response.body);
        //         //=> '<!doctype html> ...'
        //     } catch (error) {
        //         console.log(error.response.body);
        //         //=> 'Internal server error ...'
        //     }
        // })();
        return { items: [{id: "foo", repo: "bar", author: "blah", host: "blah", description: "blah", htmlUrl: "d", cloneUrl: "d", tagsUrl: "s"}] };
    }
}

export default GitHub;