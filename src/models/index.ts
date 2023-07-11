interface ImageData {
  // @ts-ignore
  data?: any;
  id: number;
  attributes: {
    name: string;
    alternativeText?: string;
    caption?: string;
    width?: number;
    height?: number;
    formats?: {
      large: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
      small: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
      medium: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
      thumbnail: {
        ext: string;
        url: string;
        hash: string;
        mime: string;
        name: string;
        path: null;
        size: number;
        width: number;
        height: number;
      };
    };
    hash?: string;
    ext?: string;
    mime?: string;
    size?: number;
    url: string;
    previewUrl?: null;
    provider?: string;
    provider_metadata?: null;
    createdAt?: string;
    updatedAt?: string;
  };
}

export interface Scheme {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: ImageData[];
    };
  };
}