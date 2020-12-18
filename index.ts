interface PostGateKeeper {
    title: string;
    daysOld: number;
    published: boolean;
}

const post = {
    title: "Latest title",
    daysOld: 10,
    published: false
};

const printPost = (postToPrint: PostGateKeeper) => {
    return `${postToPrint.title} - ${postToPrint.daysOld} days old`;
};

printPost(post);