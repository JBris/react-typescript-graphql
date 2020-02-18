import { Container } from "inversify";
import Providers from "./git/Providers";
import { IGitHost } from "git";
import GitHub from "./git/GitHub";
import GitLab from "./git/GitLab";
import Bitbucket from "./git/Bitbucket";

const gitContainer = new Container();

gitContainer.bind<IGitHost>(Providers.GITHUB).to(GitHub);
gitContainer.bind<IGitHost>(Providers.GITLAB).to(GitLab);
gitContainer.bind<IGitHost>(Providers.BITBUCKET).to(Bitbucket);

export { gitContainer };