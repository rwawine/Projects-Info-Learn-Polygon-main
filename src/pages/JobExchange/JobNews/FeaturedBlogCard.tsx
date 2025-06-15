import React from 'react';

interface FeaturedBlogCardProps {
  imageUrl: string;
  author: string;
  date: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  categoryBgColor: string;
  iconUrl?: string;
  isHorizontal?: boolean;
  className?: string;
}

const featuredCardStyles = {
  card: {
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
    minWidth: '240px',
  },
  horizontalCard: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'start',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
  },
  image: {
    objectPosition: 'center',
    width: '100%',
  },
  horizontalImage: {
    objectPosition: 'center',
    flex: 1,
    alignSelf: 'stretch',
    width: '100%',
    minWidth: '240px',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  content: {
    width: '100%',
    marginTop: '32px',
  },
  horizontalContent: {
    flex: 1,
    alignSelf: 'stretch',
    minWidth: '240px',
    marginTop: 'auto',
    marginBottom: 'auto',
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

export const FeaturedBlogCard: React.FC<FeaturedBlogCardProps> = ({
  imageUrl,
  author,
  date,
  title,
  description,
  category,
  categoryColor,
  categoryBgColor,
  iconUrl,
  isHorizontal = false,
  className = '',
}) => {
  if (isHorizontal) {
    return (
      <section className={className} style={featuredCardStyles.horizontalCard}>
        <img
          src={imageUrl}
          alt={title}
          style={featuredCardStyles.horizontalImage}
        />
        <div style={featuredCardStyles.horizontalContent}>
          <div style={featuredCardStyles.headingSection}>
            <p style={featuredCardStyles.author}>
              {author} • {date}
            </p>
            <div style={featuredCardStyles.titleSection}>
              <h2 style={featuredCardStyles.title}>
                {title}
              </h2>
              {iconUrl && (
                <div style={featuredCardStyles.iconWrap}>
                  <img
                    src={iconUrl}
                    alt=""
                    style={featuredCardStyles.icon}
                  />
                </div>
              )}
            </div>
            <p style={featuredCardStyles.description}>
              {description}
            </p>
          </div>
          <div style={{ ...featuredCardStyles.categories, color: categoryColor }}>
            <div style={featuredCardStyles.badge}>
              <span style={{ ...featuredCardStyles.badgeBase, backgroundColor: categoryBgColor }}>
                {category}
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <article className={className} style={featuredCardStyles.card}>
      <img
        src={imageUrl}
        alt={title}
        style={featuredCardStyles.image}
      />
      <div style={featuredCardStyles.content}>
        <div style={featuredCardStyles.headingSection}>
          <p style={featuredCardStyles.author}>
            {author} • {date}
          </p>
          <div style={featuredCardStyles.titleSection}>
            <h2 style={featuredCardStyles.title}>
              {title}
            </h2>
            {iconUrl && (
              <div style={featuredCardStyles.iconWrap}>
                <img
                  src={iconUrl}
                  alt=""
                  style={featuredCardStyles.icon}
                />
              </div>
            )}
          </div>
          <p style={featuredCardStyles.description}>
            {description}
          </p>
        </div>
        <div style={{ ...featuredCardStyles.categories, color: categoryColor }}>
          <div style={featuredCardStyles.badge}>
            <span style={{ ...featuredCardStyles.badgeBase, backgroundColor: categoryBgColor }}>
              {category}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};
