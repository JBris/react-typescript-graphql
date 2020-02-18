import { IGitHost, IGitCollection } from "git";
import { injectable } from "inversify";

@injectable()
class Bitbucket implements IGitHost {

    async search() : Promise<IGitCollection> {
        return { items: [] };
    }
}

export default Bitbucket;