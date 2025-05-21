import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
  *[_type == "startup" && (
    !defined($search) || 
    $search == "" || 
    title match $search || 
    category match $search || 
    author->name match $search
  ) && defined(slug.current)]
  | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author->{_id, name, image, bio},
    views,
    description,
    category,
    image,
  }
`);



export const STARTUP_BY_ID_QUERY = `
  *[_type == "startup" && _id == $id][0] {
    _id,
    title,
    slug,
    _createdAt,
    author->{_id, username, image, bio, email, name},
    views,
    description,
    category,
    image,
    pitch
  }
`


// export const AUTHOR_DETAILS = `
//   *[_type == "author" && _id == $id][0] {
//     _id,
//     name,
//     username,
//     image,
//     email,
//     bio
//   }
// `

export const STARTUP_QUERY_VIEWS = defineQuery(`
  *[_type == "startup" && _id == $id][0] {
  _id, views
}
  `)

export const AUTHOR_BY_GOOGLE_ID_QUERY = defineQuery(`
  *[_type == 'author' && id == $id][0]{
  _id, id, name, username, email, image,bio
  }
  `)