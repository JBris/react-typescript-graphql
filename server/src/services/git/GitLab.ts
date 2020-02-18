import { IGitHost, IGitCollection } from "git";
import { injectable } from "inversify";

@injectable()
class GitLab implements IGitHost {

    async search() : Promise<IGitCollection> {
        return { items: [] };
    }
}

export default GitLab;