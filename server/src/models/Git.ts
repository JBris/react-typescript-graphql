import { IGit } from "git";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class Git implements IGit {
  
    @Field(type => ID)
    id: string

    @Field()
    repo: string

    @Field()
    author: string
    
    @Field()
    host: string

    @Field()
    htmlUrl: string

    @Field()
    tagsUrl: string

    @Field()
    cloneUrl: string

    @Field({ nullable: true })
    description: string
} 

export default Git
