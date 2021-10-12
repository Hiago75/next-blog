import { GlowEffectButton } from './style';

interface IBlogButtonRequest {
  children: React.ReactNode;
}

export const BlogButton = ({ children }: IBlogButtonRequest) => {
  return <GlowEffectButton>{children}</GlowEffectButton>;
};
