import { registerEnumType } from "type-graphql";

enum Providers {
    GITHUB = "GITHUB",
    GITLAB = "GITLAB",
    BITBUCKET = "BITBUCKET",
}

registerEnumType(Providers, {
    name: "Providers", 
    description: "Available git repo providers.", 
  });

export default Providers;
