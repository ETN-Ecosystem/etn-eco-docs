import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useBlogPosts } from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './blogLanding.module.css';

export default function BlogLanding() {
  const { siteConfig } = useDocusaurusContext();
  const allPosts = useBlogPosts();

  // Group posts by tag
  const groupPosts = (tag) =>
    allPosts
      .filter((p) => p.metadata.tags.some((t) => t.label === tag))
      .slice(0, 3); // show latest 3

  const sections = [
    { title: '📰 News', tag: 'news', color: '#FFB400' },
    { title: '✍️ Blogs', tag: 'blog', color: '#4caf50' },
    { title: '📣 Announcements', tag: 'announcement', color: '#1e88e5' },
  ];

  return (
    <Layout
      title="ETN Blog"
      description="The latest news, blog posts, and official updates from the ETN Ecosystem"
    >
      <main className="container" style={{ padding: '2rem 1rem' }}>
        <h1 style={{ textAlign: 'center', fontSize: '2.4rem', marginBottom: '1.5rem' }}>
          🧠 Explore the ETN Blog
        </h1>
        <p style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 2rem', color: '#777' }}>
          News, insights, and updates from across the ETN Ecosystem — all in one place.
        </p>

        {sections.map((section) => {
          const posts = groupPosts(section.tag);
          return posts.length > 0 ? (
            <div key={section.tag} style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  color: section.color,
                  borderBottom: `2px solid ${section.color}`,
                  paddingBottom: '0.5rem',
                  marginBottom: '1.2rem',
                }}
              >
                {section.title}
              </h2>
              <div className="row">
                {posts.map(({ metadata }) => (
                  <div className={clsx('col col--4')} key={metadata.permalink}>
                    <div
                      className="card"
                      style={{
                        padding: '1rem',
                        borderRadius: '1rem',
                        height: '100%',
                        background: '#fff',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                      }}
                    >
                      <div className="card__body">
                        <h3>{metadata.title}</h3>
                        <p style={{ color: '#666', fontSize: '0.9rem' }}>{metadata.description}</p>
                        <p style={{ fontSize: '0.8rem', color: '#aaa' }}>{metadata.formattedDate}</p>
                      </div>
                      <div className="card__footer">
                        <Link to={metadata.permalink} className="button button--outline button--sm">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'right', marginTop: '1rem' }}>
                <Link to={`/blog/tags/${section.tag}`} className="button button--link">
                  View all {section.title}
                </Link>
              </div>
            </div>
          ) : null;
        })}
      </main>
    </Layout>
  );
}
