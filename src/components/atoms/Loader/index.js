import styled from 'styled-components';
import React from 'react';
import ContentLoader from 'react-content-loader';

const index = ({ line, box, className }) => {
  return (
    <>
      {line && (
        <LineWrapper className={className}>
          <ContentLoader
            speed={2}
            viewBox="0 0 340 84"
            backgroundColor="#d1d1d1"
            foregroundColor="#f0f0f0"
            className="svg"
          >
            <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
            <rect x="71" y="0" rx="3" ry="3" width="140" height="11" />
          </ContentLoader>
        </LineWrapper>
      )}
      {box && (
        <ContentLoader
          speed={2}
          width={340}
          height={84}
          viewBox="0 0 340 84"
          backgroundColor="#ee8b8b"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
          <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
          <rect x="113" y="43" rx="3" ry="3" width="53" height="11" />
          <rect x="176" y="44" rx="3" ry="3" width="72" height="11" />
          <rect x="1" y="43" rx="3" ry="3" width="100" height="11" />
          <rect x="223" y="0" rx="3" ry="3" width="37" height="11" />
          <rect x="1" y="20" rx="3" ry="3" width="140" height="11" />
          <rect x="149" y="20" rx="3" ry="3" width="173" height="11" />
        </ContentLoader>
      )}
    </>
  );
};

export default index;

const LineWrapper = styled.div`
  height: 30px;
  .svg {
  }
`;
