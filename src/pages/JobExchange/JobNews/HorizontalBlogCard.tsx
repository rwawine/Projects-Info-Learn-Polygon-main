import React from 'react';

interface HorizontalBlogCardProps {
  imageUrl: string;
  author: string;
  date: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  categoryBgColor: string;
  className?: string;
}

const horizontalCardStyles = {
  card: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'start',
    alignItems: 'start',
    gap: '24px',
    width: '100%',
  },
  image: {
    objectPosition: 'center',
    width: '320px',
    minWidth: '240px',
  },
  content: {
    flex: 1,
    minWidth: '240px',
  },
  headingSection: {
    width: '100%',
  },
  author: {
    color: '#6941c6',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: 1,
  },
  titleSection: {
    width: '100%',
    marginTop: '12px',
  },
  title: {
    color: '#1a1a1a',
    fontSize: '18px',
    fontWeight: 600,
    lineHeight: 2,
  },
  description: {
    color: '#667085',
    marginTop: '8px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  categories: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    gap: '8px',
    width: '100%',
    marginTop: '24px',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1,
    whiteSpace: 'nowrap' as const,
    textAlign: 'center' as const,
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

export const HorizontalBlogCard: React.FC<HorizontalBlogCardProps> = ({
  imageUrl,
  author,
  date,
  title,
  description,
  category,
  categoryColor,
  categoryBgColor,
  className = '',
}) => {
  return (
    <article className={className} style={horizontalCardStyles.card}>
      <img
        src={imageUrl}
        alt={title}
        style={horizontalCardStyles.image}
      />
      <div style={horizontalCardStyles.content}>
        <div style={horizontalCardStyles.headingSection}>
          <p style={horizontalCardStyles.author}>
            {author} • {date}
          </p>
          <div style={horizontalCardStyles.titleSection}>
            <h3 style={horizontalCardStyles.title}>
              {title}
            </h3>
            <p style={horizontalCardStyles.description}>
              {description}
            </p>
          </div>
        </div>
        <div style={{ ...horizontalCardStyles.categories, color: categoryColor }}>
          <div style={horizontalCardStyles.badge}>
            <span style={{ ...horizontalCardStyles.badgeBase, backgroundColor: categoryBgColor }}>
              {category}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
