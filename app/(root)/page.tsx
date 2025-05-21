import React from 'react';
import StartupCard, { StartupCardType } from '@/components/StartupCard';
import SearchFrom from '@/components/SearchFrom';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';
import { auth } from '@/auth';

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const params = { search: query || '' };

  const { data: posts } = await sanityFetch({
    query: STARTUPS_QUERY,
    params
  });

  const session = await auth()
  console.log(session?.user?.id)

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading rounded-2xl'>
          Pitch Your Startup <br />
          Connect with Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchFrom query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search Results for "${query}"` : "All Startups"}
        </p>
        <ul className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 mt-7'>
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <li>No Startup Found</li>
          )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}