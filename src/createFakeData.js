import Post from './models/post';

export default function createFakeData() {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `Post #${i}`,
    body: 'test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test',
    tags: ['fake', 'data'],
  }));

  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
