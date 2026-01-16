import { type ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

export const SmoothScroll = ({ children }: { children: ReactNode }) => {
  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};
