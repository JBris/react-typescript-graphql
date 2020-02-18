import { IGit } from "git";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class Git implements IGit {
  
    @Field(type => ID, { nullable: true })
    id?: string

    @Field({ nullable: true })
    repo?: string

    @Field({ nullable: true })
    author?: string
    
    @Field({ nullable: true })
    host?: string

    @Field({ nullable: true })
    htmlUrl?: string

    @Field({ nullable: true })
    tagsUrl?: string

    @Field({ nullable: true })
    cloneUrl?: string

    @Field({ nullable: true })
    description?: string
} 

export default Git
