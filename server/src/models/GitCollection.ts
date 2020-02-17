import Git from "./Git";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
class GitCollection {

    @Field( type => [Git], { nullable: false } )
    items: Git[]
    
} 

export default GitCollection
