export interface IGit {
    id: string
    repo: string
    author: string
    host: string
    htmlUrl: string
    tagsUrl: string
    cloneUrl: string
    description: string
}

export interface IGitCollection {
    items: IGit[]
}

export interface IGitHost {
    search(): Promise<IGitCollection>;
}
