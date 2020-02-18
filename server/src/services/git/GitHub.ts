import { IGitHost, IGitCollection } from "git";
import { injectable } from "inversify";

@injectable()
class GitHub implements IGitHost {

    async search() : Promise<IGitCollection> {
        return { items: [] };
    }
}

export default GitHub;