import client from "../utils/client";

const postQuery = `*[_type == "post"] {
  _id,
  title,
  'slug': slug.current,
  author-> {
    name,
    nickname,
    'image': image.asset->url
  },
  'body': pt::text(body)
}`;

async function getPosts() {
  return client.fetch(postQuery);
}

export { getPosts };
