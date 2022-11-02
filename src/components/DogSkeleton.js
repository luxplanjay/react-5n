import ContentLoader from 'react-content-loader';

export const DogSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="247" y="16" rx="2" ry="2" width="140" height="10" />
      <rect x="250" y="42" rx="2" ry="2" width="140" height="10" />
      <rect x="9" y="15" rx="2" ry="2" width="224" height="224" />
      <rect x="250" y="70" rx="0" ry="0" width="140" height="14" />
    </ContentLoader>
  );
};
