import Git from "./Git";
import { IGitCollection } from "git";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
class GitCollection implements IGitCollection {
    @Field( type => [Git], { nullable: false } )
    items: Git[]
} 

export default GitCollection
