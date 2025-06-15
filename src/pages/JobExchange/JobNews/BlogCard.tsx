import React from 'react';

interface BlogCardProps {
  imageUrl: string;
  author: string;
  date: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  categoryBgColor: string;
  iconUrl?: string;
  className?: string;
}

const blogCardStyles = {
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
    minWidth: '240px',
  },
  image: {
    objectPosition: 'center',
    width: '100%',
  },
  content: {
    width: '100%',
    marginTop: '32px',
  },
  headingSection: {
    width: '100%',
  },
  author: {
    color: '#6941c6',
    fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: 1,
  },
  titleSection: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'start',
    alignItems: 'start',
    gap: '16px',
    width: '100%',
    marginTop: '12px',
  },
  title: {
    color: '#1a1a1a',
    flex: 1,
    fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: 1,
  },
  iconWrap: {
    width: '24px',
    paddingTop: '4px',
  },
  icon: {
    aspectRatio: '1',
    objectFit: 'contain' as const,
    objectPosition: 'center',
    width: '24px',
  },
  description: {
    color: '#667085',
    marginTop: '12px',
    fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: '16px',
    fontWeight: 400,
  },
  categories: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    gap: '8px',
    width: '100%',
    marginTop: '24px',
    fontFamily: 'Manrope, -apple-system, Roboto, Helvetica, sans-serif',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1,
  },
  badge: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
  },
  badgeBase: {
    borderRadius: '16px',
    alignSelf: 'stretch',
    padding: '2px 10px',
  },
};

export const BlogCard: React.FC<BlogCardProps> = ({
  imageUrl,
  author,
  date,
  title,
  description,
  category,
  categoryColor,
  categoryBgColor,
  iconUrl,
  className = '',
}) => {
  return (
    <article className={className} style={blogCardStyles.card}>
      <img
        src={imageUrl}
        alt={title}
        style={blogCardStyles.image}
      />
      <div style={blogCardStyles.content}>
        <div style={blogCardStyles.headingSection}>
          <p style={blogCardStyles.author}>
            {author} • {date}
          </p>
          <div style={blogCardStyles.titleSection}>
            <h3 style={blogCardStyles.title}>
              {title}
            </h3>
            {iconUrl && (
              <div style={blogCardStyles.iconWrap}>
                <img
                  src={iconUrl}
                  alt=""
                  style={blogCardStyles.icon}
                />
              </div>
            )}
          </div>
          <p style={blogCardStyles.description}>
            {description}
          </p>
        </div>
        <div style={{ ...blogCardStyles.categories, color: categoryColor }}>
          <div style={blogCardStyles.badge}>
            <span style={{ ...blogCardStyles.badgeBase, backgroundColor: categoryBgColor }}>
              {category}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
