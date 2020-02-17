import { registerEnumType } from "type-graphql";

enum Providers {
    GITHUB = "github",
    GITLAB = "gitlab",
    BITBUCKET = "bitbucket",
}

registerEnumType(Providers, {
    name: "Providers", 
    description: "Available git repo providers.", 
  });

export default Providers;
