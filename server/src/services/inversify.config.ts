import { Container } from "inversify";
import Providers from "./git/Providers";
import { IGitRepos } from "git";
import GitHub from "./git/GitHub";

const gitContainer = new Container();
gitContainer.bind<IGitRepos>(Providers.GITHUB).to(GitHub);

export { gitContainer };