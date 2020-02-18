import { IGitRepos, IGitCollection } from "git";

class GitHub implements IGitRepos {

    async search() : Promise<IGitCollection> {
        return { items: [] };
    }
}

export default GitHub;